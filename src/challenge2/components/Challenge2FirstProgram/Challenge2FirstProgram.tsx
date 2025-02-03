import { Link } from "react-router";

const Challenge2FirstProgram: React.FC = () => {
  return (
    <>
      <h2>Tu primer programa en TypeScript</h2>
      <p>
        Es el momento de que empieces a picar código en TypeScript, pero no sin
        antes pararte a revisar algunos conceptos importantes:
      </p>
      <ul>
        <li>
          El código escrito en TypeScript <strong>no se puede ejecutar</strong>.
        </li>
        <li>Los entornos de ejecución quieren que les des JavaScript.</li>
        <li>
          Escribirás tu <strong>código fuente</strong> en TypeScript, y luego lo{" "}
          <strong>compilarás</strong> a JavaScript.
        </li>
        <li>
          Al entorno de ejecución le tendrás que dar el{" "}
          <strong>código compilado</strong> en JavaScript, puesto que el código
          fuente ni lo entiende ni le interesa.
        </li>
      </ul>
      <h3>El starter para TypeScript</h3>
      <p>
        En el reto anterior aprendiste que un programa no consta sólo de
        archivos JavaScript, va acompañado de una serie de archivos de
        configuración y herramientas. Aún no tendrás ni idea de lo que hacen,
        pero ya has programado con todo ello alrededor.
      </p>
      <p>
        Ahora ampliamos un poco las herramientas, puesto que necesitamos un{" "}
        <strong>compilador de TypeScript</strong>, es decir, un programa que
        compile tu código fuente de TS a JS.
      </p>
      <p>
        Aquí tienes el starter para TypeScript, puedes usarlo para tus primeros
        ejercicios. Lee atentamente las instrucciones que vienen en el{" "}
        <code>README.md</code>:{" "}
        <Link
          to="https://github.com/refactor-project-crafting/launch-starter-ts"
          target="_blank"
        >
          https://github.com/refactor-project-crafting/launch-starter-ts
        </Link>
      </p>
      <h3>A picar</h3>
      <p>
        Una vez que hayas leído las instrucciones del <code>README.md</code> del
        starter, y hayas seguido los pasos para instalarlo y ejecutarlo, escribe
        un programa que haga lo siguiente:
      </p>
      <ol>
        <li>
          Declara una variable <code>songTitle</code> y asígnale el título de
          una canción.
        </li>
        <li>
          Como developer de TypeScript que vas a ser, es muy importante que cada
          vez que escribas una variable te detengas un momento a{" "}
          <strong>pensar en el tipo de valor que va a almacenar</strong>.
        </li>
        <li>
          Declara una variable <code>songDuration</code> y asígnale la duración
          de la canción en segundos.
        </li>
        <li>
          Declara una variable <code>isSongPlaying</code> y asígnale un valor
          booleano que indique si la canción está sonando o no.
        </li>
        <li>
          Ahora compila tu código. Debería aparecerte un archivo{" "}
          <code>.js</code> en la carpeta <code>dist</code> que se ha creado al
          compilar tu código (también tendrás otro archivo <code>.js.map</code>,
          no le hagas caso por ahora). Abre ese archivo <code>.js</code> y
          fíjate en el código que ha generado TypeScript.
        </li>
        <li>
          Ejecuta tu aplicación (no deberías ver nada por consola, porque sólo
          declara variables).
        </li>
        <li>
          Para comprobar cómo funciona TypeScript, intenta reasignarle a{" "}
          <code>songDuration</code> un valor de tipo string, y a{" "}
          <code>isSongPlaying</code> un valor de tipo number (recuerda que para
          poder reasignar un valor a una variable no puede estar declarada con{" "}
          <code>const</code>). ¿Qué ocurre?
        </li>
        <li>
          Intenta compilar tu código con esas reasignaciones del punto anterior,
          y fíjate en la salida de la consola.
        </li>
        <li>
          Por último, abre el archivo <code>.js</code> del código compilado.
          ¿Ves las reasignaciones? No, porque TypeScript no ha compilado nuevo
          código, ya que había errores.
        </li>
        <li>
          Corrige los errores reasignándoles valores de tipos que sí sean
          compatibles con los tipos de las variables, y vuelve a compilar.
        </li>
        <li>Comprueba el JS resultante.</li>
        <li>Consolea los tres valores, compila y ejecuta tu programa.</li>
      </ol>
      <div className="featured">
        <h3>Buildtime vs Runtime</h3>

        <p>
          A la fase que ocurre <strong>mientras se ejecuta el programa</strong>{" "}
          la llamamos{" "}
          <strong>
            <em>runtime</em>
          </strong>{" "}
          o <strong>tiempo de ejecución</strong>.
        </p>

        <p>
          A la fase que ocurre <strong>mientras se compila el código</strong> la
          llamamos{" "}
          <strong>
            <em>buildtime</em>
          </strong>{" "}
          o <strong>tiempo de compilación</strong>.
        </p>

        <p>
          Es importante que recuerdes esto:{" "}
          <strong>
            TypeScript sólo existe y funciona en tiempo de compilación
          </strong>
          . Cuando se ejecuta tu programa en Node.js o en el browser, lo que se
          ejecuta es el JavaScript compilado.
        </p>
      </div>
      <p>
        Ahora que has programado por primera vez en TypeScript, vamos a estudiar
        un poco mejor cómo funciona una de las características más importantes
        de TS:{" "}
        <Link to="/challenge2/typescript/type-checking">el type-checking</Link>
      </p>
    </>
  );
};

export default Challenge2FirstProgram;
