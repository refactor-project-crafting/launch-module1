import { useCallback } from "react";
import { useAuth } from "../auth/useAuth";

const useConsoleDebug = () => {
  const { username } = useAuth();

  const debug = useCallback(
    (...messages: unknown[]): void => {
      if (username === "the-refactor-project") {
        console.log(...messages);
      }
    },
    [username]
  );

  return debug;
};

export default useConsoleDebug;
