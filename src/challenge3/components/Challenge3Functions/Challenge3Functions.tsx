import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3Functions: React.FC = () => {
  return (
    <>
      <h1>Reto 3-fase 1: Funciones</h1>
      <img
        src="/images/function.png"
        alt="Una función con una entrada y una salida "
      />
      <p>
        Las funciones son una de las herramientas más potentes que tenemos en
        programación. Nos permiten <strong>reutilizar código</strong> y{" "}
        <strong>abstraer</strong> la lógica de nuestro programa. Vamos a ver qué
        significa eso.
      </p>
      <h2>Reutilizar código</h2>
      <p>
        Imagina que tienes un programa que necesita comprobar si una contraseña
        es correcta, basándose en 3 criterios: longitud mínima, presencia de
        números y presencia de mayúsculas. Si tienes que hacer esta comprobación
        en varios sitios de tu programa, acabarás teniendo código repetido:
      </p>
      <CodeTs>{`const userAPassword = "1234Abc";
const isPasswordAValid =
  password.length >= 8 &&
  /\\d/.test(password) &&
  password.toLowerCase() !== password;

const userBPassword = "5678Xyz";
const isPasswordBValid =
  password.length >= 8 &&
  /\\d/.test(password) &&
  password.toLowerCase() !== password;`}</CodeTs>
      <p>
        Hay un principio de programación que se llama <strong>DRY</strong> (
        <em>Don&#39;t Repeat Yourself</em>). Este principio me dice que no
        repita código, porque si el código está repetido y más tarde hay que
        cambiar o corregir algo, tendré que hacerlo en todos los sitios donde
        esté repetido y es probable que esto acabe con errores.
      </p>
      <p>
        En el código anterior, la triple comparación para ver si una contraseña
        es válida está escrita dos veces. Si más adelante hay que cambiar algo
        en esa comprobación, habrá que hacerlo en dos sitios.
      </p>
      <p>
        La solución para evitar el código repetido es encerrar la lógica en una
        función y <strong>llamar</strong> (o <strong>invocar</strong>) a esa
        función en los sitios donde necesite hacer la comprobación.
      </p>
      <CodeTs>{`const isPasswordValid = (password: string): boolean => {
  return (
    password.length >= 8 &&
    /\\d/.test(password) &&
    password.toLowerCase() !== password
  );
};

const userAPassword = "1234Abc";
const isPasswordAValid = isPasswordValid(userAPassword);

const userBPassword = "5678Xyz";
const isPasswordBValid = isPasswordValid(userBPassword);`}</CodeTs>
      <p>
        Fíjate que hemos escrito la lógica de la comprobación de la contraseña
        tan solo una vez. A partir de aquí, se puede llamar a la función{" "}
        <code>isPasswordValid</code> en todos los sitios donde necesitemos hacer
        la comprobación y esa triple comparación estará en un único sitio.
      </p>
      <h2>
        Funciones <em>query</em> y funciones <em>command</em>
      </h2>
      <p>Las funciones pueden tener dos tipos de comportamiento:</p>
      <ul>
        <li>
          Funciones <em>query</em>: Son funciones que devuelven un valor. Las
          invocamos para obtener un resultado. P.e.: &quot;Niño, tráeme un vaso
          de agua&quot;.
        </li>
        <li>
          Funciones <em>command</em>: Son funciones que no devuelven un valor.
          Las invocamos para que hagan algo. P.e.: &quot;Niño, friega el suelo
          de la cocina&quot;.
        </li>
      </ul>
      <h3>
        Ejemplos de funciones <em>query</em>
      </h3>
      <p>
        Fíjate que todas estas funciones tienen la palabra <code>return</code>{" "}
        en su interior.
      </p>
      <ul>
        <li>
          Una función que comprueba si una contraseña es válida:
          <CodeTs>{`const isPasswordValid = (password: string): boolean => {
  return (
    password.length >= 8 &&
    /\\d/.test(password) &&
    password.toLowerCase() !== password
  );
};`}</CodeTs>
          Esta función recibe una contraseña de tipo string y devuelve{" "}
          <code>true</code> o <code>false</code> dependiendo de si la contraseña
          es válida o no.
        </li>
        <li>
          Una función que calcula el área de un círculo:
          <CodeTs>{`const getCircleArea = (radius: number): number => {
  return Math.PI * radius ** 2;
};`}</CodeTs>
          Esta función recibe el radio de un círculo y devuelve el área del
          círculo.
        </li>
        <li>
          Una función que devuelve el nombre más largo de un array de nombres:
          <CodeTs>{`const getLongestName = (names: string[]): string => {
  const sortedNames = names.toSorted(
    (nameA, nameB) => nameB.length - nameA.length,
  );
  
  return sortedNames[0];
};`}</CodeTs>
          Esta función recibe un array de nombres y devuelve el nombre más
          largo.
        </li>
      </ul>
      <h3>
        Ejemplos de funciones <em>command</em>
      </h3>
      <p>
        Fíjate que ninguna de estas funciones tiene la palabra{" "}
        <code>return</code> en su interior.
      </p>
      <ul>
        <li>
          Una función que recibe un nombre y saluda por consola:
          <CodeTs>{`const greetPerson = (name: string): void => {
  console.log(\`Hello, \${name}!\`);
};`}</CodeTs>
          Esta función recibe un nombre e imprime un saludo por consola, sin
          devolver nada.
        </li>
        <li>
          Una función que recibe un número y lo imprime por consola si es par:
          <CodeTs>{`const printNumberIfEven = (number: number): void => {
  if (number % 2 === 0) {
    console.log(number);
  }
};`}</CodeTs>
          Esta función recibe un número y lo imprime por consola si es par, sin
          devolver nada.
        </li>
      </ul>
      <div className="featured">
        <h3>Nombrar funciones</h3>
        <p>
          Igual que con cualquier otra variable, el identificador de una función
          debe ser descriptivo y debe seguir las mismas reglas que ya conoces.
          Pero en el caso de las funciones vamos a añadir una regla nueva: ya
          que las funciones representan una acción, utiliza siempre{" "}
          <strong>verbo + sustantivo</strong>:
        </p>
        <ul>
          <li>
            <code>getCircleArea</code>
          </li>
          <li>
            <code>isPasswordValid</code>
          </li>
          <li>
            <code>getUsername</code>
          </li>
          <li>
            <code>sendEmail</code>
          </li>
          <li>
            <code>areSamePasswords</code>
          </li>
          <li>
            <code>sortGrades</code>
          </li>
        </ul>
      </div>
      <p>
        Ahora vamos a trabajar un concepto fundamental en programación:{" "}
        <Link to="/challenge3/funciones/caja-negra/">la caja negra</Link>.
      </p>
    </>
  );
};

export default Challenge3Functions;
