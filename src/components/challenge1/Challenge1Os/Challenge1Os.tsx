import { Link } from "react-router";

const Challenge1Os: React.FC = () => {
  return (
    <>
      <h1>Reto 1-fase 1: Tu Sistema Operativo y su terminal</h1>
      <img
        src="/images/os-logos.svg"
        alt="Logotipos de Windows, Linux y macOS"
      />
      <p>
        Si estás haciendo esta prueba es que ya tienes un ordenador con uno de
        los tres principales sistemas operativos: <strong>Windows</strong>,{" "}
        <strong>Linux</strong> o <strong>macOS</strong>.
      </p>
      <p>¿Y qué es un Sistema Operativo? Te lo contamos en este vídeo:</p>
      <div className="picture">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vQd7NalY66s?si=8ofufqlFOjNWCjWY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Entendiendo tu disco duro</h2>
      <p>
        Los datos que utiliza tu ordenador para funcionar se almacenan en dos
        sitios: en la <strong>memoria RAM</strong> y en el{" "}
        <strong>disco duro</strong>. Los datos están guardados en el disco duro
        incluso cuando el ordenador está apagado, y cada vez que el Sistema
        Operativo necesita acceder a ellos, los carga en la memoria RAM y los
        utiliza desde ahí.
      </p>
      <p>
        Es decir, cuando un programa está funcionando, previamente ha tenido que
        cargarse en la memoria RAM.
      </p>
      <p>
        Tu disco duro está lleno de <strong>archivos</strong> (también llamados{" "}
        <strong>ficheros</strong>). Cada uno de ellos tiene un{" "}
        <strong>nombre</strong> y una <strong>extensión</strong> que indica el{" "}
        <strong>tipo de archivo</strong>. Por ejemplo, un archivo de texto puede
        tener la extensión <strong>.txt</strong>, un archivo de imagen{" "}
        <strong>.jpg</strong> o <strong>.webp</strong>, un archivo de audio{" "}
        <strong>.mp3</strong> o <strong>.wav</strong>, y un archivo de vídeo{" "}
        <strong>.mp4</strong> o <strong>.avi</strong>.
      </p>
      <p>
        Los archivos no están todos sueltos en el disco duro, sino que están
        organizados en <strong>carpetas</strong> (también llamadas{" "}
        <strong>directorios</strong>). Las carpetas pueden contener archivos y
        otras carpetas. A las carpetas que están dentro de otras se les llama{" "}
        <strong>subcarpetas</strong> (o <strong>subdirectorios</strong>).
      </p>
      <div className="featured">
        <h3 className="stop">STOP</h3>
        <p>
          Tu ordenador tiene que ser un ordenador <strong>de developer</strong>.
          El Sistema Operativo suele ocultar las extensiones de archivos para
          que el usuario medio no se confunda, pero tú tienes que poder ver las
          extensiones. Configura tu Sistema Operativo para que haga estas dos
          cosas:
        </p>
        <ol>
          <li>Mostrar siempre las extensiones de archivos.</li>
          <li>Mostrar siempre los archivos ocultos.</li>
        </ol>
        <p>
          ¡No continúes hasta no haberte asegurado de que has hecho los dos
          puntos!
        </p>
      </div>
      <p>Para ver tus archivos y carpetas, el Sistema Operativo te ofrece:</p>
      <ul>
        <li>
          Si estás en <strong>Windows</strong>, el{" "}
          <strong>Explorador de archivos</strong>.
        </li>
        <li>
          Si estás en <strong>macOS</strong>, el <strong>Finder</strong>.
        </li>
        <li>
          Si estás en <strong>Linux</strong>, se llamará de diferente forma
          según la distribución que estés utilizando. Por ejemplo, en{" "}
          <strong>Ubuntu</strong> se llama <strong>Nautilus</strong>.
        </li>
      </ul>
      <figure className="picture">
        <img
          src="/images/explorador.webp"
          alt="Explorador de archivos de Windows"
          width="700"
        />
        <figcaption>Explorador de archivos en Windows</figcaption>
      </figure>
      <p>
        ¿Y cómo se organizan los archivos y carpetas en tu disco duro? Cuando
        entras en tu Sistema Operativo lo haces desde una{" "}
        <strong>cuenta de usuario</strong>. Cada usuario tiene su propio{" "}
        <strong>directorio personal</strong>. Dentro de ese directorio personal,
        cada usuario puede crear sus propias carpetas y archivos.
      </p>
      <p>
        Por ejemplo, si tu nombre de usuario para acceder es <em>refactor</em>,
        tu directorio personal se llamará <code>/home/refactor</code> en Linux,
        <code>/Users/refactor</code> en macOS, y <code>C:\Users\refactor</code>{" "}
        en Windows. Dentro de tu directorio personal suelen encontrarse carpetas
        como <strong>Desktop</strong>, <strong>Documentos</strong>,{" "}
        <strong>Descargas</strong>, <strong>Música</strong>,{" "}
        <strong>Imágenes</strong>, <strong>Vídeos</strong>, etc.
      </p>
      <p>
        Imagina que tienes un archivo llamado <code>game.js</code> en tu
        escritorio. Si estás en Windows, el archivo se llamará{" "}
        <code>game.js</code> y estará en <code>C:\Users\refactor\Desktop</code>.
        Si estás en macOS, el archivo se llamará <code>game.js</code> y estará
        en <code>/Users/refactor/Desktop</code>. Si estás en Linux, el archivo
        se llamará <code>game.js</code> y estará en{" "}
        <code>/home/refactor/Desktop</code>.
      </p>
      <div className="featured">
        <h3>Importante</h3>
        <p>
          En los sistemas <strong>Unix</strong> (como Linux y macOS), un archivo{" "}
          <code>game.js</code> y un archivo <code>Game.js</code> son dos
          archivos diferentes. En Windows, en cambio, serían el mismo archivo.
          Es importante que tengas esto en cuenta porque nos va a dar problemas
          en el futuro.
        </p>
      </div>
      <p>
        Para localizar un archivo o una carpeta utilizamos una{" "}
        <strong>ruta</strong> (o{" "}
        <strong>
          <em>path</em>
        </strong>
        ). La ruta es como una dirección que le indica al Sistema Operativo
        dónde está el archivo o la carpeta.
      </p>
      <p>
        Fíjate en esta ruta: <code>/Users/luis/Desktop/game.js</code>. Esta ruta
        indica que el archivo <code>game.js</code> está en la carpeta{" "}
        <code>Desktop</code>, que está dentro de la carpeta <code>luis</code>,
        que está dentro de la carpeta <code>Users</code>, que cuelga
        directamente de la <code>raíz</code> (llamamos <strong>raíz</strong> o{" "}
        <strong>
          <em>root</em>
        </strong>{" "}
        a la carpeta madre de todas las demás). Luis ve su archivo `game.js` en
        su escritorio, pero realmente está guardado en esa ruta.
      </p>
      <h2>La terminal</h2>
      <p>
        Seguramente estés acostumbrado a comunicarte con tu sistema operativo a
        través de una <strong>interfaz gráfica</strong>, compuesta de ventanas,
        botones, iconos, links, y el puntero de tu ratón. Pero ésa no es la
        única forma.
      </p>
      <p>
        Hay otra interfaz (<em>interfaz</em> significa{" "}
        <em>punto de contacto</em>) que no es gráfica que es la{" "}
        <strong>línea de comandos</strong> (también conocida como{" "}
        <strong>CLI</strong>, <em>Command Line Interface</em>). Para
        encontrarla, en Windows se llama <strong>Símbolo del sistema</strong> o{" "}
        <strong>PowerShell</strong>, en macOS se llama <strong>Terminal</strong>
        , y en Linux se llama <strong>Terminal</strong> o{" "}
        <strong>Consola</strong>.
      </p>
      <p>
        La línea de comandos es una forma de comunicarte con tu Sistema
        Operativo escribiendo <strong>comandos</strong> (órdenes) en lugar de
        hacer clic en botones. Al principio te parecerá más complicado, pero a
        medida que vayas aprendiendo a utilizarla te darás cuenta de todo lo que
        te ofrece.
      </p>
      <p>
        Cuando abras una terminal o consola, verás una{" "}
        <strong>línea de comandos</strong> esperando a que escribas algo. Esa
        línea de comandos se llama <strong>prompt</strong>. El prompt te indica
        que el Sistema Operativo está esperando a que le des una orden. En el
        prompt te aparecerá en qué ruta o carpeta del disco duro estás
        trabajando en ese momento.{" "}
        <strong>Todas las órdenes que des se ejecutarán en esa carpeta.</strong>
      </p>
      <p>
        Por ejemplo, si estás en Windows y ves{" "}
        <code>C:\Users\refactor{">"}</code>, significa que estás en la carpeta
        <code>C:\Users\refactor</code>. Si estás en macOS y ves
        <code>luis@MacBook-Pro-de-Luis ~ %</code>, significa que estás en la
        carpeta <code>/Users/luis</code> (ese símbolo <code>~</code> es una
        abreviatura de tu directorio personal).
      </p>
      <figure style={{ textAlign: "center" }}>
        <img
          src="/images/omelette.png"
          alt="La terminal con una ruta"
          width="500"
        />
        <figcaption>
          Estamos en la carpeta <i>omelette</i>
        </figcaption>
      </figure>
      <p>
        En la captura anterior puedes ver que estamos en una carpeta{" "}
        <code>omelette</code>, que es una subcarpeta de <code>recipes</code>. La
        carpeta <code>recipes</code> es una subcarpeta de la carpeta{" "}
        <code>marius</code>. Y así hasta llegar a la carpeta raíz o{" "}
        <em>root</em> (<code>\</code>).
      </p>
      <h2 id="entrega-r1-cli">
        Entrega <code>R1-CLI</code>
      </h2>
      <p>
        Necesitamos que ejecutes todas estas acciones con la terminal o consola
        de tu Sistema Operativo. No uses la interfaz gráfica. Léete primero el
        apartado{" "}
        <Link to="/challenge1/os/moviendote-por-tu-disco-duro">
          Moviéndote por tu disco duro
        </Link>{" "}
        y tenlo de referencia para que puedas ir consultándolo si lo necesitas.
        También puedes buscar recursos por internet.
      </p>
      <p>
        De cara a la entrega, <strong>haz una captura de pantalla</strong> de
        cada uno de los pasos que te pedimos. Pásate por el{" "}
        <Link to="/challenge1/entregas">resumen de entregas</Link> para ver cómo
        tienes que hacer esta entrega.
      </p>
      <ol>
        <li>Abre la terminal o consola de tu Sistema Operativo.</li>
        <li>Desde la carpeta de tu usuario, crea una carpeta llamada `web`.</li>
        <li>Entra en la carpeta `web`.</li>
        <li>Crea tres archivos: `index.html`, `styles.css` y `app.js`.</li>
        <li>
          Comprueba mediante un comando que los archivos se han creado. 6. Borra
          el archivo `styles.css`.
        </li>
        <li>Crea una carpeta llamada `css`.</li>
        <li>
          Entra en la carpeta `css` y crea un archivo llamado `styles.css`.
        </li>
        <li>
          Comprueba mediante un comando que el archivo `styles.css` se ha
          creado.
        </li>
        <li>Sal de la carpeta `css` y crea una carpeta llamada `js`.</li>
        <li>Mueve el archivo `app.js` a la carpeta `js`.</li>
        <li>
          Comprueba mediante un comando que el archivo `app.js` se ha movido.
        </li>
        <li>Sal de la carpeta `web`.</li>
        <li>Renombra la carpeta `web` a `portfolio`.</li>
        <li>
          Comprueba mediante un comando que la carpeta `web` se ha renombrado.
        </li>
        <li>
          Ahora realiza las siguientes acciones encadenando varios comandos{" "}
          <strong>en una sola línea</strong>:
          <ul>
            <li>
              Entra en la carpeta <code>portfolio</code>.
            </li>
            <li>
              Crea una carpeta llamada <code>images</code>.
            </li>
            <li>
              Entra en la carpeta <code>images</code>.
            </li>
            <li>
              Crea un archivo llamado <code>logo.png</code>.
            </li>
            <li>
              Comprueba mediante un comando que el archivo <code>logo.png</code>{" "}
              se ha creado.
            </li>
            <li>
              Sal de la carpeta <code>images</code>.
            </li>
            <li>
              Borra las carpetas <code>css</code> y <code>js</code> y el archivo{" "}
              <code>index.html</code>.
            </li>
            <li>
              Comprueba mediante un comando que las carpetas y el archivo se han
              borrado.
            </li>
          </ul>
        </li>
        <li>
          Por último, ve desde donde estás a la raíz del disco duro en un solo
          comando.
        </li>
      </ol>
      <p>
        Entrega un archivo comprimido en zip con todas las capturas de pantalla.
      </p>
      <p>
        Cuando hayas terminado, puedes continuar con la{" "}
        <Link to="/challenge1/herramientas">fase 2</Link>.
      </p>
    </>
  );
};

export default Challenge1Os;
