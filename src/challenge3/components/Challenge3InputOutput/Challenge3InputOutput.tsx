import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3InputOutput: React.FC = () => {
  return (
    <>
      <h2>Entrada y salida de las funciones</h2>
      <p>
        Ya hemos visto que las funciones pueden recibir y devolver valores.
        Algunas no reciben nada y algunas otras (las tipo command) no devuelven
        nada, pero en general podemos pensar en las funciones como un sistema
        con entrada y salida.
      </p>
      <h3>Entrada</h3>
      <p>
        Cuando definimos una función, decidimos qué valores va a recibir. Puede
        ser uno, dos, tres, ninguno... A estos valores los llamamos{" "}
        <strong>parámetros</strong>. Los parámetros son{" "}
        <strong>variables</strong>, que se declaran sin <code>let</code> ni{" "}
        <code>const</code>, escribiéndolos entre los paréntesis en la definición
        de la función. Por ejemplo, aquí tienes dos funciones, una escrita con
        sintaxis arrow y otra con sintaxis clásica, que reciben parámetros:
      </p>
      <CodeTs>{`function greet(name: string): void {
  console.log(\`Hello, \${name}!\`);
}

const multiply = (numberA: number, numberB: number): number => {
  return numberA * numberB;
};`}</CodeTs>
      <p>
        Cuando JavaScript ejecuta la primera línea del bloque de la función, ya
        están disponibles las variables de los parámetros para ser usadas en
        expresiones.
      </p>
      <p>
        ¿Y cuándo va a ejecutar JavaScript el bloque de la función?{" "}
        <strong>Siempre que se llame a la función</strong>.
      </p>
      <p>
        Si una función recibe parámetros, es obligatorio pasarle los valores que
        espera cuando la llamamos. A esos valores que se le envían a la función
        los llamamos <strong>argumentos</strong>. Por ejemplo:
      </p>
      <CodeTs>{`greet("John"); // El valor tipo string "John" es un argumento
const result = multiply(3, 5); // Los valores tipo number 3 y 5 son argumentos`}</CodeTs>
      <p>
        Es decir, los <strong>argumentos</strong> son valores y los{" "}
        <strong>parámetros</strong> son variables. Los parámetros almacenarán
        los argumentos que se les pasen.
      </p>
      <p>
        Cuando vas a llamar a una función, el VS Code te enseñará su firma, por
        tanto podrás ver qué valores le tienes que enviar y qué te va a
        devolver. Esta herramienta de ayuda que se abre para enseñarte la firma
        de la función se llama <strong>Intellisense</strong>. También es la que
        se abre para autocompletar nombres de variables.
      </p>
      <figure className="picture">
        <img
          src="/images/intellisense-function.png"
          alt="Intellisense informando sobre la firma de una función"
        />
        <figcaption>
          Intellisense informando sobre la entrada y la salida de la función
        </figcaption>
      </figure>
      <div className="featured">
        <h3>Parámetros de entrada opcionales</h3>
        <p>
          Si una función espera un parámetro, es obligatorio pasárselo cuando la
          llamamos. Pero podemos crear funciones con parámetros opcionales,
          poniéndole un símbolo de interrogación <code>?</code> al final del
          nombre del parámetro. Por ejemplo:
        </p>
        <CodeTs>{`const greet = (name: string, surname?: string): void => {
  if (surname) {
    console.log(\`Hello, \${name} \${surname}!\`);
  } else {
    console.log(\`Hello, \${name}!\`);
  }
};

greet("Luis"); // Hello, Luis!
greet("Marta", "Campiña"); // Hello, Marta Campiña!`}</CodeTs>
        <p>
          Cuando un parámetro no recibe un valor, el valor será{" "}
          <code>undefined</code>. Puedes comprobarlo creando una función con un
          parámetro opcional y haciendo un <code>console.log</code> del valor
          del parámetro.
        </p>
        <p>
          Otra manera de crear un parámetro opcional es dándole un valor por
          defecto. Por ejemplo:
        </p>
        <CodeTs>{`const power = (base: number, exponent = 2): number => {
  return base ** exponent;
};`}</CodeTs>
        <p>
          En este caso, si no se le pasa un valor al segundo parámetro, el valor
          por defecto será 2. Fíjate que no lleva anotación de tipo, porque ya
          se le está dando un valor y podrá inferirlo.
        </p>
        <p>
          Haz la misma prueba que antes para comprobar cómo funciona el
          parámetro opcional.
        </p>
      </div>
      <h3>Salida</h3>
      <p>
        Las funciones tipo query devuelven un valor. Ese valor se especifica en
        la firma anotando el tipo de salida:
      </p>
      <CodeTs>{`const getFavouriteColor = (person: Person): string => {
  // Devolverá un string
  return person.favouriteColor;
};

const calculateAge = (birthYear: number): number => {
  // Devolverá un number
  return new Date().getFullYear() - birthYear;
};`}</CodeTs>
      <p>
        Si la función es de tipo command, es decir, no devuelve nada, el tipo de
        retorno se anota con el tipo <code>void</code>:
      </p>
      <CodeTs>{`function greet(name: string): void {
  console.log(\`Hello, \${name}!\`);
}`}</CodeTs>
      <p>
        Fíjate que las funciones tipo query, en el cuerpo de la función, siempre
        tienen la palabra reservada <code>return</code>. Cuando JavaScript se
        encuentra una sentencia <code>return</code>, la ejecución de la función
        se detiene (si hay más líneas, no se ejecutarán) y la función devuelve
        en ese momento un valor.
      </p>
      <p>
        Prueba a crear una función que primero hace un <code>console.log</code>,
        luego devuelve un valor y después hace otros dos{" "}
        <code>console.log</code>. Tan solo deberías ver el primer{" "}
        <code>console.log</code> en la consola, ya que la ejecución de la
        función se detiene en el <code>return</code>.
      </p>
      <p>
        A la derecha del <code>return</code>{" "}
        <strong>siempre va una expresión</strong>. Recuerda que todas las
        expresiones, siempre, resuelven a un valor. Por tanto se evaluará la
        expresión y se retornará el valor resultante.
      </p>
      <p>
        La expresión que va a la derecha del <code>return</code> puede ser de
        cualquiera de los tipos de expresión conocidos.
      </p>
      <CodeTs>{`const isEven = (number: number): boolean => {
  return number % 2 === 0; // Expresión lógica, devolverá un booleano
};

const greet = (name: string): string => {
  return \`Hello, \${name}!\`; // Expresión de concatenación, devolverá un string
};

const multiply = (numberA: number, numberB: number): number => {
  return numberA * numberB; // Expresión aritmética, devolverá un number
};`}</CodeTs>
      <h3>Salida en funciones flecha</h3>
      <p>
        Ya hemos visto que si la función hace varias cosas antes de retornar un
        valor, el bloque del cuerpo de la función se escribe igual tanto con la
        sintaxis arrow como con la sintaxis clásica:
      </p>
      <CodeTs>{`const getFavouriteColor = (person: Person): string => {
  if (!person.favouriteColor) {
    return "No favourite color";
  }

  return person.favouriteColor;
};

function getFavouriteColor(person: Person): string {
  if (!person.favouriteColor) {
    return "No favourite color";
  }

  return person.favouriteColor;
}`}</CodeTs>
      <p>
        Pero las funciones arrow tienen una particularidad: si lo único que hace
        la función es retornar un valor, es decir, si el bloque de la función
        únicamente retorna un valor, entonces podemos omitir las llaves y la
        palabra <code>return</code>:
      </p>
      <CodeTs>{`const areSamePasswords = (password: string, confirmPassword: string): boolean =>
  password === confirmPassword;

const getLastNumber = (values: number[]): number => values.at(-1);

const multiply = (numberA: number, numberB: number): number =>
  numberA * numberB;`}</CodeTs>
      <p>
        Esto es una manera de escribir funciones más compactas y legibles. Lo
        que se escribe a la derecha del arrow es la expresión del{" "}
        <code>return</code>, y este <code>return</code> queda implícito, no está
        en el código pero existe y se ejecutará.
      </p>
      <h3>Picar, picar, picar</h3>
      <p>
        Vamos a picar código, que es la única manera de asimilar todo esto. Crea
        las siguientes funciones, y escríbelas con la sintaxis arrow:
      </p>
      <ol>
        <li>
          Una función que reciba dos números y devuelva si el primero es
          múltiplo del segundo.
        </li>
        <li>
          Una función que reciba un número y devuelva si es un número primo.
        </li>
        <li>
          Una función que reciba un nombre y unos apellidos y devuelva la
          longitud del nombre completo.
        </li>
        <li>
          Una función que no reciba nada y devuelva un número aleatorio entre 0
          y 10.
        </li>
        <li>
          Una función que reciba un texto y devuelva cuántas palabras tiene.
        </li>
        <li>
          Una función que reciba dos números y devuelva el mayor. El segundo
          número tiene que ser opcional y, si no se le pasa, el valor por
          defecto será 10.
        </li>
        <li>
          Una función que recibe un nombre y, de manera opcional, una edad. La
          función debe imprimir por consola un saludo con el nombre. Además, si
          recibe la edad, también tendrá que decir &quot;Tienes X años&quot;.
        </li>
        <li>
          Una función que reciba una password y devuelva si es válida o no. Una
          password es válida si tiene al menos 8 caracteres, una letra
          mayúscula, una letra minúscula y un número.
        </li>
        <li>
          Una función que reciba un número e imprima por consola:
          <ul>
            <li>Si el número es múltiplo de 10, &quot;¡Faltan X!&quot;</li>
            <li>
              Si el número es menor que 10 pero mayor que 0, &quot;¡Sólo faltan
              X!&quot;
            </li>
            <li>Si el número es 0, &quot;¡Ya está aquí!&quot;</li>
            <li>
              Si el número es negativo, debe <strong>lanzar un error</strong>{" "}
              con el mensaje &quot;El número no puede ser negativo&quot;.
            </li>
          </ul>
        </li>
        <li>
          Una función que reciba un estudiante y devuelva las notas de los
          exámenes que ha aprobado. Un estudiante es un objeto con la siguiente
          forma:
          <CodeTs>{`type Student = {
  name: string;
  course: string;
  grades: number[];
};`}</CodeTs>
        </li>
      </ol>
      <h3 id="entrega-r3-funciones-io">
        Entrega <code>R3-funciones-io</code>
      </h3>
      <p>
        Tienes que entregar únicamente un archivo <code>.ts</code> con las
        funciones que has creado. No hace falta que hagas un programa que las
        llame, solo las funciones.
      </p>
      <p>
        Ahora vamos a trabajar nuevos tipos de{" "}
        <Link to="/challenge3/funciones/expresiones/">expresiones</Link>.
      </p>
    </>
  );
};

export default Challenge3InputOutput;
