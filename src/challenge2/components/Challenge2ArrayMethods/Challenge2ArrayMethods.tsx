import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge2ArrayMethods: React.FC = () => {
  return (
    <>
      <h2>Métodos de arrays</h2>
      <p>
        Los arrays tienen multitud de métodos que nos permiten hacer operaciones
        con ellos. Te dejamos aquí una lista de los más comunes, y recuerda
        tener abierta siempre la{" "}
        <Link
          to="https://developer.mozilla.org/en/docs/Web/JavaScript"
          target="_blank"
        >
          documentación de MDN
        </Link>{" "}
        para consultar cómo se usa cada uno de ellos.
      </p>
      <h3>
        <code>push()</code>
      </h3>
      <p>
        El método <code>push()</code> nos permite añadir elementos al final del
        array.
      </p>
      <CodeTs>{`const grades = [7, 8.5, 4, 6];

grades.push(9); // grades quedaría así: [7, 8.5, 4, 6, 9]

grades.push(5, 7); // grades quedaría así: [7, 8.5, 4, 6, 9, 5, 7]`}</CodeTs>
      <p>
        Haz la siguiente prueba en un starter de TS o en el playground de la web
        de TS: pásale al método <code>push</code> un valor que no sea de tipo
        number. Verás cómo TypeScript no lo permite, puesto que al declarar la
        variable <code>grades</code> y asignarle en la misma línea un array de
        números, TypeScript infiere que <code>grades</code> es un array de
        números, y no va a permitir que le añadamos elementos que no sean
        números.
      </p>
      <h3>
        <code>slice()</code>
      </h3>
      <p>
        El método <code>slice()</code> nos permite extraer una porción de un
        array y devolver un nuevo array con esos elementos. Le tenemos que pasar
        la posición inicial y la posición final de los elementos (la final no se
        incluye).
      </p>
      <p>
        <strong>Importante</strong>: este método crea{" "}
        <strong>un nuevo array</strong> y no modifica el original.
      </p>

      <CodeTs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

const firstTwoChildren = childrenNames.slice(0, 2); // firstTwoChildren quedaría así: ["Pablito", "Juanita"]`}</CodeTs>
      <h3>
        <code>splice()</code>
      </h3>
      <p>
        El método <code>splice()</code> nos permite añadir o quitar elementos de
        un array. Le tenemos que pasar la posición en la que queremos empezar a
        añadir o quitar elementos, y el número de elementos que queremos quitar.
        También podemos pasarle los elementos que queremos añadir.
      </p>
      <p>
        <strong>Importante</strong>: este método{" "}
        <strong>modifica el array original</strong>.
      </p>
      <CodeTs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

childrenNames.splice(1, 2); // childrenNames quedaría así: ["Pablito", "Pepita"]

childrenNames.splice(1, 0, "Martita", "Arturito"); // childrenNames quedaría así: ["Pablito", "Martita", "Arturito", "Pepita"]`}</CodeTs>
      <p>
        Si quieres hacer lo mismo pero sin modificar el array original, puedes
        usar el método <code>toSpliced()</code>.
      </p>
      <h3>
        <code>reverse()</code>
      </h3>
      <p>
        El método <code>reverse()</code> nos permite invertir el orden de los
        elementos de un array.
      </p>
      <p>
        <strong>Importante</strong>: este método{" "}
        <strong>modifica el array original</strong>.
      </p>
      <CodeTs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

childrenNames.reverse(); // childrenNames quedaría así: ["Pepita", "Antoñito", "Juanita", "Pablito"]`}</CodeTs>
      <p>
        Si quieres hacer lo mismo pero sin modificar el array original, puedes
        usar el método <code>toReversed()</code>.
      </p>
      <h3>
        <code>sort()</code>
      </h3>
      <p>
        El método <code>sort()</code> nos permite ordenar los elementos de un
        array.
      </p>
      <p>
        <strong>Importante</strong>: este método{" "}
        <strong>modifica el array original</strong>.
      </p>
      <CodeTs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

childrenNames.sort(); // childrenNames quedaría así: ["Antoñito", "Juanita", "Pablito", "Pepita"]`}</CodeTs>
      <p>
        Si quieres hacer lo mismo pero sin modificar el array original, puedes
        usar el método <code>toSorted()</code>.
      </p>
      <p>
        Si al método <code>sort</code> no le pasamos nada, ordenará los
        elementos alfabéticamente, por tanto no nos servirá para ordenar
        números. Si queremos aplicar un criterio de orden diferente, le tenemos
        que pasar una función.
      </p>
      <h3>
        <code>includes()</code>
      </h3>
      <p>
        El método <code>includes()</code> nos permite saber si un array contiene
        un determinado elemento. Nos devolverá <code>true</code> si lo contiene,
        y <code>false</code> si no.
      </p>
      <CodeTs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

childrenNames.includes("Juanita"); // Devuelve true
childrenNames.includes("Jaimito"); // Devuelve false`}</CodeTs>
      <h3>
        <code>join()</code>
      </h3>
      <p>
        El método <code>join()</code> nos permite unir todos los elementos de un
        array en un string. Le podemos pasar un separador que se pondrá entre
        cada elemento.
      </p>
      <CodeTs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

const childrenNamesList = childrenNames.join(", ");
// childrenNamesList será un único valor de tipo string: "Pablito, Juanita, Antoñito, Pepita"
`}</CodeTs>
      <p>
        <strong>Pregunta</strong>: ¿sabes cuál es el método de los strings que
        hace justo lo contrario? Le das un string y te devuelve un array con
        partes del string.
      </p>
      <p>
        Más adelante, cuando empecemos a trabajar con funciones, veremos varios
        métodos de arrays más.
      </p>
      <h3 id="entrega-r2-metodos-arrays">
        Entrega: <code>R2-metodos-arrays</code>
      </h3>
      <p>
        Entrega la URL del repositorio de GitHub que contiene el código de este
        ejercicio.
      </p>
      <ol>
        <li>
          Años
          <ul>
            <li>
              <p>
                Crea una variable que almacenará un array vacío, que más tarde
                contendrá un array de años.
              </p>
            </li>
            <li>
              <p>
                Mediante un bucle, añade al array los años desde 2000 hasta el
                año actual.
              </p>
            </li>
          </ul>
        </li>
        <li>
          Words
          <ul>
            <li>
              <p>
                Copia este código, y a partir de él imprime todas las palabras
                separadas por un espacio y en orden inverso al que aparecen en
                el array:
              </p>
              <pre>
                <code style={{ userSelect: "text" }}>
                  {`const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];`}
                </code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          Notas
          <ul>
            <li>
              Crea una variable que almacenará las notas de un examen. Créala
              primero con <code>let</code> y un array vacío, y después asígnale
              un array con 5 notas.
            </li>
            <li>
              Crea una nueva variable y asígnale las notas anteriores pero
              ordenadas de menor a mayor.
            </li>
            <li>
              Imprime por consola las notas que han sido aprobadas (5 o más).
            </li>
            <li>Imprime por consola la nota media.</li>
            <li>Imprime por consola la nota más alta y la nota más baja.</li>
          </ul>
        </li>
      </ol>
      <p>
        Recuerda que la información tiene que ser comprensible para el usuario
        de tu aplicación, no te limites a imprimir valores numéricos por
        consola.
      </p>
      <p>
        Cuando termines todo esto, estarás preparado/a para{" "}
        <Link to="/challenge2/arrays/mejorando-la-lista-de-canciones/">
          mejorar la lista de canciones
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2ArrayMethods;
