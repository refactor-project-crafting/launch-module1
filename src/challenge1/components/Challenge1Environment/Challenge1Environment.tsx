import { Link } from "react-router";

const Challenge1Environment: React.FC = () => {
  return (
    <>
      <h1>Reto 1-fase 4: Un entorno de desarrollo</h1>
      <img
        src="/images/root-folder.webp"
        alt="La carpeta root de un proyecto abierta en VS Code"
      />
      <p>
        Hasta ahora hemos estado trabajando con un entorno de desarrollo muy
        básico, pero a medida que vayamos avanzando en el curso, necesitaremos
        herramientas más avanzadas para poder trabajar de manera más eficiente.
      </p>
      <p>
        Ya iremos aprendiendo a utilizar estas herramientas, pero las vamos a
        incluir desde ahora. Para ello te vamos a proporcionar un starter para
        que desarrolles tus programas a partir de él.
      </p>
      <p>
        Aquí tienes un <strong>starter</strong> para tu próximo programa. Lee
        bien el <code>README.md</code> para entender bien cómo utilizarlo.
      </p>
      <Link
        to="https://github.com/refactor-project-crafting/launch-starter-js"
        target="_blank"
      >
        launch-starter-js
      </Link>
    </>
  );
};

export default Challenge1Environment;
