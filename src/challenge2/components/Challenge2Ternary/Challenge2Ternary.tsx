import CodeJs from "../../../components/CodeJs/CodeJs";

const Challenge2Ternary: React.FC = () => {
  return (
    <>
      <h3>Expresiones ternarias</h3>
      <p>
        Las expresiones ternarias también son una formar de dirigir el flujo del
        código. En este caso no las vamos a usar para ejecutar unas sentencias u
        otras, como en el caso del <code>if</code>, sino para decirle a JS que{" "}
        <strong>evalúe una expresión u otra</strong>.
      </p>
      <CodeJs>{`const username = "admin";

const message =
  username.length > 5
    ? "El nombre de usuario es muy largo"
    : "El nombre de usuario es correcto";

console.log(message);`}</CodeJs>
      <p>
        En el código anterior, lo que hay a la derecha del <code>=</code> en la
        declaración de <code>message</code> es una expresión ternaria (recuerda
        que{" "}
        <strong>
          todo lo que va a la derecha del <code>=</code> en una asignación es
          una expresión
        </strong>
        ). La expresión ternaria se compone de tres partes:
      </p>
      <ol>
        <li>
          La condición que se evalúa (<code>username.length &gt; 5</code>). Esta
          condición siempre será una expresión que resuelva a <code>true</code>{" "}
          o a <code>false</code>, como en el caso del <code>if</code>.
        </li>
        <li>
          La expresión que se tiene que evaluar si la condición es{" "}
          <code>true</code>. Esta expresión va separada de la condición por el{" "}
          <strong>operador ternario</strong> <code>?</code>.
        </li>
        <li>
          La expresión que se tiene que evaluar si la condición es{" "}
          <code>false</code>. Esta expresión va separada de la anterior por dos
          puntos <code>:</code>.
        </li>
      </ol>
      <p>
        Recuerda que <strong>una expresión siempre resuelve a un valor</strong>,
        también la expresión ternaria. La expresión va a resolver o al valor de
        tipo string &quot;El nombre de usuario es muy largo&quot; o al valor de
        tipo string &quot;El nombre de usuario es correcto&quot;, dependiendo de
        si la condición preguntada se cumple o no.
      </p>
      <p>Otro ejemplo:</p>
      <CodeJs>{`const age = 21;

console.log(\`El usuario es \${age >= 18 ? "mayor" : "menor"} de edad\`);`}</CodeJs>
      <p>
        Cuando usamos un template literal podemos escribir expresiones dentro
        del string delimitado por backticks. En este caso la expresión que hemos
        escrito es una expresión ternaria, que evaluará al valor de tipo string
        "mayor" o "menor" dependiendo de si la expresión lógica evalúa a{" "}
        <code>true</code>o a <code>false</code>.
      </p>
      <div className="featured">
        <h3>Uso incorrecto del operador ternario</h3>
        <p>
          El operador ternario es para escribir expresiones ternarias,{" "}
          <strong>no para ejecutar sentencias</strong>. Mira este código:
        </p>
        <CodeJs>{`const age = 21;

age >= 18
  ? console.log("El usuario es mayor de edad")
  : console.log("El usuario es menor de edad");`}</CodeJs>
        <p>
          En este caso estamos usando el ternario para decirle a JS que ejecute
          una sentencia u otra, <strong>esto es incorrecto</strong>. El operador
          ternario es para escribir una expresión que resuelva a un valor a
          elegir entre dos opciones, no para ejecutar dos sentencias diferentes
          de manera condicional.
        </p>
      </div>
      <h3>
        Valores <code>truthy</code> y <code>falsy</code>
      </h3>
      <p>
        En varias ocasiones hemos dicho que hay que usar una condición que
        evalúe a un booleano (en el <code>if</code>, en el <code>switch</code> y
        en la expresión ternaria). Pero qué pasa si en estas estructuras
        escribimos una expresión que no resuelve a <code>true</code> o a{" "}
        <code>false</code>? ¿Dará algún error?
      </p>
      <p>
        No, cuando JS espere una expresión que resuelve a un booleano, y le
        escribamos una expresión que resuelve a un valor de otro tipo, JS
        convertirá ese valor a un booleano, siguiendo estas reglas:
      </p>
      <ul>
        <li>
          <p>
            <strong>
              Valores <em>falsy</em>
            </strong>
            : son aquellos valores que, al convertirlos a booleano, resuelven a{" "}
            <code>false</code>. Los valores falsy son:
          </p>
          <ul>
            <li>
              <code>false</code>
            </li>
            <li>
              <code>0</code>
            </li>
            <li>
              <code>&quot;&quot;</code>
            </li>
            <li>
              <code>null</code>
            </li>
            <li>
              <code>undefined</code>
            </li>
            <li>
              <code>NaN</code>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>
              Valores <em>truthy</em>
            </strong>
            : son aquellos valores que, al convertirlos a booleano, resuelven a{" "}
            <code>true</code>. Todos los valores son <em>truthy</em> excepto los{" "}
            <em>falsy</em>.
          </p>
        </li>
      </ul>
      <h3>Prueba</h3>
      <p>
        Vamos a hacer una prueba para comprobar que JS convierte los valores a
        booleanos cuando espera un booleano. Abre tu consola y escribe lo
        siguiente:
      </p>
      <CodeJs>{`console.log(!"");
console.log(!0);
console.log(!undefined);
console.log(!null);
console.log(!NaN);
console.log(!"hola");`}</CodeJs>
      <p>
        Si ejecutas este código verás que JS convierte los valores a booleanos.
        Los valores <em>falsy</em> resuelven a <code>false</code> y el valor{" "}
        <em>truthy</em> resuelve a <code>true</code>. Esto es porque el operador
        NOT siempre va a dar como resultado un booleano (si el valor es{" "}
        <em>falsy</em> resuelve a <code>true</code>, si el valor es{" "}
        <em>truthy</em> resuelve a <code>false</code>):
      </p>
      <ul>
        <li>
          <code>!&quot;&quot;</code> resuelve a <code>true</code>
        </li>
        <li>
          <code>!0</code> resuelve a <code>true</code>
        </li>
        <li>
          <code>!undefined</code> resuelve a <code>true</code>
        </li>
        <li>
          <code>!null</code> resuelve a <code>true</code>
        </li>
        <li>
          <code>!NaN</code> resuelve a <code>true</code>
        </li>
        <li>
          <code>!&quot;hola&quot;</code> resuelve a <code>false</code>
        </li>
      </ul>
      <p>
        Y si a esa expresión le añades otro operador NOT, que vuelve a negar el
        valor, obtendrás el valor original convertido a booleano.
      </p>
      <p>Prueba:</p>
      <CodeJs>{`console.log(!!"");
console.log(!!0);
console.log(!!"hola");`}</CodeJs>
    </>
  );
};

export default Challenge2Ternary;
