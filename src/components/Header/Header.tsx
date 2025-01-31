import "./Header.css";

const Header: React.FC = () => {
  const isLogged = true;

  return (
    <header className="main-header">
      <a href="/">
        <img
          src="/logo-the-refactor-project.svg"
          className="main-logo"
          alt="Logotipo de The Refactor Project"
          width="200"
          height="64"
        />
      </a>
      <h1 className="main-title">Bootcamp de Programación Web Full Stack</h1>
      {isLogged && (
        <a href="/api/auth/signout" className="signout">
          Cerrar sesión
        </a>
      )}
    </header>
  );
};

export default Header;
