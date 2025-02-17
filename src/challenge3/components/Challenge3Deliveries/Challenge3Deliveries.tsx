import { Link } from "react-router";

const Challenge3Deliveries: React.FC = () => {
  return (
    <>
      <h2>Entregas del reto 3</h2>
      <p>
        Aquí tienes el resumen de todas las entregas que te pedimos en el reto
        3.
      </p>
      <h3>
        <Link to="/challenge3/git/jugando-con-git/#entrega-r3-git">
          Entrega <code>R3-git</code>
        </Link>
      </h3>
      <p>
        Entrega un zip con las capturas de pantalla y la URL del repositorio
        remoto.
      </p>
      <h3>
        <Link to="/challenge3/funciones/caja-negra/#entrega-r3-firmas">
          Entrega <code>R3-firmas</code>
        </Link>
      </h3>
      <p>
        Entrega un zip con el archivo <code>.ts</code>.
      </p>
      <h3>
        <Link to="/challenge3/funciones/entrada-salida/#entrega-r3-funciones-io">
          Entrega <code>R3-funciones-io</code>
        </Link>
      </h3>
      <p>
        Entrega un zip con el archivo <code>.ts</code>.
      </p>
      <h3>
        <Link to="/challenge3/funciones/expresiones/#entrega-r3-expresiones-llamada">
          Entrega <code>R3-expresiones-llamada</code>
        </Link>
      </h3>
      <p>Escribe las 8 respuestas en el formulario.</p>
      <h3>
        <Link to="/challenge3/arrays-objetos/metodos-arrays/#entrega-r3-metodos-arrays">
          Entrega <code>R3-metodos-arrays</code>
        </Link>
      </h3>
      <p>
        Entrega un zip con el archivo <code>.ts</code>.
      </p>
      <h3>
        <Link to="/challenge3/arrays-objetos/mezclando-todo/#entrega-r3-arrays-objetos">
          Entrega <code>R3-arrays-objetos</code>
        </Link>
      </h3>
      <p>
        Entrega un zip con el archivo <code>.ts</code>.
      </p>
      <h3>
        <Link to="/challenge3/app-sorteos/#entrega-r3-sorteos">
          Entrega <code>R3-sorteos</code>
        </Link>
      </h3>
      <p>
        Entrega la URL del repositorio de GitHub que contiene el código de este
        ejercicio.
      </p>
    </>
  );
};

export default Challenge3Deliveries;
