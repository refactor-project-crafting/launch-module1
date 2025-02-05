import { Link } from "react-router";

const Challenge2MusicPlayer: React.FC = () => {
  return (
    <>
      <h1>Reto 2-fase 5: El reproductor de música</h1>
      <img src="/images/nota-musical.png" alt="Una nota musical" />
      <p>
        Con lo que has demostrado en el programa de la playlist, ya podemos
        contar contigo para que contribuyas al reproductor de música que estamos
        desarrollando. Hemos integrado tu playlist en el reproductor con algunos
        cambios.
      </p>
      <p>
        Para esta primera versión MVP (¿sabes lo que es un{" "}
        <a
          href="https://assets-global.website-files.com/6349395c9738c5d053d3ceba/647f035b249ab125b62aceef_What%20Is%20an%20MVP%20definition.png"
          target="_blank"
        >
          MVP
        </a>
        ?) vamos a empezar con una lista de siete canciones libres de derechos
        de autor. La playlist no podrá tener más de cuatro canciones.
      </p>
      <p>
        Te compartimos el repo de lo que ya está desarrollado. Ponlo a funcionar
        en tu máquina antes de continuar con el ejercicio:{" "}
        <Link
          to="https://github.com/refactor-project-crafting/launch-music-player"
          target="_blank"
        >
          https://github.com/refactor-project-crafting/launch-music-player
        </Link>
      </p>
      <p>Aquí tienes las User Stories:</p>
      <h3>User Stories</h3>
      <p>Como usuario,</p>
      <ol>
        <li>
          Quiero poder ver un desplegable con una lista de canciones, para poder
          ver qué canciones hay y elegir una.
        </li>
        <li>
          Quiero poder añadir una canción del desplegable a la playlist, para
          poder reproducirla después.
        </li>
        <li>
          Quiero poder ver cuántas canciones hay en la playlist, para saber
          cuántas puedo añadir.
        </li>
        <li>
          Quiero poder eliminar una canción de la playlist, para que ya no forme
          parte de la lista.
        </li>
        <li>
          Quiero poder reproducir una canción de la playlist, para poder
          escuchar mis canciones.
        </li>
        <li>
          Quiero que al finalizar una canción se reproduzca la siguiente, para
          no tener que ir reproduciendo cada una.
        </li>
        <li>
          Quiero que al finalizar la última canción se reproduzca la primera,
          para que siempre suene música.
        </li>
        <li>
          Quiero que al quitar una canción de la playlist mientras se está
          reproduciendo, se pare la reproducción, para que no suene la canción
          que he eliminado.
        </li>
        <li>
          Quiero poder ver el título de la canción que se está reproduciendo,
          para poder identificar qué suena.
        </li>
        <li>
          Quiero que al intentar añadir una canción que ya está en la playlist,
          me muestre un mensaje de error, para no duplicar canciones.
        </li>
        <li>
          Quiero que al intentar añadir una canción cuando la playlist esté
          completa, me muestre un mensaje de error, para no tener más canciones
          de las que caben.
        </li>
      </ol>
      <h3>Commits</h3>
      <p>
        Intenta hacer un commit por cada tarea del backlog que completes. Por
        ahora vamos a poner estas reglas para los comentarios de los commits:
      </p>
      <ul>
        <li>Deben estar escritos en inglés</li>
        <li>Deben empezar por mayúscula</li>
        <li>Deben empezar por un verbo en imperativo</li>
      </ul>
      <h3>Backlog</h3>
      <p>
        El{" "}
        <strong>
          <em>backlog</em>
        </strong>{" "}
        es la lista de tareas que se han planificado para este{" "}
        <strong>
          <em>sprint</em>
        </strong>{" "}
        (un sprint es un periodo de tiempo en el que se desarrolla una parte del
        proyecto). Aquí tienes las tareas del backlog:
      </p>
      <h4>Task 1. El tipado de la canción.</h4>
      <p>
        Abre el archivo <code>songsData.ts</code>, verás que hay un tipo creado
        para una canción, pero está vacío. Créalo teniendo en cuenta qué forma
        tiene una canción. Hasta que no lo hagas no te compilará el código
        actual.
      </p>
      <p>
        Importante: no borres el <code>export</code>.
      </p>
      <h4>
        Task 2. La función <code>areSameSong</code>
      </h4>
      <p>
        En el archivo <code>songs.ts</code> tienes varias funciones creadas que
        tendrás que completar.
      </p>
      <p>
        La función <code>areSameSong</code> se utiliza varias veces en el
        código, para identificar una canción por su título. Recibe en la
        variable <code>song</code> una canción y en la variable{" "}
        <code>songTitle</code> un título de canción. Debe devolver{" "}
        <code>true</code> si el título de la canción recibida coincide con el
        título recibido, y <code>false</code> en caso contrario.
      </p>
      <h4>
        Task 3. La función <code>addSong</code>
      </h4>
      <p>
        La función <code>addSong</code> se disparará cuando el usuario elija una
        canción del desplegable y le dé al boton &quot;Añadir&quot;. Esta
        función recibe en la variable <code>song</code> una canción (el objeto
        completo), y en la variable <code>songs</code> un array de canciones que
        componen la playlist.
      </p>
      <p>
        Haz que se añada la canción recibida al array, y comprueba que funciona
        (seleccionando una canción del desplegable, se añade a la playlist).
      </p>
      <h4>
        Task 4. La función <code>getErrorMessage</code>
      </h4>
      <p>
        Esta función recibe un código de error. Haz que devuelva un mensaje de
        error dependiendo del código recibido (tienes las equivalencias en los
        comentarios de la función).
      </p>
      <p>
        Para comprobarla, intenta añadir una canción que ya esté en la playlist.
        Debería aparecer un mensaje de error.
      </p>
      <h4>
        Task 5. La función <code>getSongsCount</code>
      </h4>
      <p>
        Esta función recibe un array de canciones y debe devolver cuántas
        canciones hay en el array.
      </p>
      <p>
        Para comprobarla, añade varias canciones a la playlist y comprueba que
        el número que aparece en el contador es correcto.
      </p>
      <h4>
        Task 6. La función <code>removeSongByPosition</code>
      </h4>
      <p>
        Esta función recibe un array de canciones y una posición. Debe eliminar
        del array la canción que esté en esa posición del array.
      </p>
      <p>
        Para comprobarla, añade varias canciones a la playlist y elimina alguna
        de ellas. Comprueba que se eliminan correctamente.
      </p>
      <h4>
        Task 7. La función <code>setCurrentSong</code>
      </h4>
      <p>
        Esta función recibe una canción. Debes modificarla para que se convierta
        en la canción actual.
      </p>
      <p>La siguiente función necesita de ésta para funcionar correctamente.</p>
      <h4>
        Task 8. La función <code>getNextSongPosition</code>
      </h4>
      <p>
        Esta función recibe un array de canciones y la posición de la canción
        actual que se está reproduciendo. Debe devolver la posición de la
        siguiente canción que se va a reproducir, pero teniendo en cuenta que si
        la canción actual es la última, la siguiente será la primera.
      </p>
      <p>
        Para comprobarla, reproduce varias canciones y fíjate si al finalizar la
        canción el reproductor pasa a la siguiente, y en caso de ser la última,
        pasa a la primera.
      </p>
      <h4>
        Task 9. La función <code>isCurrentSong</code>
      </h4>
      <p>
        Esta función recibe una canción. Debe devolver <code>true</code> si la
        canción recibida es la que está actualmente en reproducción, y{" "}
        <code>false</code> en caso contrario.
      </p>
      <p>
        Para comprobarla, reproduce una canción y quítala de la playlist
        mientras está sonando. Debería parar la reproducción y vaciarse el
        reproductor.
      </p>
      <h3 id="entrega-r2-reproductor-musica">
        Entrega <code>R2-reproductor-musica</code>
      </h3>
      <p>
        Sube el proyecto a un repositorio en tu cuenta de GitHub y entrega la
        URL.
      </p>
    </>
  );
};

export default Challenge2MusicPlayer;
