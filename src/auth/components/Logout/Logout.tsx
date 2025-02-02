import { useAuth } from "../../useAuth";

export const LogoutButton = () => {
  const { logout, username } = useAuth();

  if (!username) {
    return null;
  }

  return (
    <button className="signout" onClick={logout}>
      Cerrar sesión
    </button>
  );
};
