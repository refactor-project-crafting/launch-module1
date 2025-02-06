import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3ArraysMethods: React.FC = () => {
  return (
    <>
      <h2>Métodos de arrays</h2>
      <p>
        Los arrays, como sabes, tienen métodos que nos permiten trabajar con sus
        elementos. Ya has trabajado con algunos métodos de arrays, pero ahora
        vamos a aprender nuevos métodos que son muy útiles y que usarás con
        mucha frecuencia.
      </p>
      <div className="featured">
        <h3>Recordemos qué es un método</h3>
        <p>
          La primera vez que te presentamos los métodos fue con los métodos de
          los strings. Decíamos entonces que los métodos de los strings son
          operaciones que puede realizar un string. En ese sentido, los métodos
          de los arrays son operaciones que puede realizar un array.
        </p>
        <p>
          Pero ahora también sabemos que{" "}
          <strong>los métodos son funciones</strong>. Y se les aplica todo lo
          que sabemos de las funciones en cuanto a parámetros, argumentos,
          retorno, expresiones de llamada, etc.
        </p>
        <p>
          Al final de cada método tendrás un pequeño ejercicio. Entrégalos todos
          juntos al final.
        </p>
      </div>
      <h3>
        <code>find()</code>
      </h3>
      <p>
        El método <code>find()</code> nos permite buscar en el array un elemento
        que cumpla una condición. La condición la pasamos en forma de función.
      </p>
      <p>
        Este método me devolverá el primer valor encontrado, y si no encuentra
        ninguno, me devolverá el valor <code>undefined</code>.
      </p>
      <CodeTs>{`const ages = [13, 3, 35, 26, 17];

const firstAdultAge = ages.find((age) => age >= 18); // Devuelve 35
const firstOldAge = ages.find((age) => age >= 60); // Devuelve undefined`}</CodeTs>
      <p>
        Fíjate que a <code>find()</code> le pasamos un valor, en este caso de
        tipo función, que escribimos como una expresión de función anónima. El
        método <code>find()</code> invocará a esta función por cada valor del
        array pasándole el propio valor como argumento. La función debe devolver
        un valor booleano, y <code>find()</code> devolverá el primer valor del
        array para el que la función devuelva <code>true</code>.
      </p>
      <p>
        Crea un array con nombres de mascotas y encuentra el primer nombre que
        tenga más de 5 caracteres.
      </p>
      <h3>
        <code>filter()</code>
      </h3>
      <p>
        El método <code>filter()</code> nos permite filtrar los elementos de un
        array que cumplan una condición. La condición la pasamos en forma de
        función. Se parece a <code>find()</code> en su sintaxis, pero mientras
        que <code>find()</code> nos devuelve el primer valor que cumple la
        condición, <code>filter()</code> nos devuelve{" "}
        <em>un nuevo array con todos los valores que cumplen la condición</em>.
      </p>
      <CodeTs>{`const ages = [13, 3, 35, 26, 17];

const adultAges = ages.filter((age) => age >= 18); // Devuelve [35, 26]`}</CodeTs>
      <p>
        Crea un array con números de teléfono con diferentes prefijos de país y
        obtén un nuevo array con los números que tienen el prefijo de España.
      </p>
      <h3>
        <code>some()</code>
      </h3>
      <p>
        El método <code>some()</code> nos permite saber si al menos uno de los
        elementos de un array cumple una condición. La condición la pasamos en
        forma de función. Es igual que <code>find()</code> en su sintaxis, pero
        mientras que <code>find()</code> nos devuelve el primer valor que cumple
        la condición, <code>some()</code> nos devuelve un valor booleano que
        indica si hay algún elemento que la cumple o no.
      </p>
      <CodeTs>{`const ages = [13, 3, 35, 26, 17];

const hasAdults = ages.some((age) => age >= 18); // Devuelve true
const hasNewBorns = ages.some((age) => age < 1); // Devuelve false`}</CodeTs>
      <p>
        Crea un array con passwords y comprueba si al menos uno de ellos tiene
        menos de 8 caracteres.
      </p>
      <h3>
        <code>every()</code>
      </h3>
      <p>
        El método <code>every()</code> nos permite saber si todos los elementos
        de un array cumplen una condición. La condición la pasamos en forma de
        función.
      </p>
      <p>
        Es igual que <code>some()</code> en su sintaxis, pero mientras que{" "}
        <code>some()</code> nos devuelve un valor booleano que indica si hay
        algún elemento que la cumple o no, <code>every()</code> nos devuelve un
        valor booleano que indica{" "}
        <strong>si todos los elementos la cumplen o no</strong>.
      </p>
      <CodeTs>{`const ages = [13, 3, 35, 26, 17];

const areAllAdults = ages.every((age) => age >= 18); // Devuelve false

const names = [
  "José Luis Argoicoechea Antúnez",
  "Antonia Carmen de los Laureles Benítez",
  "Berto Carlos de las Mercedes Cervantes",
];
const areAllNamesLong = names.every((name) => name.length > 20); // Devuelve true`}</CodeTs>
      <p>
        Crea un array con nombres de grupos musicales y comprueba si todos
        empiezan por mayúscula
      </p>
      <h3>
        <code>forEach()</code>
      </h3>
      <p>
        Ya vimos este método sin entrar en profundidad. Ahora que sabes que
        puedes pasar una función como argumento a otra función, vamos a
        repasarlo.
      </p>
      <p>
        El método <code>forEach()</code> nos permite recorrer un array y
        ejecutar una función por cada elemento del array. La función que le
        pasamos como argumento no devuelve nada, simplemente ejecuta una acción.
      </p>
      <CodeTs>{`const names = ["Luis", "Marta", "Juan", "Ana"];

names.forEach((name) => console.log(\`Bye \${name}!\`));`}</CodeTs>
      <p>
        El método <code>map()</code> nos permite crear un nuevo array a partir
        de otro array, donde cada elemento del nuevo array será uno del primero
        modificado. La modificación la pasamos en forma de función.
      </p>
      <CodeTs>{`const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((number) => number * 2); // Devuelve [2, 4, 6, 8, 10]

const names = ["Luis", "Marta", "Juan", "Ana"];
'const greetings = names.map((name) => \`Hola, \${name}\`); // Devuelve ["Hola, Luis", "Hola, Marta", "Hola, Juan", "Hola, Ana"]`}</CodeTs>
      <p>
        Importante:{" "}
        <strong>
          tanto <code>map</code> como <code>filter</code> me devuelven un nuevo
          array
        </strong>
      </p>
      <p>
        Crea un array con nombres de persona en minúscula y obtén un nuevo array
        con los mismos nombres, pero con la inicial en mayúscula.
      </p>
      <h3>
        <code>reduce()</code>
      </h3>
      <p>
        El método <code>reduce()</code> nos permite reducir un array a un único
        valor. La reducción la pasamos en forma de función.
      </p>
      <CodeTs>{`const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
); // Devuelve 15`}</CodeTs>
      <p>
        El método <code>reduce()</code> recibe dos argumentos: una función y un
        valor inicial. La función que le pasamos como primer argumento recibe
        dos parámetros: el acumulador y el valor actual. El acumulador es el
        valor que va acumulando el resultado de la operación, y el valor actual
        es el valor del array que está siendo procesado. El valor inicial que le
        pasamos como segundo argumento es el valor que tendrá el acumulador en
        la primera iteración.
      </p>
      <p>
        Crea un array con nombres de personas y obtén un string con todos los
        nombres concatenados.
      </p>
      <h3 id="entrega-r3-metodos-arrays-">
        Entrega <code>R3-metodos-arrays</code>
      </h3>
      <p>
        Entrega un zip con el archivo <code>.ts</code> que contenga los
        ejercicios de este apartado.
      </p>
    </>
  );
};

export default Challenge3ArraysMethods;
