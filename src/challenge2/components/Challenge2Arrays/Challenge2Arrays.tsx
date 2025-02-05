import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge2Arrays: React.FC = () => {
  return (
    <>
      <h1>Reto 2-fase 3: Arrays</h1>
      <img
        src="/images/array.png"
        alt="Un array con cuatro nombres de persona"
      />
      <p>
        Un <strong>array</strong> es una <strong>estructura de datos</strong>{" "}
        que nos permite almacenar varios valores en una sola variable. En
        JavaScript, los arrays se definen con corchetes <code>[]</code> y se
        pueden rellenar con cualquier tipo de dato. Aunque veremos algunas
        excepciones a esto, lo normal es que todos los valores de un array sean
        del mismo tipo.
      </p>
      <p>
        Importante: un array es <strong>un</strong> valor, aunque contenga
        varios valores dentro.
      </p>
      <p>En TypeScript, el tipo de un array se anota así:</p>
      <ul>
        <li>
          <code>string[]</code> para un array de strings
        </li>
        <li>
          <code>number[]</code> para un array de números
        </li>
        <li>
          <code>boolean[]</code> para un array de booleanos
        </li>
      </ul>
      <CodeTs>{`let names: string[]; // Aquí irá un array de valores de tipo string

names = ["Luis", "Laura", "Juan"]; // Esto es correcto
names = [1, 2, 3]; // Aquí TS nos dará error, porque los números no son strings`}</CodeTs>
      <p>
        Como siempre, si no le asignas un valor a la variable en la misma línea
        en la que la declaras, tendrás que anotar el tipo de la variable. Y si
        le asignas un valor en la misma línea en la que la declaras, TypeScript
        inferirá el tipo de la variable.
      </p>
      <CodeTs>{`let names = ["Luis", "Laura", "Juan"]; // TypeScript infiere que names es de tipo string[]
`}</CodeTs>
      <p>
        Hay una excepción a esto. Imagina que quieres declarar una variable con
        un array de nombres, pero al principio está vacía, y luego se irán
        añadiendo los nombres. Si haces esto, TypeScript no podrá inferir el
        tipo del array:
      </p>
      <CodeTs>{`const names = []; // TypeScript no puede inferir el tipo, porque no hay ningún valor en el array`}</CodeTs>
      <p>
        En este caso, el tipo que va a inferir TypeScript es <code>any[]</code>,
        y ya sabemos que tenemos que evitar el tipo <code>any</code>. Por tanto
        en este caso, aunque estemos asignando el valor en la misma línea en la
        que declaramos la variable, debemos anotar el tipo:
      </p>
      <CodeTs>{`const names: string[] = []; // Ahora TypeScript sabe que names es un array de strings
`}</CodeTs>
      <h3>Accediendo a los elementos de un array</h3>
      <p>
        Para acceder a los elementos de un array, lo más habitual es usar
        corchetes y el índice del elemento al que queremos acceder. Los índices
        de un array empiezan en 0, por lo que el primer elemento tiene índice 0,
        el segundo índice 1, y así sucesivamente. El último índice de un array
        es la longitud del array menos 1.
      </p>
      <p>
        Lo que va entre corchetes es una <strong>expresión</strong>. Esto
        significa que puedes poner cualquier expresión que resuelva a un número,
        no solo un número literal.
      </p>
      <CodeTs>{`const names = ["Luis", "Laura", "Juan", "Ana"];

// Accedemos mediante la expresión literal 0
console.log(names[0]); // Luis

// Accedemos mediante la expresión de identificador position
let position = 2;
console.log(names[position]); // Juan

// Accedemos mediante la expresión aritmética position + 1
console.log(names[position + 1]); // Ana`}</CodeTs>
      <p>
        Si queremos acceder a un elemento contando su posición por el final,
        podemos usar el método <code>at</code> de los arrays, que funciona
        exactamente igual que el método <code>at</code> de los strings.
      </p>
      <CodeTs>{`console.log(names.at(-1)); // Ana
console.log(names.at(-2)); // Juan`}</CodeTs>
      <h3 id="entrega-r2-arrays-crea-una-lista-de-canciones">
        Entrega <code>R2-arrays</code>: Crea una lista de canciones
      </h3>
      <p>
        Crea un programa en TypeScript llamado <code>cli-songs</code> para
        mostrar una canción al usuario. Crea una variable que almacene varios
        títulos de canciones.
      </p>
      <h4>User stories</h4>
      <p>Como usuario de la aplicación de música:</p>
      <ul>
        <li>
          Quiero que la aplicación almacene una lista de títulos de canciones
          para gestionar mi playlist.
        </li>
        <li>
          Quiero poder introducir la posición de una canción en la lista para
          ver qué canción hay en esa posición. Para mí las posiciones empiezan
          en 1.
        </li>
        <li>
          Quiero que la aplicación me muestre el título de la canción que
          corresponde a la posición que he introducido para poder comprobar qué
          canción es, y luego finalice.
        </li>
        <li>
          Quiero que si la posición que introduzco no corresponde a ninguna
          canción en la lista, la aplicación me muestre un mensaje de error y
          finalice, para saber que no hay ninguna canción en esa posición.
        </li>
      </ul>
      <h4>Starter</h4>
      <p>
        Para poder pedir datos al usuario, aquí tienes un starter con todo lo
        necesario:{" "}
        <Link to="https://github.com/refactor-project-crafting/launch-starter-ts-user-input">
          https://github.com/refactor-project-crafting/launch-starter-ts-user-input
        </Link>
      </p>
      <p>
        Nombra a tu proyecto <code>cli-songs</code> y súbelo a un repositorio en
        tu cuenta de GitHub. Entrega la URL de tu repo.
      </p>
      <div className="featured">
        <h3>Las ramas de un programa</h3>

        <p>
          En el programa que vas a escribir, JavaScript puede tomar dos caminos
          distintos: o imprime el título de la canción solicitada, o imprime un
          mensaje de error. A estos posibles caminos que JavaScript puede tomar
          se le llaman <strong>ramas</strong>.{" "}
        </p>
      </div>
      <p>
        Ahora vamos a ver las diferentes maneras que tenemos para{" "}
        <Link to="/challenge2/arrays/crear-y-modificar-un-array/">
          crear y modificar un array
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2Arrays;
