import { Link } from "react-router";
import CodeJs from "../../../components/CodeJs/CodeJs";

const Challenge2IterateArray: React.FC = () => {
  return (
    <>
      <h2>Recorrer un array</h2>
      <p>
        En JavaScript tenemos diferentes maneras de recorrer un array. Recuerda
        que para acceder a un valor dentro del array, usamos los corchetes y
        dentro escribimos una expresión que resuelva a la posición del valor.
      </p>
      <p>
        Si quiero acceder al cuarto valor de un array, accederé mediante{" "}
        <code>[3]</code>, pero si tengo una variable <code>position</code> que
        me va almacenando todas las posiciones, entonces podré escribir{" "}
        <code>[position]</code> y con eso accederé a todos los valores del
        array. Vamos a aprovechar esto para recorrer o iterar los arrays.
      </p>
      <h3>
        <code>for</code>
      </h3>
      <p>
        Vimos anteriormente que <code>for</code> me permite crear una variable
        de control que va cambiando su valor en cada iteración. Podemos usar
        esto para recorrer un array.
      </p>
      <CodeJs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

for (let position = 0; position < childrenNames.length; position++) {
  const childName = childrenNames[position];

  console.log(childName); // Aquí estamos imprimiendo cada nombre, pero podríamos hacer cualquier otra cosa con ellos
}`}</CodeJs>
      <p>
        Fíjate que estamos usando la propiedad <code>length</code> del array
        para saber cuántos elementos tiene. Esto es muy útil porque si cambiamos
        el array, no tendremos que cambiar el bucle.
      </p>
      <div className="featured">
        <h3>Propiedades y métodos</h3>

        <p>
          Una <strong>propiedad</strong> de algo es un valor asociado a ese
          algo. Así, una propiedad de un array es un valor asociado a ese array.
          Por ejemplo, la propiedad <code>length</code> de un array es un número
          que nos dice cuántos elementos tiene el array. La propiedad{" "}
          <code>hairColor</code> de una persona puede valer, por ejemplo,{" "}
          <code>"brown"</code>.
        </p>

        <p>
          Un <strong>método</strong> de algo es una acción que podemos realizar
          con ese algo. Así, un método de un array es una acción que podemos
          realizar con ese array. Por ejemplo, el método <code>push()</code> de
          un array nos permite añadir un elemento al final del array. El método{" "}
          <code>speak()</code> de una persona podría por ejemplo imprimir un
          mensaje en consola.
        </p>

        <p>
          <strong>propiedad</strong> ➡️ un valor
          <br />
          <strong>método</strong> ➡️ una acción
        </p>
      </div>
      <p>
        Aunque la estructura <code>for</code> nos sirve para iterar un array si
        la variable de control la asocio a la posición, hay otros métodos más
        apropiados para recorrer arrays.
      </p>
      <h3>
        <code>for...in</code>
      </h3>
      <p>
        El bucle <code>for...in</code> nos va a permitir recorrer un array
        simplemente declarando una variable de control para los índices o
        posiciones.
      </p>
      <CodeJs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

for (const position in childrenNames) {
  const childName = childrenNames[position];

  console.log(childName);
}`}</CodeJs>
      <h3>
        <code>for...of</code>
      </h3>
      <p>
        El bucle <code>for...of</code> es el más moderno y nos permite recorrer
        un array simplemente declarando una variable de control para los valores
        del array.
      </p>
      <CodeJs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

for (const childName of childrenNames) {
  console.log(childName);
}`}</CodeJs>
      <div className="featured">
        <h3>
          ¿<code>for...in`</code> o <code>`for...of`</code>?
        </h3>

        <p>
          La diferencia entre <code>for...in</code> y <code>for...of</code> es
          que el primero nos permite recorrer las posiciones del array y el
          segundo los valores del array. Si dentro del bloque de código que se
          repite vamos a necesitar la posición para algo, entonces usaremos{" "}
          <code>for...in</code>. En el resto de casos es mucho más simple y
          directo usar <code>for...of</code>.
        </p>

        <p>Aquí vemos un ejemplo donde necesitamos la posición:</p>

        <CodeJs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

for (const position in childrenNames) {
  const childName = childrenNames[position];

  console.log(\`El nombre \${childName} está en la posición \${position}\`);
}`}</CodeJs>
      </div>
      <h3>
        <code>forEach</code>
      </h3>
      <p>
        Los arrays tienen un método llamado <code>forEach</code> que nos permite
        recorrerlos. Sin haber visto las funciones no podemos entrar muy en
        detalles de cómo funciona, pero puedes empezar a usarlo.
      </p>
      <CodeJs>{`const childrenNames = ["Pablito", "Juanita", "Antoñito", "Pepita"];

childrenNames.forEach((childName) => {
  console.log(childName);
});`}</CodeJs>
      <h3 id="entrega-r2-recorrer-array">
        Entrega <code>R2-recorrer-array</code>
      </h3>
      <p>
        En el playground de TypeScript, declara una variable que almacene los
        siguientes nombres:
      </p>
      <ul>
        <li>Juan</li>
        <li>María Jesús</li>
        <li>Mateo</li>
        <li>Isabel</li>
        <li>Antonio José</li>
        <li>Marta</li>
      </ul>
      <p>
        Haz un programa que diga cuántos nombres compuestos hay en la lista.
      </p>
      <p>Entrega la URL del playground.</p>
      <p>
        Después de haberte peleado con esto, vamos a hacer un repaso de los
        métodos de arrays más importantes:{" "}
        <Link to="/challenge2/arrays/metodos-de-arrays/">
          Métodos de arrays
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2IterateArray;
