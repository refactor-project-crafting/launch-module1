import { Link } from "react-router";
import "./Header.css";

const Header: React.FC = () => {
  const isLogged = true;

  return (
    <header className="main-header">
      <Link to="/">
        <img
          src="/logo-the-refactor-project.svg"
          className="main-logo"
          alt="Logotipo de The Refactor Project"
          width="200"
          height="64"
        />
      </Link>
      <h1 className="main-title">Bootcamp de Programación Web Full Stack</h1>
      {isLogged && (
        <Link to="/api/auth/signout" className="signout">
          Cerrar sesión
        </Link>
      )}
    </header>
  );
};

export default Header;
