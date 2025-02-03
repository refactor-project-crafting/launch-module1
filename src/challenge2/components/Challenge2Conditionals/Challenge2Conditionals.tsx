import CodeJs from "../../../components/CodeJs/CodeJs";

const Challenge2Conditionals: React.FC = () => {
  return (
    <>
      <h3>Condicionales</h3>
      <p>
        Las estructuras de control condicionales nos permiten ejecutar un bloque
        de código sólo si se cumple una condición. Vamos a ver dos estructuras
        condicionales.
      </p>
      <h4>
        <code>if</code>
      </h4>
      <p>
        A <code>if</code> siempre le vamos a dar entre paréntesis{" "}
        <strong>
          una expresión que resuelva a <code>true</code> o a <code>false</code>
        </strong>
        . Si la expresión resuelve a <code>true</code>, se ejecuta el bloque de
        código que está dentro de las llaves que siguen al <code>if</code>. Si
        la expresión resuelve a <code>false</code>, no se ejecuta ese bloque de
        código.
      </p>
      <p>
        Diferentes ejemplos de expresiones que resuelven a <code>true</code> o a{" "}
        <code>false</code>:
      </p>
      <ul>
        <li>Una expresión lógica</li>
        <li>Una expresión de identificador</li>
        <li>Una expresión literal</li>
      </ul>
      <CodeJs>{`const averageGrade = 6;

if (averageGrade >= 5) {
  console.log("El estudiante ha aprobado");
}`}</CodeJs>
      <CodeJs>{`// A if le damos una expresión de identificador
const age = 21;
const isAdult = age >= 18;

if (isAdult) {
  console.log("El usuario es mayor de edad");
}`}</CodeJs>
      <CodeJs>{`// A if le damos una expresión literal
// (no tiene utilidad real, pero sirve para entender lo que hace el código)
if (true) {
  console.log("Este bloque de código se ejecuta siempre");
}

if (false) {
  console.log("Este bloque de código no se ejecuta nunca");
}`}</CodeJs>
      <div className="featured">
        <h3>Legibilidad</h3>

        <p>
          Algo muy importante de cara a la legibilidad del código es la
          indentación o sangrado. Las líneas de código que están dentro de un
          bloque if deben estar más a la derecha que la línea del if.
        </p>

        <img src="/images/indentacion.png" alt="Indentación del código" />
      </div>
      <h4>
        <code>else</code>
      </h4>
      <p>
        Podemos hacer que cuando la expresión del <code>if</code> resuelva a{" "}
        <code>false</code>, se ejecute un bloque de código diferente. Para ello
        usamos <code>else</code>.
      </p>
      <CodeJs>{`const averageGrade = 4;

if (averageGrade >= 5) {
  // Este bloque de código se ejecutará cuando la expresión del if resuelva a true
  console.log("El estudiante ha aprobado");
} else {
  // Este bloque de código se ejecutará cuando la expresión del if resuelva a false
  console.log("El estudiante ha suspendido");
}`}</CodeJs>
      <div className="featured">
        <h3>
          Pronto diremos adiós a <code>else</code>
        </h3>

        <p>
          Tenemos que aprender a usar <code>else</code> en nuestros primeros
          pasos como developers, pero más adelante veremos que es mejor
          evitarlos, y aprenderemos diferentes técnicas para conseguirlo.
        </p>

        <p>Por ahora úsalo con tranquilidad.</p>
      </div>
      <h4>
        <code>switch</code>
      </h4>
      <p>
        Cuando queremos que se ejecute un bloque de código pero basándonos en
        una variable que puede tener varios valores, tenemos la estructura
        <code>switch</code> a nuestra disposición. Nos permite definir varios
        bloques de código, cada uno asociado a un valor diferente de la
        variable.
      </p>
      <CodeJs>{`let day = "lunes";

switch (day) {
  case "lunes":
    console.log("Necesito mucho café para empezar la semana ☕");
    break;
  case "viernes":
    console.log("¡Es el mejor día de mi vida! 🎉");
    break;
  case "domingo":
    console.log("Qué poco dura lo bueno... 😥");
    break;
  default: // Aquí entrará si no ha entrado en ninguno de los case anteriores
    console.log("Hoy es un día normal 🤷‍♂️");
}`}</CodeJs>
      <p>
        En este caso el bloque de código que se tiene que ejecutar no se
        delimita con llaves <code>{}</code>. En su lugar, se delimita con{" "}
        <code>case</code> y <code>break</code>. <code>case</code> es el valor
        que tiene que tener la variable para que se ejecute ese bloque de
        código, y <code>break</code> es la palabra que indica que el bloque de
        código ha terminado. Es importante que pongamos <code>break</code> al
        final de cada bloque, si no, se ejecutarán todos los bloques que vengan
        después del que ha cumplido la condición.
      </p>
      <p>
        En el último bloque que escribamos no hace falta poner{" "}
        <code>break</code>.
      </p>
      <div className="featured">
        <h3 id="prueba">Prueba</h3>

        <p>
          Cambia la manera de declarar la variable <code>day</code> y utiliza{" "}
          <code>const</code>. ¿Qué ocurre? ¿Sabrías explicar por qué?
        </p>

        <p>
          <strong>
            Entrega <code>R2-switch</code>
          </strong>
          : escribe la respuesta a ambas preguntas en el formulario de entrega
        </p>
      </div>
      <h3>Operadores lógicos</h3>
      <h4>
        <code>&&</code> (AND)
      </h4>
      <p>
        El operador <code>&amp;&amp;</code> nos permite comprobar si ambos
        operandos son <code>true</code>. Si ambos operandos son{" "}
        <code>true</code>, la expresión resolverá a <code>true</code>. Si uno de
        los operandos es <code>false</code>, la expresión resolverá a{" "}
        <code>false</code>.
      </p>
      <CodeJs>{`const age = 21;

if (age >= 18 && age <= 65) {
  console.log("El usuario es adulto y está en edad de trabajar");
}`}</CodeJs>
      <h4>
        <code>||</code> (OR)
      </h4>
      <p>
        El operador <code>||</code> nos permite comprobar si al menos uno de los
        operandos es <code>true</code>. Si uno de los operandos es{" "}
        <code>true</code>, la expresión resolverá a <code>true</code>. Si ambos
        operandos son <code>false</code>, la expresión resolverá a{" "}
        <code>false</code>.
      </p>
      <CodeJs>{`let day = "sábado";

if (day === "sábado" || day === "domingo") {
  console.log("¡Es fin de semana!");
}`}</CodeJs>
      <h4>
        <code>!</code> (NOT)
      </h4>
      <p>
        El operador <code>!</code> nos permite negar una expresión. Si la
        expresión es <code>true</code>, la expresión negada resolverá a{" "}
        <code>false</code>. Si la expresión es <code>false</code>, la expresión
        negada resolverá a <code>true</code>.
      </p>
      <CodeJs>{`const isAdult = true;

if (!isAdult) {
  console.log("El usuario es menor de edad");
}`}</CodeJs>
    </>
  );
};

export default Challenge2Conditionals;
