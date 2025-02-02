import { PropsWithChildren } from "react";
import { useAuth } from "../../auth/useAuth";
import LoginWithGitHub from "../../auth/components/LoginWithGitHub/LoginWithGitHub";

const Protected: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return children;
  }

  return (
    <div className="login">
      <LoginWithGitHub />
    </div>
  );
};

export default Protected;
