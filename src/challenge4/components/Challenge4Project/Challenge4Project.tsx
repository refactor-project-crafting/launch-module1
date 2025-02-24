import { Link } from "react-router";

const Challenge4Project: React.FC = () => {
  return (
    <>
      <h2>
        El proyecto <code>classroom</code>
      </h2>
      <p>
        Aquí tienes el repo con el proyecto:{" "}
        <Link
          to="https://github.com/refactor-project-crafting/launch-classroom"
          target="_blank"
        >
          launch-classroom
        </Link>
      </p>
      <p>
        Si ejecutas la aplicación verás que ya hay una UI incompleta. Cuando
        consigas que funcione el JS del listado de estudiantes, verás que está
        ya inicializado con cuatro estudiantes.
      </p>
    </>
  );
};

export default Challenge4Project;
