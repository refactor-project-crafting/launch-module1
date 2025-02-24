import { Link } from "react-router";

const Challenge4Intro: React.FC = () => {
  return (
    <>
      <h1>Módulo 1: Introducción al Desarrollo Web (Launch)</h1>
      <h2>
        Reto número 4: La aplicación <code>Classroom</code>
      </h2>
      <img src="/images/clase.webp" alt="Una clase" />
      <p>
        Habiendo demostrado tus habilidades para hacer avanzar las aplicaciones
        donde has colaborado, llega el momento de entrar en una aplicación más
        grande.
      </p>
      <p>
        Se está desarrollando una aplicación de gestión interna de una academia.
        La aplicación se llama <code>Classroom</code> y se encarga de gestionar
        los cursos, los alumnos y las notas de los alumnos.
      </p>
      <p>
        La interfaz de usuario está empezada, pero el equipo de desarrollo
        necesita ayuda para finalizarla y también para implementar la lógica de
        la aplicación.
      </p>
      <p>
        Antes de empezar a trabajar en el proyecto, vamos a hablar un poco de{" "}
        <Link to="/challenge4/presentacion/">la capa de presentación</Link>.
      </p>
    </>
  );
};

export default Challenge4Intro;
