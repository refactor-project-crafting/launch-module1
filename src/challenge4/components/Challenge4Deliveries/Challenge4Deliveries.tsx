import { Link } from "react-router";

const Challenge4Deliveries: React.FC = () => {
  return (
    <>
      <h2>Entregas del reto 4</h2>
      <p>
        Aquí tienes el resumen de todas las entregas que te pedimos en el reto
        4.
      </p>
      <h3>
        <Link to="/challenge4/presentacion/html/#entrega-r4-jerarquia-html-1">
          Entrega <code>R4-jerarquia-html-1</code>
        </Link>
      </h3>
      <p>Entrega la URL de tu diagrama de Excalidraw.</p>
      <h3>
        <Link to="/challenge4/presentacion/html/#entrega-r4-jerarquia-html-2">
          Entrega <code>R4-jerarquia-html-2</code>
        </Link>
      </h3>
      <p>Entrega la URL de tu diagrama de Excalidraw.</p>
      <h3>
        <Link to="/challenge4/presentacion/html/#entrega-r4-html">
          Entrega <code>R4-html</code>
        </Link>
      </h3>
      <p>Entrega la URL de tu proyecto de CodeSandbox.</p>
      <h3>
        <Link to="/challenge4/presentacion/propiedades-css/#entrega-r4-css">
          Entrega <code>R4-css</code>
        </Link>
      </h3>
      <p>Entrega la URL de tu proyecto de CodeSandbox.</p>
      <h3>
        <Link to="/challenge4/presentacion/accesibilidad/#entrega-r4-a11y-informe">
          Entrega <code>R4-a11y-informe</code>
        </Link>
      </h3>
      <p>Escribe la lista de puntos en el mismo formulario.</p>
      <h3>
        <Link to="/challenge4/presentacion/accesibilidad/#entrega-r4-a11y-mejoras">
          Entrega <code>R4-a11y-mejoras</code>
        </Link>
      </h3>
      <p>Entrega la URL con la versión de la web accesible.</p>
      <h3>
        <Link to="/challenge4/especificaciones">
          Entrega <code>classroom</code>
        </Link>
      </h3>
      <p>
        En este proyecto sólo tienes que hacer una entrega, y en esta ocasión{" "}
        <strong>tienes que realizar la entrega al principio</strong>, no cuando
        hayas acabado el proyecto. Conforme vayas avanzando en el repo y en el
        tablero de Trello, se podrá ir viendo tu avance.
      </p>
      <p>Tienes que entregar dos URL:</p>
      <ul>
        <li>
          Tablero <strong>público</strong> de Trello.
        </li>
        <li>Repositorio del proyecto en tu GitHub.</li>
      </ul>
    </>
  );
};

export default Challenge4Deliveries;
