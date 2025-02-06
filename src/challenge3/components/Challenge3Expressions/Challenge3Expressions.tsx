import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3Expressions: React.FC = () => {
  return (
    <>
      <h2>Expresiones y funciones</h2>
      <p>
        Ahora que ya te estás acostumbrando al uso de funciones, vamos a
        introducir dos nuevos tipos de expresiones.
      </p>
      <h3>Expresión de llamada</h3>
      <p>
        Una expresión de llamada es una expresión que invoca una función. Por
        ejemplo:
      </p>
      <CodeTs>
        {
          "const area = getCircleArea(5); // A la derecha del igual hay una expresión de llamada"
        }
      </CodeTs>
      <p>
        ¿Verdad que las expresiones resuelven siempre a un valor? Pues bien, una
        expresión de llamada{" "}
        <strong>resuelve al valor devuelto por la función llamada</strong>. En
        el ejemplo anterior, la expresión de llamada resolverá al valor numérico{" "}
        <code>78.54</code>.
      </p>
      <p>
        Fíjate que una expresión es un trozo de código que podrías quitar y
        sustituir por su valor sin que el programa cambie. Por ejemplo, podrías
        sustituir <code>getCircleArea(5)</code> por <code>78.54</code> y el
        programa seguiría funcionando igual.
      </p>
      <p>
        ¿Y qué pasa con las funciones command? Hemos dicho que todas las
        expresiones siempre resuelven a un valor, por tanto una función de
        llamada a una función que no devuelve nada también resuelve a un valor:{" "}
        <strong>
          al valor <code>undefined</code>
        </strong>
        .
      </p>
      <CodeTs>{`const greetPerson = (name: string): void => {
  console.log(\`Hello, \${name}!\`);
};

const result = greetPerson("Marta"); // La expresión de llamada resuelve a undefined

console.log(result); // undefined`}</CodeTs>
      <p>
        Cuando invoques a una función command, no tiene sentido que guardes el
        valor que devuelve en una variable. Ahora ya sabes por qué.
      </p>
      <CodeTs>{`const greetPerson = (name: string): void => {
  console.log(\`Hello, \${name}!\`);
};

greetPerson("Marta"); // No guardamos el valor que devuelve la función`}</CodeTs>
      <h4>Expresiones de llamada en métodos</h4>
      <p>
        ¿Te acuerdas de los métodos? Por ejemplo, el método{" "}
        <code>toUpperCase()</code> de los strings o el método{" "}
        <code>sort()</code> de los arrays. Pues bien, cuando invocas a un
        método, también estás invocando a una función, por tanto estás
        escribiendo una expresión de llamada.
      </p>
      <CodeTs>{`const name = "Marta";
const upperCaseName = name.toUpperCase(); // Expresión de llamada que resuelve al string "Marta"

const text = "Hola, buenos días";
const words = text.split(" "); // Expresión de llamada que resuelve al array de strings ["Hola,", "buenos", "días"]`}</CodeTs>
      <p>
        Pregunta: ¿a qué valores resuelven las siguientes expresiones de
        llamada?
      </p>
      <ol>
        <li>
          <code>[1, 2, 3].join(&quot;, &quot;)</code>
        </li>
        <li>
          <code>Math.max(1, 2, 3, 4, 5)</code>
        </li>
        <li>
          <code>console.log(&quot;Hola&quot;)</code>
        </li>
        <li>
          <code>
            [&quot;Luis&quot;, &quot;Marta&quot;,
            &quot;Juan&quot;].push(&quot;Paula&quot;)
          </code>
        </li>
        <li>
          <code>
            [5, 4, 3, 2, 1].forEach((number) =&gt; console.log(number))
          </code>
        </li>
        <li>
          <code>[10, -4, 3, 0, 5].sort()</code>
        </li>
        <li>
          <code>&quot;Antonio&quot;.at(3)</code>
        </li>
        <li>
          <code>
            [&quot;Luis&quot;, &quot;Marta&quot;,
            &quot;Juan&quot;].includes(&quot;Marta&quot;)
          </code>
        </li>
      </ol>
      <h4 id="entrega-r3-expresiones-llamada">
        Entrega <code>R3-expresiones-llamada</code>
      </h4>
      <p>Responde en el propio formulario a las preguntas anteriores.</p>
      <h3>Expresión de función</h3>
      <p>Hasta ahora sabemos:</p>
      <ul>
        <li>Que una expresión siempre resuelve a un valor</li>
        <li>
          Que los valores tienen tipos primitivos (number, string, boolean,
          etc.) o no primitivos (object)
        </li>
      </ul>
      <p>
        Pues bien, te presentamos un nuevo tipo de valor:{" "}
        <em>
          el tipo <code>function</code>
        </em>
        . El tipo function es un tipo <strong>no primitivo</strong>, como los
        objetos.
      </p>
      <div className="featured">
        <h3>Una función es un valor</h3>
        <p>
          Esto es una característica de JavaScript y debes grabártela bien en la
          mente para poder entender bien el lenguaje.
        </p>
        <ul>
          <li>
            <code>&quot;hola&quot;</code> es un valor
          </li>
          <li>
            <code>35</code> es un valor
          </li>
          <li>
            <code>true</code> es un valor
          </li>
          <li>
            <code>[&quot;Luis&quot;, &quot;Marta&quot;, &quot;Juan&quot;]</code>{" "}
            es un valor
          </li>
          <li>
            <code>
              (numberA: number, numberB: number): number =&gt; numberA + numberB
            </code>{" "}
            <strong>también es un valor</strong>
          </li>
        </ul>
      </div>
      <p>
        Aquí viene el nuevo tipo de expresión:{" "}
        <strong>la expresión de función</strong> (o <em>function expression</em>
        ). Una expresión de función es una expresión que resuelve a una función.
      </p>
      <p>
        ¿Verdad que todo lo que hay a la derecha del <code>=</code> en una
        asignación es una expresión? Mira:
      </p>
      <CodeTs>{`const multiply = (numberA: number, numberB: number): number =>
  numberA * numberB; // A la derecha del igual hay una expresión de función
const getCircleArea = (radius: number): number => Math.PI * radius ** 2; // A la derecha del igual hay una expresión de función
const isAnonymous = (person: Person): boolean => person.name === ""; // A la derecha del igual hay una expresión de función`}</CodeTs>
      <p>
        En ese código tienes tres expresiones de función, que van a resolver a
        las tres funciones que has definido. En ese sentido se parecen a las
        expresiones literales, que resuelven al mismo valor que hay escrito.
      </p>
      <ul>
        <li>
          La expresión <code>5</code> resuelve al número <code>5</code>
        </li>
        <li>
          La expresión <code>&quot;hola&quot;</code> resuelve al string{" "}
          <code>&quot;hola&quot;</code>
        </li>
        <li>
          La expresión <code>true</code> resuelve al boolean <code>true</code>
        </li>
        <li>
          La expresión{" "}
          <code>
            (person: Person): boolean =&gt; person.name === &quot;&quot;
          </code>{" "}
          resuelve a la función{" "}
          <code>
            (person: Person): boolean =&gt; person.name === &quot;&quot;
          </code>
        </li>
      </ul>
      <p>
        Para entender esto último es importante que te imagines los valores
        fuera del código. El código sólo es texto, son letras y símbolos. Pero
        cuando el código se ejecuta, se van a crear valores en memoria. Una
        expresión está en el código, un valor está en memoria mientras el
        programa se ejecuta. Por eso no es lo mismo una expresión literal{" "}
        <code>5</code> que el valor <code>5</code> al que resuelve.
      </p>
      <p>
        (éste párrafo anterior es <strong>TAN IMPORTANTE</strong> para la
        programación, que te lo vamos a poner otra vez; léelo de nuevo frase a
        frase y con calma)
      </p>
      <p>
        Para entender esto último es importante que te imagines los valores
        fuera del código. El código sólo es texto, son letras y símbolos. Pero
        cuando el código se ejecuta, se van a crear valores en memoria. Una
        expresión está en el código, un valor está en memoria mientras el
        programa se ejecuta. Por eso no es lo mismo una expresión literal{" "}
        <code>5</code> que el valor <code>5</code> al que resuelve.
      </p>
      <h3>Funciones anónimas</h3>
      <p>Hemos dicho que una función puede ser escrita de dos maneras:</p>
      <CodeTs>{`function multiply(numberA: number, numberB: number): number {
  return numberA * numberB;
}`}</CodeTs>
      o
      <CodeTs>{`const multiply = (numberA: number, numberB: number): number =>
  numberA * numberB;`}</CodeTs>
      <p>
        En la segunda forma puedes ver que definimos una función sin nombre (a
        la derecha del `=`). Luego la asignamos a una variable y ya la podemos
        llamar por un nombre, pero fíjate bien en que la función que hemos
        definido no tiene nombre.
      </p>
      <p>
        En JavaScript vamos a trabajar mucho con funciones sin nombre. Por
        ejemplo:
      </p>
      <CodeTs>{`const ages = [43, 12, 25, 8, 65, 32];

ages.sort((ageA, ageB) => ageA - ageB);`}</CodeTs>
      <p>
        En este caso, estamos ordenando el array <code>ages</code> de menor a
        mayor. Fíjate que cuando invocamos al método <code>sort</code> del
        array, le pasamos una función anónima.
      </p>
      <p>Otro ejemplo:</p>
      <CodeTs>{`const names = ["Antonia", "Arturo", "David"];

names.forEach((name) => console.log(\`¡Hola, \${name}!\`));`}</CodeTs>
      <p>
        En este caso, estamos recorriendo el array <code>names</code> y por cada
        nombre que encontramos, estamos imprimiendo un saludo. Fíjate que cuando
        invocamos al método <code>forEach</code> del array, le pasamos una
        función anónima.
      </p>
      <p>
        Resumen: igual que a una función le puedes pasar un <code>9</code> como
        argumento (<code>squareRoot(9)</code>), también le puedes pasar una
        función como argumento (
        <code>ages.sort((ageA, ageB) =&gt; ageA - ageB)</code>).
      </p>
    </>
  );
};

export default Challenge3Expressions;
