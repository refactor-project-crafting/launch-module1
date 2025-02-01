import CodeBash from "../../CodeBash/CodeBash";

const Challenge1Hd: React.FC = () => {
  return (
    <>
      <h2>Moviéndote por tu disco duro</h2>
      <p>
        Para moverte por tu disco duro desde la línea de comandos, necesitas
        saber algunos comandos básicos. Muchos son diferentes dependiendo del
        Sistema Operativo que estés utilizando. Presta atención a las barras que
        separan las carpetas: en Windows se utilizan barras invertidas (
        <code>\</code>), y en Unix (Linux y macOS) se utilizan barras normales (
        <code>/</code>).
      </p>
      <p>Aquí tienes una lista de los comandos más importantes:</p>
      <h3>Cambiar de directorio o carpeta:</h3>
      <div className="so">
        <code>cd</code>
        <h4 className="so__title">
          Unix y Windows
          <img src="/images/logo-tux.svg" width="40" alt="Logotipo de Linux" />
          <img
            src="/images/logo-mac-os.svg"
            width="40"
            alt="Logotipo de macOS"
          />
          <img
            src="/images/logo-windows.svg"
            width="40"
            alt="Logotipo de Windows"
          />
        </h4>
      </div>
      <p>
        <em>change directory</em>, cambia de carpeta. Después del comando
        tendrás que darle una ruta, que puede ser <strong>absoluta</strong>{" "}
        (desde el directorio
        <em>root</em> o raíz) o <strong>relativa</strong> (desde la carpeta en
        la que estás).
      </p>
      <p>
        Aquí tienes un ejemplo de ruta absoluta. No importa en qué carpeta
        estés, siempre te llevará a la misma carpeta:
      </p>
      <CodeBash>cd /Users/luis/Desktop</CodeBash>
      <p>
        Y aquí tienes un ejemplo de ruta relativa. Si estás en la carpeta
        <code>/Users/luis</code>, te llevará a la carpeta
        <code>/Users/luis/projects</code>. Si estás en la carpeta
        <code>C:\Users\refactor\Desktop</code>, te llevará a la carpeta
        <code>C:\Users\refactor\Desktop\projects</code>:
      </p>
      <CodeBash>cd projects</CodeBash>
      <p>
        Si quieres volver a la carpeta anterior en la ruta en la que estás,
        puedes utilizar <code>..</code>:
      </p>
      <CodeBash>cd ..</CodeBash>
      <p>
        En este caso, si por ejemplo estuvieras en{" "}
        <code>/Users/luis/projects</code>, el comando <code>cd ..</code> te
        llevaría a <code>/Users/luis</code>.
      </p>
      <h3>Listar archivos y directorios:</h3>
      <p>
        Lista los archivos y carpetas que hay en la carpeta en la que estás.
      </p>
      <div className="comparison__double">
        <div className="so">
          <code>ls</code>
          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>
        <div className="so">
          <code>dir</code>
          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <p>
        Si lanzas este comando, verás una lista de archivos y carpetas. Si
        quieres ver más detalles, puedes añadirle un <strong>parámetro</strong>:
      </p>
      <div className="comparison__double">
        <div className="so">
          <code>ls -l</code>

          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>dir /w /</code>

          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <p>Y si quieres listar los archivos y carpetas ocultos:</p>
      <div className="comparison__double">
        <div className="so">
          <code>ls -a</code>

          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>dir /a</code>

          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <h3>Crear directorios:</h3>
      <div className="so">
        <code>mkdir</code>
        <h4 className="so__title">
          Unix y Windows
          <img src="/images/logo-tux.svg" width="40" alt="Logotipo de Linux" />
          <img
            src="/images/logo-mac-os.svg"
            width="40"
            alt="Logotipo de macOS"
          />
          <img
            src="/images/logo-windows.svg"
            width="40"
            alt="Logotipo de Windows"
          />
        </h4>
      </div>
      <p>
        <em>make directory</em>, crea una carpeta dentro de la carpeta en la que
        estás (a no ser que le pases una ruta).
      </p>
      <CodeBash>mkdir projects</CodeBash>
      <p>
        Puedes comprobar con <code>ls</code> o <code>dir</code> que la carpeta
        <code>projects</code> se ha creado.
      </p>
      <h3>Crear archivos:</h3>
      <div className="comparison__double">
        <div className="so">
          <code>touch</code>
          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>type nul {">"}</code>
          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <p>Crea un archivo vacío.</p>
      <CodeBash>touch index.html</CodeBash>
      <CodeBash>type nul &gt; index.html</CodeBash>
      <p>
        Puedes comprobar con <code>ls</code> o <code>dir</code> que el archivo
        <code>index.html</code> se ha creado.
      </p>
      <h3>Borrar archivos:</h3>
      <div className="comparison__double">
        <div className="so">
          <code>rm</code>
          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>del</code>
          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <p>Borra un archivo.</p>
      <CodeBash>rm index.html</CodeBash>
      <CodeBash>del index.html</CodeBash>
      <h3>Borrar directorios:</h3>
      <div className="comparison__double">
        <div className="so">
          <code>rmdir</code> o <code>rm -r</code>
          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>rd</code>
          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <p>
        <em>remove directory</em>, borra una carpeta.
      </p>
      <CodeBash>rmdir projects</CodeBash>
      <CodeBash>rd projects</CodeBash>
      <h3>Mover archivos:</h3>
      <div className="comparison__double">
        <div className="so">
          <code>mv</code>
          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>move</code>
          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <p>Mueve un archivo o carpeta a otra ubicación.</p>
      <CodeBash>mv index.html /Users/luis/Desktop</CodeBash>
      <CodeBash>move index.html C:\Users\refactor\Desktop</CodeBash>
      <h3>Renombrar archivos o carpetas:</h3>
      <p>
        Puedes utilizar el comando anterior para renombrar un archivo o carpeta.
      </p>
      <CodeBash>mv index.html home.html</CodeBash>
      <h3>Copiar archivos:</h3>
      <div className="comparison__double">
        <div className="so">
          <code>cp</code>
          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>copy</code>
          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <p>Copia un archivo o carpeta a otra ubicación.</p>
      <CodeBash>cp index.html /Users/luis/Desktop</CodeBash>
      <CodeBash>copy index.html C:\Users\refactor\Desktop</CodeBash>
      <h3>Borrar la terminal:</h3>
      <div className="comparison__double">
        <div className="so">
          <code>clear</code>
          <h4 className="so__title">
            Unix
            <img
              src="/images/logo-tux.svg"
              width="40"
              alt="Logotipo de Linux"
            />
            <img
              src="/images/logo-mac-os.svg"
              width="40"
              alt="Logotipo de macOS"
            />
          </h4>
        </div>

        <div className="so">
          <code>cls</code>
          <h4 className="so__title">
            Windows
            <img
              src="/images/logo-windows.svg"
              width="40"
              alt="Logotipo de Windows"
            />
          </h4>
        </div>
      </div>
      <h3>Lanzar varios comandos:</h3>
      <p>
        Puedes lanzar varios comandos seguidos separándolos con <code>&&</code>:
      </p>
      <CodeBash>mkdir projects && cd projects && touch index.html</CodeBash>
      <p>
        En este caso, se crearía la carpeta <code>projects</code>, se entraría
        en ella, y se crearía el archivo <code>index.html</code>.
      </p>
      <div className="featured">
        <h3>Buenas noticias</h3>
        <p>
          Si usas Windows te estarás preguntando por qué tus comandos son
          diferentes. Tenemos una buena noticia para ti: vas a poder utilizar
          los comandos de Unix en Windows. Paciencia 😉
        </p>
      </div>
    </>
  );
};

export default Challenge1Hd;
