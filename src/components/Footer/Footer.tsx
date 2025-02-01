import { Link } from "react-router";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        Módulo 1: Introducción al Desarrollo Web (Launch)
        <Link to="https://the-refactor-project.com" target="_blank">
          <img
            src="/isotipo-the-refactor-project-blanco.svg"
            alt="Logotipo de The Refactor Project"
            height="20"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
