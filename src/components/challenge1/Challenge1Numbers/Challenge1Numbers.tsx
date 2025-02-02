import CodeJs from "../../CodeJs/CodeJs";

const Challenge1Numbers: React.FC = () => {
  return (
    <>
      <h2>Operaciones con numbers</h2>
      <img src="/images/numbers.webp" alt="Números" />
      <p>
        Los valores de tipo number son valores que representan números (valores
        con los que se pueden realizar operaciones matemáticas, como por ejemplo
        cantidades). En JavaScript, los números pueden ser enteros o decimales,
        y se pueden operar con ellos de muchas maneras.
      </p>
      <p>
        El tipo number sirve para representar números para operar con ellos
        matemáticamente. Por ejemplo, lo que nosotros llamamos &quot;número de
        teléfono&quot; lo representaremos con un string, no con un number. Un
        número de teléfono es una sucesión de dígitos, como el número del DNI,
        no es una cantidad ni un valor para realizar operaciones aritméticas con
        él.
      </p>
      <p>
        Cuando tengas dudas de si un valor debe ser un string o un number, hazte
        esta pregunta: ¿si hay un cero a la izquierda, el cero se tiene que
        quedar o tiene que desaparecer? Si se tiene que quedar, es un string. Si
        tiene que desaparecer, es un number.
      </p>
      <p>Ejemplos:</p>
      <CodeJs>{`const phoneNumber = "061"; // El 0 inicial no debe desaparecer
const dniNumber = "04294733"; // El 0 inicial no debe desaparecer
const pin = "0742"; // El 0 inicial no debe desaparecer

const age = 030; // El 0 inicial debe desaparecer
const price = 030.00; // El 0 inicial debe desaparecer`}</CodeJs>
      <h3>Operaciones aritméticas</h3>
      <p>
        Ya hemos visto las <strong>expresiones aritméticas</strong>, que
        consisten en operaciones que serán sustituidas por un único valor de
        tipo number:
      </p>
      <CodeJs>{`const myAge = 30;
const myNextAge = myAge + 1; // Expresión que será sustituida por el valor 31

const adultAge = 18;
const myAdultYears = myAge - adultAge; // Expresión que será sustituida por el valor 12`}</CodeJs>
      <p>
        No todas las operaciones donde se usan numbers van a resultar en un
        number. Aquí tenemos un ejemplo donde los numbers no se usan en una
        expresión aritmética, sino en una expresión lógica:
      </p>
      <CodeJs>{`const age = 30;
const adultAge = 18;

const isAdult = age >= adultAge; // Expresión lógica que será sustituida por el valor true
`}</CodeJs>
      <h3>Convertir entre string y number</h3>
      <p>
        A veces necesitaremos convertir un string a number o un number a string.
        Para convertir un string a number hay dos maneras, o con la función
        <code>Number()</code> o con el operador <code>+</code> delante del
        string. Por ejemplo, si queremos comprobar si una persona es mayor de
        edad, podemos hacerlo así:
      </p>
      <CodeJs>{`const age = "30";
const adultAge = 18;

const isAdult = Number(age) >= adultAge; // Convertimos el string "30" a number
`}</CodeJs>
      <CodeJs>{`const age = "30";
const adultAge = 18;

const isAdult = +age >= adultAge; // Convertimos el string "30" a number
`}</CodeJs>
      <h3>
        El método <code>toFixed()</code>
      </h3>
      <p>
        A veces necesitamos presentar al usuario un número, ya después de haber
        operado aritméticamente con él. En este caso a veces el número real no
        es exactamente igual que el que queremos presentar. Por ejemplo, si
        tengo un valor <code>14.99999999999</code> y quiero presentarlo con dos
        decimales, puedo usar el método <code>toFixed()</code>:
      </p>
      <CodeJs>{`const price = 14.99999999999;
console.log(price.toFixed(2)); // 15.00`}</CodeJs>
      <p>
        El método <code>toFixed()</code> nos devuelve un string, no un number.
        Es por eso que el resultado de <code>toFixed()</code> no nos sirve para
        seguir operando aritméticamente con él.
      </p>
      <h3>
        El objeto <code>Math</code>
      </h3>
      <p>
        JavaScript nos ofrece un objeto llamado <code>Math</code> que nos
        proporciona muchas funciones y constantes matemáticas. Haz la prueba,
        escribe <code>Math.</code> (fíjate en el punto) y espera a que VS Code
        te sugiera todas las propiedades y métodos que puedes usar.
      </p>
      <CodeJs>{`const price = 14.99;
console.log(Math.round(price)); // Redondeo al más cercano: 15
console.log(Math.floor(price)); // Redondeo siempre hacia abajo: 14
console.log(Math.ceil(price)); // Redondeo siempre hacia arriba: 15

const randomNumber = Math.random(); // Número aleatorio entre 0 y 1

const pi = Math.PI; // El número pi

const squareRoot = Math.sqrt(16); // Raíz cuadrada: 4

const minValue = Math.min(15, 5, 1, 8, 12); // 1
`}</CodeJs>
      <div className="featured">
        <h3>
          El valor <strong>NaN</strong>
        </h3>
        <p>
          En JavaScript hay un valor especial llamado <strong>NaN</strong> que
          significa "Not a Number". Este valor se obtiene cuando intentamos
          hacer una operación aritmética cuyo resultado no es un número válido.
          Por ejemplo, si intentamos dividir un número por cero, el resultado es{" "}
          <strong>NaN</strong>.
        </p>
        <CodeJs>const result = 1 / 0; // NaN</CodeJs>
        <p>
          El valor <strong>NaN</strong> es un valor de tipo number, pero no es
          un número válido. Por ejemplo, si intentamos sumar{" "}
          <strong>NaN</strong> a un número, el resultado es <strong>NaN</strong>
          .
        </p>
        <p>
          ¿Cómo comprobar si un valor es el valor NaN? Esto no te funcionará:
        </p>
        <CodeJs>{`const valueA = 1; 
const valueB = 0; 
const result = valueA / valueB; 
console.log(result === NaN); // false`}</CodeJs>{" "}
        <p>
          Con el método <code>Number.isNaN()</code>, que devuelve{" "}
          <code>true</code> o <code>false</code>.
        </p>
        <CodeJs>{`const valueA = 1; 
const valueB = 0; 
const result = valueA / valueB; 
console.log(Number.isNaN(result)); // true`}</CodeJs>{" "}
        <p>
          Nota:{" "}
          <strong>
            no uses <code>isNaN()</code>
          </strong>
          , es la forma antigua. Usa siempre <code>Number.isNaN()</code>.
        </p>
      </div>
    </>
  );
};

export default Challenge1Numbers;
