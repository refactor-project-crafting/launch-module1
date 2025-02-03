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
    </>
  );
};

export default Challenge2Ternary;
