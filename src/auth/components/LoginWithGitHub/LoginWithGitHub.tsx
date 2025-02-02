import { useAuth } from "../../useAuth";

const LoginWithGitHub = () => {
  const { login, username } = useAuth();

  if (username) {
    return null;
  }

  return (
    <button className="signin" onClick={login}>
      Inicia sesión con GitHub
    </button>
  );
};

export default LoginWithGitHub;
