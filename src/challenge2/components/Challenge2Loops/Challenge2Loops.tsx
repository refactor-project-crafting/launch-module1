import CodeJs from "../../../components/CodeJs/CodeJs";

const Challenge2Loops: React.FC = () => {
  return (
    <>
      <h3>Bucles</h3>
      <p>
        En JavaScript, los bucles son estructuras de control que nos permiten
        ejecutar un bloque de código varias veces, controlando cuándo queremos
        que se ejecute y cuándo queremos que deje de ejecutarse.
      </p>
      <h4>
        <code>for</code>
      </h4>
      <p>
        Ésta es la sintaxis para un bucle <code>for</code>:
      </p>
      <CodeJs>{`for (let count = 1; count <= 10; count++) {
  console.log("Este mensaje se imprimirá 10 veces");
}`}</CodeJs>
      <p>
        Vamos a destripar esta estructura. Fíjate que en los paréntesis hay tres
        partes:
      </p>
      <ol>
        <li>
          <strong>Variable de control</strong>: <code>let count = 1</code>. En
          esta parte se declara una variable que va a servir para controlar el
          bucle. En este caso, estamos declarando e inicializando la variable{" "}
          <code>count</code> a <code>1</code> (<strong>inicializar</strong>{" "}
          significa asignar a una variable su primer valor). La declaramos con{" "}
          <code>let</code> porque su valor va a cambiar en cada iteración del
          bucle (una <em>iteración</em> es una vuelta del bucle).
        </li>
        <li>
          <strong>Condición para entrar en el bucle</strong>:{" "}
          <code>count &lt;= 10</code>. En esta parte se escribe una condición
          que evaluará a <code>true</code> o a <code>false</code>. Si la
          condición evalúa a <code>true</code>, entrará en el bucle y se
          ejecutará el bloque de código. Si evalúa a <code>false</code>, no
          entrará en el bucle y seguirá por la línea siguiente al cierre del{" "}
          <code>for</code>.
        </li>
        <li>
          <strong>Reasignación de la variable de control</strong>:{" "}
          <code>count++</code>. En esta parte se reasigna un nuevo valor a la
          variable de control. En este caso, estamos incrementando en{" "}
          <code>1</code> el valor de <code>count</code> en cada iteración.{" "}
          <code>count++</code> es lo mismo que <code>count = count + 1</code>.
        </li>
      </ol>
      <p>Ahora vamos a analizar qué pasos da y en qué orden:</p>
      <ol>
        <li>
          Primero declara la variable de control <code>count</code> e inicializa
          su valor a <code>1</code>.
        </li>
        <li>
          Después evalúa la expresión <code>count &lt;= 10</code>. Como{" "}
          <code>count</code> es <code>1</code>, la expresión evalúa a{" "}
          <code>true</code>, por lo que entra en el bucle.
        </li>
        <li>Ejecuta el bloque de código que está dentro del bucle.</li>
        <li>
          Reasigna un nuevo valor a <code>count</code>, que ahora será{" "}
          <code>2</code>.
        </li>
        <li>
          Vuelve a evaluar la expresión <code>count &lt;= 10</code>. Como{" "}
          <code>count</code> es <code>2</code>, la expresión evalúa a{" "}
          <code>true</code>, por lo que vuelve a ejecutar el bloque de código.
        </li>
        <li>
          Sigue haciendo los mismos pasos hasta que la expresión{" "}
          <code>count &lt;= 10</code> evalúa a <code>false</code>. En ese
          momento, sale del bucle.
        </li>
      </ol>
      <p>
        Fíjate en los pasos 3 y 4: la tercera parte del paréntesis se ejecuta
        después de haber ejecutado el bloque de código. Es decir, primero hace
        el <code>console.log()</code> y después hace el <code>count++</code>.
      </p>
      <h4>
        <code>while</code>
      </h4>
      <p>
        Otra manera de hacer lo mismo es con un bucle <code>while</code>:
      </p>
      <CodeJs>{`let count = 1;

while (count <= 10) {
  console.log("Este mensaje se imprimirá 10 veces");
  count++;
}`}</CodeJs>
      <p>
        La diferencia con el bucle <code>for</code> es que en el{" "}
        <code>while</code> la variable de control se declara e inicializa fuera
        del bucle, y la reasignación de la variable de control se hace dentro
        del bloque de código.
      </p>
      <p>
        Hay otras maneras de hacer bucles, pero están asociadas a los arrays,
        así que las veremos más adelante.
      </p>
      <h3 id="entrega-r2-bucles">
        Entrega <code>R2-bucles</code>:
      </h3>
      <p>
        Crea un programa{" "}
        <strong>
          en el <em>playground</em> de la página oficial de TypeScript
        </strong>{" "}
        que haga dos cosas:
      </p>
      <ol>
        <li>
          <p>
            Que recorra los números del 1 al 100. Por cada número, debe
            comprobar si es múltiplo de 5. Si lo es, debe imprimir en la
            consola: &quot;El número X es múltiplo de 5&quot; (cambiando{" "}
            <code>X</code> por el número que toque). Si no lo es, no debe
            imprimir nada.
          </p>
        </li>
        <li>
          <p>
            Que recorra los números desde el 50 hasta el 0. Cada vez que llegue
            a una decena (es decir, cuando el número sea 50, 40, 30, 20 o 10),
            debe imprimir en la consola: &quot;¡Faltan X!&quot; (cambiando{" "}
            <code>X</code> por el número que toque). Además, a partir del 10
            debe imprimir cada número diciendo &quot;¡Sólo faltan X!&quot;, y
            cuando llegue a 0 debe imprimir &quot;¡Ya está aquí!&quot;.
          </p>
        </li>
      </ol>
      <p>Entrega la URL del playground.</p>
    </>
  );
};

export default Challenge2Loops;
