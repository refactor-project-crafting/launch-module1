import { Link } from "react-router";
import CodeJs from "@components/CodeJs/CodeJs";

const Challenge1Expressions: React.FC = () => {
  return (
    <>
      <h2>Expresiones</h2>
      <p>
        Una <strong>expresión</strong> es una porción de código que puede ser
        sustituida por un valor. Ejemplos:
      </p>
      <CodeJs>{`3 + 4; // expresión que se puede sustituir por el valor 7
15 * 3; // expresión que se puede sustituir por el valor 45
"Hola" + ", " + "mundo"; // expresión que se puede sustituir por el valor "Hola, mundo"
3 > 2; // expresión que se puede sustituir por el valor true
10 < 5; // expresión que se puede sustituir por el valor false`}</CodeJs>
      <p>
        Decimos que una expresión <strong>resuelve</strong> a un valor. Por
        ejemplo, la expresión <code>3 + 4</code> resuelve a <code>7</code>.
      </p>
      <p>
        En las líneas anteriores has visto expresiones que consisten en valores
        acompañados de operadores. Los operadores son símbolos que indican al
        ordenador qué operación debe realizar con los valores.
      </p>
      <CodeJs>{`3 + 4; // 3 y 4 son valores, + es el operador que los suma
15 * 3; // 15 y 3 son valores, * es el operador que los multiplica
"Hola" + ", " + "mundo"; // "Hola", ", " y "mundo" son valores, + es el operador que los concatena
3 > 2; // 3 y 2 son valores, > es el operador que compara si 3 es mayor que 2
10 < 5; // 10 y 5 son valores, < es el operador que compara si 10 es menor que 5`}</CodeJs>
      <p>
        Cuando asignamos un valor a una variable lo hacemos mediante una
        expresión:
      </p>
      <CodeJs>{`let age = 42 + 1; // age = 43
let name = "Luis" + " García"; // name = "Luis García"`}</CodeJs>
      <div className="featured">
        <h3>
          El operador <code>=</code>
        </h3>
        El operador <code>=</code> no es un operador matemático, sino de{" "}
        <strong>asignación</strong>. Sirve para asignar un valor a una variable,
        y el valor asignado siempre se va a calcular a partir de una expresión.
        <p>
          <strong>
            A la izquierda del <code>=</code> siempre va el nombre de una
            variable.
          </strong>
        </p>
        <p>
          <strong>
            A la derecha del <code>=</code> siempre va una expresión.
          </strong>
        </p>
        <CodeJs>identificador = expresión;</CodeJs>
      </div>
      <p>
        Cada vez que JS se encuentre con una expresión, la{" "}
        <strong>evaluará</strong> (calculará) para obtener un valor, y la
        sustituirá por ese valor.
      </p>
      <h2>Tipos de expresiones</h2>
      <h3>Expresión literal</h3>
      <p>
        La expresión más básica es la expresión <strong>literal</strong>. Una
        expresión literal es un valor escrito directamente en el código.
        Ejemplos:
      </p>
      <CodeJs>{`const age = 42; // 42 es una expresión literal
const name = "Luis"; // "Luis" es una expresión literal
const isRegistered = false; // false es una expresión literal`}</CodeJs>
      <p>
        Escribimos <em>literalmente</em> el valor.
      </p>
      <h3>Expresión de identificador</h3>
      <p>
        La expresión de <strong>identificador</strong> consiste en escribir un
        nombre de variable, que será sustituido por el valor al que apunta la
        variable.
      </p>
      <p>Vamos a analizar este simple código y lo vamos a despiezar:</p>
      <CodeJs>{`let age = 32;
age = age + 1;`}</CodeJs>
      <p>
        En la segunda línea, parece que estamos usando lo mismo a la izquierda
        del <code>=</code> que a la derecha, al fin y al cabo estamos
        escribiendo <code>age</code> en ambos lados. Pero no es así. Recuerda
        que a la izquierda del igual siempre va el nombre de la variable a la
        que le vamos a asignar el valor, y a la derecha del igual siempre va una
        expresión que se va a evaluar para obtener un valor.
      </p>
      <p>
        JavaScript primero <strong>evaluará</strong> la expresión{" "}
        <code>age + 1</code> para obtener un valor, y después{" "}
        <strong>asignará</strong> ese valor a la variable <code>age</code>. Para
        ello, JavaScript buscará el valor al que apunta la variable{" "}
        <code>age</code> y le sumará 1. De este modo, al finalizar el programa
        la variable <code>age</code> apuntará al valor <code>33</code>.
      </p>
      <p>
        La expresión que ves a la derecha del <code>=</code> está compuesta por
        dos expresiones más pequeñas: <code>age</code> y <code>1</code>. La
        primera es una expresión de identificador, y la segunda es una expresión
        literal. JavaScript evaluará ambas para obtener sus valores, y después
        sumará esos valores.
      </p>
      <p>
        Por tanto, si queremos explicar todos los pasos que sigue JavaScript
        para ejecutar ese programa de dos líneas, tendríamos que descomponerlo
        así:
      </p>
      <p>Primera línea:</p>
      <CodeJs>let age = 32;</CodeJs>
      <ol>
        <li>
          Declarar una variable llamada <code>age</code>.
        </li>
        <li>
          Evaluar la expresión literal <code>32</code> para obtener el valor{" "}
          <code>32</code>.
        </li>
        <li>
          Asignar el valor <code>32</code> a la variable <code>age</code>.
        </li>
      </ol>
      <p>Segunda línea:</p>
      <CodeJs>age = age + 1;</CodeJs>
      <ol>
        <li>
          Evaluar la expresión de identificador <code>age</code> para obtener el
          valor <code>32</code>.
        </li>
        <li>
          Evaluar la expresión literal <code>1</code> para obtener el valor{" "}
          <code>1</code>.
        </li>
        <li>
          Sumar los valores <code>32</code> y <code>1</code> para obtener el
          valor <code>33</code>.
        </li>
        <li>
          Reasignar el valor <code>33</code> a la variable <code>age</code>.
        </li>
      </ol>
      <p>
        Si quisiéramos imprimir el valor por consola, podríamos hacerlo así:
      </p>
      <CodeJs>console.log(age); // 33</CodeJs>
      <p>
        Pero ahora párate a pensar la respuesta a esta pregunta: ¿el valor que
        se imprime en la consola es el mismo independientemente de en qué línea
        coloquemos el <code>console.log</code>?
      </p>
      <CodeJs>{`let age = 32;
console.log(age); // 32

age = age + 1;
console.log(age); // 33`}</CodeJs>
      <p>
        La respuesta es no. Y esto es porque dependiendo de en qué punto del
        programa se evalúe una expresión, el valor resultante podría ser
        diferente. En el caso de <code>age</code>, el valor que se imprime en la
        consola es diferente dependiendo de si se imprime antes o después de la
        reasignación.
      </p>
      <h3>Expresión aritmética</h3>
      <p>
        Una <strong>expresión aritmética</strong> es una expresión que contiene
        operadores aritméticos. Ejemplos:
      </p>
      <CodeJs>{`let age = 42;
age = age + 1; // age = 43

let result = 15 * 3; // result = 45`}</CodeJs>
      <p>
        El operador <code>+</code> y el operador <code>*</code> son operadores
        aritméticos, y permiten realizar operaciones matemáticas con valores de
        tipo <strong>number</strong>.
      </p>
      <h3>Expresión lógica</h3>
      <p>
        Una <strong>expresión lógica</strong> es una expresión que contiene
        operadores lógicos. Ejemplos:
      </p>
      <CodeJs>{`const isAdult = age > 18; // La expresión resolverá a true o false
const isCurrentYear = year === 2025; // La expresión resolverá a true o false`}</CodeJs>
      <p>
        El operador <code>&gt;</code> y el operador <code>===</code> son
        operadores lógicos, y permiten realizar operaciones con valores de tipo{" "}
        <strong>boolean</strong>.
      </p>
      <h3>Expresión de concatenación</h3>
      <p>
        Una <strong>expresión de concatenación</strong> es una expresión que
        contiene el operador <code>+</code> y que permite unir dos o más valores
        de tipo <strong>string</strong>. Ejemplos:
      </p>
      <CodeJs>{`const name = "Luis" + " García"; // name = "Luis García"
const greeting = "¡Hola, " + name + "!"; // greeting = "¡Hola, Luis García!"`}</CodeJs>
      <p>
        En la primera línea vemos una expresión de concatenación compuesta por
        dos expresiones literales. En la segunda línea hay una expresión de
        concatenación compuesta por dos expresiones literales y una expresión de
        identificador.
      </p>
      <ul>
        <li>
          La expresión literal <code>&quot;Luis&quot;</code> resuelve al valor
          de tipo string <code>&quot;Luis&quot;</code>.
        </li>
        <li>
          La expresión literal <code>&quot; García&quot;</code> resuelve al
          valor de tipo string <code>&quot; García&quot;</code>.
        </li>
        <li>
          La expresión literal <code>&quot;¡Hola, &quot;</code> resuelve al
          valor de tipo string <code>&quot;¡Hola, &quot;</code>.
        </li>
        <li>
          La expresión de identificador <code>name</code> resuelve al valor de
          tipo string <code>&quot;Luis García&quot;</code>.
        </li>
        <li>
          La expresión literal <code>&quot;!&quot;</code> resuelve al valor de
          tipo string <code>&quot;!&quot;</code>.
        </li>
      </ul>
      <div className="featured">
        <h3>Sobrecarga de operadores</h3>
        <p>
          Previamente habíamos visto que el operador <code>+</code> servía para
          sumar, pero en este caso vemos que sirve para concatenar. Se dice que
          el operador <code>+</code> es un operador{" "}
          <strong>sobrecargado</strong>, es decir, que puede realizar más de una
          operación.
        </p>
        <p>
          ¿Y qué determina que sume o concatene? El tipo de los operandos. Si
          uno de los dos operandos es de tipo string, entonces concatenará. Y si
          ambos operandos son number, entonces sumará.
        </p>
        <CodeJs>{`3 + 4; // 7
"3" + "4"; // "34"
"3" + 4; // "34"`}</CodeJs>
      </div>
      <h3 id="entrega-r1-expresiones">
        Entrega <code>R1-expresiones</code>
      </h3>
      <ol>
        <li>
          Escribe:
          <ul>
            <li>
              una expresión compuesta de expresiones literales (mínimo dos) que
              resuelva al valor <code>true</code>.
            </li>
            <li>
              una expresión compuesta de expresiones literales (mínimo dos) que
              resuelva al valor <code>18</code>.
            </li>
            <li>
              una expresión compuesta de expresiones literales (mínimo dos) que
              resuelva al valor{" "}
              <code>&quot;Crafting en Desarrollo Web Profesional&quot;</code>.
            </li>
          </ul>
        </li>
        <li>
          Escribe:
          <ul>
            <li>
              una expresión compuesta de expresiones literales y de
              identificador, que resuelva al valor <code>22</code>.
            </li>
            <li>
              una expresión compuesta de expresiones literales y de
              identificador, que resuelva al valor <code>false</code>.
            </li>
            <li>
              una expresión compuesta de expresiones literales y de
              identificador, que resuelva al valor{" "}
              <code>&quot;Mi amiga Marta tiene 29 años&quot;</code>.
            </li>
            <li>
              Describe las expresiones señaladas. Di todos los tipos de
              expresiones que ves en cada una, y a qué valor resuelven.
              <CodeJs>{`let age = 54;

15 * 3 >= age; // <-- describe esta expresión`}</CodeJs>
              <CodeJs>{`let year = 2015;
let age = 8;
let currentYear = 2025;

year + age === currentYear; // <-- describe esta expresión`}</CodeJs>
              <CodeJs>{`let name = "Marta";
let age = 29;

"Marta tiene " + age + " años, y el año que viene tendrá " + age + 1; // <-- describe esta expresión`}</CodeJs>
            </li>
          </ul>
        </li>
      </ol>
      <h2>Continúa</h2>
      <p>
        Ahora que ya conoces algunas piezas fundamentales de JavaScript, es hora
        de que desarrolles tu primer programa de verdad:{" "}
        <Link to="/challenge1/calentando-motores-js/finaliza-tu-primer-programa">
          finaliza tu primer programa
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge1Expressions;
