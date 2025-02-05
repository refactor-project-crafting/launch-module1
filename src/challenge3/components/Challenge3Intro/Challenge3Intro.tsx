import { Link } from "react-router";

const Challenge3Intro: React.FC = () => {
  return (
    <>
      <h1>Módulo 1: Introducción al Desarrollo Web (Launch)</h1>
      <h2>Reto número 3: La aplicación de sorteos</h2>
      <img src="/images/dados.webp" alt="Unos dados" />
      <p>
        Enhorabuena por todo lo que has conseguido hasta ahora. Vemos que estás
        aportando bastante al equipo, y por eso te queremos dar un reto más
        grande. Vamos a construir una aplicación para gestionar sorteos en redes
        sociales. Nos vendrá bien tu ayuda para terminar toda la lógica de
        tratamiento de los datos.
      </p>
      <p>
        Antes de meterte en el barro, necesitamos que avances con algunas partes
        en las que aún no hemos profundizado. Empecemos por{" "}
        <Link to="/challenge3/git/">Git</Link>.
      </p>
    </>
  );
};

export default Challenge3Intro;
