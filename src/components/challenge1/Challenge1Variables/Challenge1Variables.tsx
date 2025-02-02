import { Link } from "react-router";
import CodeJs from "../../CodeJs/CodeJs";

const Challenge1Variables: React.FC = () => {
  return (
    <>
      <h2>Variables</h2>
      <p>
        Los programas consisten en el fondo en ir procesando{" "}
        <strong>datos</strong>. Datos que muestran al usuario, datos que se
        piden al usuario, datos que se procesan, datos que se utilizan para
        tomar decisiones... en programación, a estos datos les llamamos{" "}
        <strong>valores</strong>.
      </p>
      <p>
        En JavaScript hay diferentes <strong>tipos</strong> de valores. Vamos a
        empezar por los básicos:
      </p>
      <ul>
        <li>
          Tipo <strong>number</strong> (para cantidades): <code>42</code>,{" "}
          <code>3.14</code>, <code>-1</code>, <code>0</code>
        </li>
        <li>
          Tipo <strong>string</strong> (para textos):{" "}
          <code>&quot;hola, buenos días&quot;</code>,{" "}
          <code>&#39;Torrevieja del Condado&#39;</code>,{" "}
          <code>&quot;42&quot;</code>
        </li>
        <li>
          Tipo <strong>boolean</strong> (para valores de verdad o falsedad):{" "}
          <code>true</code>, <code>false</code>
        </li>
      </ul>
      <p>
        En el código, a veces escribiremos directamente estos valores, pero
        generalmente vamos a querer darles un nombre para poder referirnos a
        ellos más fácilmente. A estos nombres les llamamos{" "}
        <strong>variables</strong>.
      </p>
      <p>
        Una <strong>variable</strong> es un nombre que se le da a un valor para
        poder referirse a él más fácilmente. Aquí tienes varios ejemplos:
      </p>
      <CodeJs>{`const age = 42; // La variable age apunta al valor de tipo number 42
const lastName = "García"; // La variable lastName apunta al valor de tipo string "García"
const isStudent = true; // La variable isStudent apunta al valor de tipo boolean true
`}</CodeJs>
      <p>
        En esas tres líneas hemos creado (<strong>declarado</strong>) tres
        variables y a cada una le hemos <strong>asignado</strong> un valor. La
        palabra <code>const</code> es una <strong>palabra reservada</strong> de
        JavaScript que se utiliza para <strong>declarar una variable</strong>.
        La palabra <code>const</code> significa que la variable no va a apuntar
        a otro valor.
      </p>
      <p>
        En JavaScript también puedes declarar variables con la palabra reservada{" "}
        <code>let</code>. Esto lo haremos cuando queramos que el valor de la
        variable pueda cambiar.
      </p>
      <CodeJs>{`let age = 42; // La variable age apunta al valor de tipo number 42
console.log("Tengo " + age + " años");

age = 43; // Cambiamos el valor de la variable age
console.log("Ahora tengo " + age + " años");
`}</CodeJs>
      <p>
        En el código anterior, hemos <strong>declarado</strong> la variable{" "}
        <code>age</code> y le hemos <strong>asignado</strong> el valor number
        42. Más adelante hemos <strong>reasignado</strong> a la misma variable{" "}
        <code>age</code> el valor number 43. Esto lo podemos hacer porque hemos
        declarado la variable con <code>let</code> y no con <code>const</code>.
      </p>
      <CodeJs>{`const age = 42;
console.log("Tengo " + age + " años");

age = 43;
console.log("Ahora tengo " + age + " años");`}</CodeJs>
      <p>
        Si intentas ejecutar el código anterior, te dará un error
        &quot;Assignment to constant variable&quot;. Esto es porque hemos
        declarado la variable <code>age</code> con <code>const</code> y no
        podemos reasignarle un valor.
      </p>
      <p>
        Al nombre de una variable también se le llama{" "}
        <strong>identificador</strong>.
      </p>
      <div className="featured">
        <h3>Términos</h3>
        <p>
          Tómate un momento para repasar algunos términos importantes que hemos
          visto, y que deberán empezar a formar parte de tu vocabulario como
          developer:
        </p>
        <ul>
          <li>
            <strong>Valor</strong>: un dato que se procesa en un programa.
          </li>
          <li>
            <strong>Tipo</strong>: la naturaleza de un valor, que determina cómo
            se procesa (no se puede hacer lo mismo con un número que con un
            texto).
          </li>
          <li>
            <strong>Variable</strong>: un nombre que se le da a un valor para
            poder referirse a él más fácilmente.
          </li>
          <li>
            <strong>Declarar</strong>: crear una variable.
          </li>
          <li>
            <strong>Asignar</strong>: darle un valor a una variable.
          </li>
          <li>
            <strong>Reasignar</strong>: cambiar el valor de una variable.
          </li>
          <li>
            <strong>Identificador</strong>: el nombre de una variable.
          </li>
          <li>
            <strong>Palabra reservada</strong>: una palabra que tiene un
            significado especial en el lenguaje de programación.
          </li>
          <li>
            <strong>Sentencia</strong>: una instrucción que le damos al
            ordenador.
          </li>
        </ul>
      </div>
      <p>
        Ten en cuenta siempre que un valor no es una variable, y una variable no
        es un valor. Cuando te encuentres <code>age = 23;</code>, puedes leerlo
        de varias maneras:
      </p>
      <ul>
        <li>
          A la variable <code>age</code> <strong>se le asigna</strong> el valor
          23.
        </li>
        <li>
          La variable <code>age</code> <strong>apunta</strong> al valor 23.
        </li>
        <li>
          La variable <code>age</code> <strong>vale</strong> 23.
        </li>
        <li>
          La variable <code>age</code> <strong>contiene</strong> el valor 23.
        </li>
      </ul>
      <p>
        Recuerda que para comprobar el valor de una variable siempre puedes usar{" "}
        <code>console.log</code> para imprimirlo por consola. Más adelante
        aprenderás una mejor manera de hacerlo, pero por ahora puedes usar ésta.
      </p>
      <h2>Nombres de variables</h2>
      <p>
        A la hora de darle nombre a una variable, hay que tener en cuenta varias
        reglas:
      </p>
      <ul>
        <li>
          En JavaScript usaremos <strong>camelCase</strong> para nombrar
          variables formadas por más de una palabra. Por ejemplo,{" "}
          <code>lastName</code>, <code>isStudent</code>,{" "}
          <code>numberOfChildren</code>.
        </li>
        <li>
          No se pueden utilizar <strong>palabras reservadas</strong> como
          nombres de variables. Por ejemplo, no podemos llamar a una variable{" "}
          <code>const</code> o <code>let</code>.
        </li>
        <li>
          El nombre de la variable siempre tiene que ser{" "}
          <strong>descriptivo</strong>. Cuando un developer lea el nombre de la
          variable, tiene que entender qué representa ese valor.
        </li>
        <li>
          El nombre de una variable <strong>no debe contener el tipo</strong>{" "}
          del valor. Por ejemplo, no es correcto llamar a una variable{" "}
          <code>numberAge</code> o <code>nameString</code>.
        </li>
        <li>
          Por lo general los valores van a representar algo del mundo real (una
          edad, un nombre de persona, un total de clientes, la longitud de un
          texto...). Por eso el nombre de la variable debe describir aquello que
          representa, y no el tipo de valor que almacena.
        </li>
        <li>
          Hay que evitar las abreviaturas. Si queremos que al mirar un
          identificador, un developer pueda saber qué representa, no podemos
          usar nombres que no se entiendan. Si llamamos a una variable{" "}
          <code>a</code> o <code>n</code>, no sabemos qué representa. No hay
          problema en la longitud del identificador, así que mejor llamar a una
          variable <code>numberOfChildren</code> que <code>numOfChild</code>.
        </li>
        <li>
          Si la variable apunta a un valor booleano, es buena práctica que el
          nombre de la variable empiece por <code>is</code>, <code>has</code> o
          equivalente, de manera que refleje una pregunta. Por ejemplo,{" "}
          <code>isStudent</code>, <code>hasChildren</code>.
        </li>
      </ul>
      <div className="featured">
        <h3>La complejidad cognitiva</h3>

        <p>
          En programación hay una serie de métricas importantes que debes
          conocer. Una de ellas es la <strong>complejidad cognitiva</strong>.
        </p>

        <p>
          La complejidad cognitiva de un fragmento de código mide la carga
          mental que supone para un developer entender ese código. Cuanto más
          complejo es un código, más difícil es entenderlo. Y cuanto más difícil
          es entenderlo, más probable es que contenga errores o más se tardará
          en encontrar un bug.
        </p>

        <p>
          Una de las maneras de reducir la complejidad cognitiva es usar nombres
          de variables descriptivos. Si una variable se llama{" "}
          <code>numberOfChildren</code>, no hace falta que pensemos mucho en qué
          representa. Si una variable se llama <code>n</code>, tendremos que
          estrujarnos el cerebro para saber qué representa.
        </p>
      </div>
      <h2 id="entrega-r1-variables">
        Entrega <code>R1-variables</code>
      </h2>
      <ol>
        <li>
          En este código tienes varias declaraciones de variables. Escribe, por
          cada variable:
          <ul>
            <li>El tipo de valor que almacena.</li>
            <li>
              Si el nombre es descriptivo y correcto, o debería llamarse de otra
              forma.
            </li>
          </ul>
          <CodeJs>{`const name = "Luis";
let age = 42;
const dog = true;
let numberOfChildren = 2;
const cnt = 15;
const lastname = "García";
let has_registered_boolean = false;
const mainColor = "#4f8902";
const i = 3;`}</CodeJs>
        </li>
        <li>
          Declara variables para almacenar los siguientes valores (asígnales el
          valor que quieras)
          <ul>
            <li>Una contraseña</li>
            <li>Una dirección de correo electrónico</li>
            <li>Un número de teléfono</li>
            <li>El nombre de un gato</li>
            <li>La edad de un perro</li>
            <li>Un color favorito</li>
            <li>Si el usuario tiene hermanos o no</li>
            <li>La cantidad de películas vistas</li>
          </ul>
        </li>
      </ol>
      <p>
        Ahora que ya has aprendido a trabajar con variables, vamos a continuar
        con una pieza importantísima:{" "}
        <Link to="/challenge1/calentando-motores-js/expresiones">
          las expresiones
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge1Variables;
