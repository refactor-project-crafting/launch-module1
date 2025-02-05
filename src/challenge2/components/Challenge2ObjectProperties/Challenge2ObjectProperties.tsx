import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge2ObjectProperties: React.FC = () => {
  return (
    <>
      <h2>Acceder a las propiedades de un objeto</h2>
      <h3>
        <em>Dot notation</em>
      </h3>
      <p>
        Para acceder a las propiedades de un objeto, usamos la{" "}
        <strong>
          <em>dot notation</em>
        </strong>{" "}
        o <strong>notación de punto</strong>. Después del identificador de la
        variable que apunta al objeto escribimos un punto y el nombre de la
        propiedad a la que queremos acceder.
      </p>
      <p>
        A la expresión resultante la llamamos{" "}
        <strong>expresión de propiedad</strong>.
      </p>
      <CodeTs>{`const person: Person = {
  name: "María",
  age: 34,
};

console.log(person.name); // Expresión de propiedad que resuelve al string "María"
console.log(person.age); // Expresión de propiedad que resuelve al número 34`}</CodeTs>
      <p>
        Si intentamos acceder a una propiedad que no existe, TypeScript nos dará
        un error:
      </p>
      <CodeTs>{`console.log(person.lastName); // Error: Property 'lastName' does not exist on type 'Person'`}</CodeTs>
      <p>
        ¿Cómo se evalúa una expresión de propiedad? Primero se evalúa la
        expresión a la izquierda del punto y después la propiedad de la derecha.
        Por ejemplo:
      </p>
      <CodeTs>console.log(person.age);</CodeTs>
      <p>
        Primero se evalúa <code>person</code>, que es una expresión de
        identificador. Si dicha expresión resuelve a un valor de tipo objeto, se
        evalúa la propiedad <code>age</code> de ese objeto como si fuera una
        expresión de identificador. De hecho, los nombres de las propiedades de
        un objeto también son identificadores.
      </p>
      <h3>
        <em>Bracket notation</em>
      </h3>
      <p>
        Otra forma de acceder a las propiedades de un objeto es usando la{" "}
        <strong>
          <em>bracket notation</em>
        </strong>{" "}
        o <strong>notación de corchetes</strong>. En lugar de un punto, usamos
        corchetes y entre ellos escribimos el nombre de la propiedad como un
        string.
      </p>
      <CodeTs>{`console.log(person["name"]); // Expresión de propiedad que resuelve al string "María"
console.log(person["age"]); // Expresión de propiedad que resuelve al número 34`}</CodeTs>
      <p>
        En realidad, lo que tenemos que escribir entre los corchetes es{" "}
        <strong>una expresión que resuelva a un string</strong>. De este modo,
        si el nombre de la propiedad lo tenemos almacenado en una variable,
        podemos usarla así:
      </p>
      <CodeTs>{`const personData = "age";
console.log(person[personData]); // Expresión de propiedad que resuelve al número 34`}</CodeTs>
      <p>
        Fíjate que entre corchetes tenemos una expresión de identificador, que
        resuelve al string "age".
      </p>
      <p>
        A veces no tendremos directamente el nombre de la propiedad pero lo
        tendremos en una variable. En esos casos tenemos que usar la{" "}
        <em>bracket notation</em>.
      </p>
      <div className="featured" id="r2-syntax-highlighting">
        <h3>Syntax highlighting</h3>
        <p>
          Si te fijas en tu editor, el código no usa un solo color para todo. El
          editor utiliza diferentes colores para facilitar la tarea a tu cerebro
          de entender el código. A esto se le llama{" "}
          <strong>syntax highlighting</strong>. En los mismos ejemplos de código
          que ves en estos materiales también puedes comprobar el uso de syntax
          highlighting.
        </p>
        <p>
          Si el código tuviera un solo color o tuviera la misma tipografía y
          mismo formato que el texto, sería muy difícil de entender.
        </p>
        <p>Imagina un código así:</p>
        <pre>{`const person: Person = {
  name: "María",
  age: 34,
};

console.log(person.name); // Expresión de propiedad que resuelve al string "María"

console.log(person.age); // Expresión de propiedad que resuelve al número 34`}</pre>
        <p>
          Este código se tarda un poco más en entender. El syntax highlighting
          es una herramienta muy útil para entender el código.
        </p>
        <p>
          Entrega <code>R2-syntax-highlighting</code>: ve a Discord y escribe
          por el canal un trozo de código TypeScript donde crees un objeto con
          al menos dos propiedades. Haz que se vea con syntax highlighting.
        </p>
      </div>
      <h2>A picar</h2>
      <p>
        Es hora de que nos ayudes con nuestro{" "}
        <Link to="/challenge2/reproductor-de-musica/">
          reproductor de música
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2ObjectProperties;
