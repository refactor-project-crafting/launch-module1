import { Link } from "react-router";

const Challenge2Deliveries: React.FC = () => {
  return (
    <>
      <h2>Entregas del reto 2</h2>
      <p>
        Aquí tienes el resumen de todas las entregas que te pedimos en el reto
        2. Cada vez que quieras hacer una entrega, ve al formulario que has
        recibido y entrega el ejercicio que desees.
      </p>
      <p>
        Puedes rellenar el formulario tantas veces como quieras. Puedes
        rellenarlo una vez por cada ejercicio que quieras entregar, puedes
        rellenarlo para entregar dos o tres a la vez, y puedes rellenarlo para
        entregar el mismo ejercicio más de una vez por si quieres corregirlo.
      </p>

      <h3>
        <Link to="/challenge2/estructuras-de-control/condicionales/#prueba">
          Entrega <code>R2-switch</code>
        </Link>
      </h3>
      <p>Escribe la respuesta a las preguntas en el formulario.</p>

      <h3>
        <Link to="/challenge2/estructuras-de-control/bucles/#entrega-r2-bucles">
          Entrega <code>R2-bucles</code>
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL del playground de TypeScript con el código.
      </p>

      <h3>
        <Link to="/challenge2/arrays/#entrega-r2-arrays-crea-una-lista-de-canciones">
          Entrega <code>R2-arrays</code>
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL de tu repositorio de GitHub con el programa.
      </p>

      <h3>
        <Link to="/challenge2/arrays/recorrer-un-array/#entrega-r2-recorrer-array">
          Entrega <code>R2-recorrer-array</code>
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL del playground de TypeScript con el código.
      </p>

      <h3>
        <Link to="/challenge2/arrays/metodos-de-arrays/#entrega-r2-metodos-arrays">
          Entrega: <code>R2-metodos-arrays</code>
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL de tu repositorio de GitHub con el programa.
      </p>

      <h3>
        <Link to="/challenge2/arrays/mejorando-la-lista-de-canciones/#entrega-r2-playlist">
          Entrega <code>R2-playlist</code>
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL de tu repositorio de GitHub con el programa.
      </p>

      <h3>
        <Link to="/challenge2/objetos/acceder-propiedades-objeto/#r2-syntax-highlighting">
          Entrega <code>R2-syntax-highlighting</code>
        </Link>
      </h3>
      <p>
        Tienes que escribir el código solicitado con syntax highlighting en el
        canal de Discord.
      </p>

      <h3>
        <Link to="/challenge2/reproductor-de-musica/#entrega-r2-reproductor-musica">
          Entrega <code>R2-reproductor-musica</code>
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL de tu repositorio de GitHub con el programa.
      </p>
    </>
  );
};

export default Challenge2Deliveries;
