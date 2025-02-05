import { Link } from "react-router";

const Challenge2SongsList: React.FC = () => {
  return (
    <>
      <h2>Mejorando la lista de canciones</h2>
      <p>
        Estamos creando un programa que permite al usuario gestionar una
        playlist, y necesitamos que termines sus funcionalidades.
      </p>
      <h3>User stories</h3>
      <p>Como usuario,</p>
      <ul>
        <li>
          Quiero poder ver todas las canciones de la playlist, ordenadas
          alfabéticamente por título, para gestionar mis canciones favoritas.
        </li>
        <li>
          Quiero poder agregar una canción a la playlist, para que se incluya en
          mis canciones favoritas.
        </li>
        <li>
          Quiero poder eliminar una canción de la playlist, para que ya no
          aparezca en mis canciones favoritas.
        </li>
        <li>
          Quiero ver en todo momento el número de canciones que hay en la
          playlist, para comprobar cuántas canciones tengo en la lista.
        </li>
        <li>
          Quiero que si intento introducir una canción que ya existe, no se
          añada a la playlist, para evitar duplicados en la lista.
        </li>
        <li>
          Quiero que me impida introducir una canción de menos de tres
          caracteres, para evitar errores en los títulos.
        </li>
        <li>
          Quiero que no me permita introducir más de 5 canciones, para limitar
          la longitud de la lista.
        </li>
      </ul>
      <h3>Pasos</h3>
      <ol>
        <li>
          Clónate el repositorio de GitHub que contiene el código inicial:{" "}
          <Link
            to="https://github.com/refactor-project-crafting/launch-playlist"
            target="_blank"
          >
            launch-playlist
          </Link>
        </li>
        <li>
          Instala las dependencias con <code>npm install</code>.
        </li>
        <li>
          Para poder ver la aplicación, debes ejecutar el comando{" "}
          <code>npm start</code> y abrir tu navegador en la dirección{" "}
          <code>http://localhost:3000</code>.
        </li>
        <li>
          Cada vez que quieras compilar de tu código fuente TS a código JS,
          ejecuta el comando <code>npm run build</code>.
        </li>
        <li>
          En el archivo <code>songTitles.ts</code> encontrarás un array vacío
          para los títulos de las canciones. Añade la anotación de tipo
          correspondiente.
        </li>
      </ol>
      <h3 id="entrega-r2-playlist">
        Entrega <code>R2-playlist</code>
      </h3>
      <p>
        Sube el proyecto a un repositorio en tu GitHub y entrega la URL del
        repositorio.
      </p>
    </>
  );
};

export default Challenge2SongsList;
