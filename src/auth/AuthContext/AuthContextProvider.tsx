import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { AuthContextStructure } from "../types";
import AuthContext from "./AuthContext";
import {
  getAuthenticatedUser,
  setUsernameCookie,
  signInWithGitHub,
  signOut,
  supabase,
} from "../supabase";
import { getCookie } from "../cookies";
import flagsmith from "../flagsmith";
import useConsoleDebug from "../../debug/useConsoleDebug";

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState("");

  const debug = useConsoleDebug();

  const login = async () => {
    await signInWithGitHub();
  };

  const logout = () => {
    signOut();
    setUsername("");
  };

  useEffect(() => {
    const storedUsername = getCookie("trp_username");

    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      getAuthenticatedUser().then(async (user) => {
        if (user?.user_metadata?.user_name) {
          const { data: dbAppsData, error: dbAppsError } = await supabase
            .from("apps")
            .select("id")
            .eq("name", import.meta.env.VITE_APP_NAME)
            .single();

          if (dbAppsError) {
            debug(dbAppsError.message);
            return;
          }

          const { data: dbUserData, error: dbUserError } = await supabase
            .from(import.meta.env.VITE_USERS_TABLE)
            .select("*")
            .eq("app_id", dbAppsData.id)
            .eq("username", user.user_metadata.user_name);

          if (dbUserError) {
            debug(dbUserError.message);
            return;
          }

          debug(
            `SELECT * FROM ${import.meta.env.VITE_USERS_TABLE} WHERE app_id = ${
              dbAppsData.id
            } AND username = '${user.user_metadata.user_name}'`
          );
          debug("Retrieveao de users202502: ");
          debug(dbUserData);

          if (!dbUserData || dbUserData.length === 0) {
            debug("Sin autorización");
            return;
          }

          setUsername(user.user_metadata.user_name);
          setUsernameCookie(user.user_metadata.user_name);
        }
      });
    }
  }, [debug]);

  useEffect(() => {
    if (!username) {
      flagsmith.logout();
      return;
    }

    flagsmith
      .identify(username)
      .then(() => {
        debug("Identificado en Flagsmith con username: ", username);
      })
      .catch((error) =>
        console.error("Error al identificar en Flagsmith: ", error)
      );
  }, [username, debug]);

  const contextValue: AuthContextStructure = useMemo(
    () => ({
      isLoggedIn: username !== "",
      username,
      login,
      logout,
    }),
    [username]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
