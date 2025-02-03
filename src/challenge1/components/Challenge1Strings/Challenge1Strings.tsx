import CodeJs from "@components/CodeJs/CodeJs";

const Challenge1Strings: React.FC = () => {
  return (
    <>
      <h2>Operaciones con strings</h2>
      <img
        src="/images/string.webp"
        alt="Una string con los caracteres separados"
      />
      <p>
        Los strings (o <em>cadenas</em>) son un tipo de valor que nos ofrece
        JavaScript para representar textos. Un string está compuesto por una
        secuencia de caracteres, y cada uno de estos caracteres tiene una
        posición en la cadena, empezando por la posición <code>0</code>.
      </p>
      <p>
        Por ejemplo, si tenemos la cadena <code>&quot;Hola&quot;</code>, el
        caracter <code>&quot;H&quot;</code> está en la posición <code>0</code>,
        el caracter <code>&quot;o&quot;</code> está en la posición{" "}
        <code>1</code>, el caracter <code>&quot;l&quot;</code> está en la
        posición <code>2</code> y el caracter <code>&quot;a&quot;</code> está en
        la posición <code>3</code>.
      </p>
      <div className="featured">
        <h3>¿Comillas simples o dobles?</h3>
        <p>
          En JavaScript podemos usar tanto comillas simples como dobles para
          delimitar una cadena. No hay diferencia entre ellas, pero es
          importante <strong>ser consistente</strong> y{" "}
          <strong>
            usar siempre el mismo tipo de comillas dentro de un mismo proyecto
          </strong>
          .
        </p>
        <p>
          Cuando un proyecto dura muchos meses y hay muchas personas trabajando
          en él, es muy difícil garantizar que todo el mundo utiliza el mismo
          tipo de comillas. Es por esta razón que vamos a usar una herramienta
          que garantiza que las comillas son siempre del mismo tipo. Esta
          herramienta se llama <strong>Prettier</strong> y es un{" "}
          <strong>formateador</strong>, y tienes una extensión en tu VS Code que
          la lleva integrada.
        </p>
        <p>
          Por defecto, Prettier viene configurado para usar comillas dobles. Si
          quieres cambiarlo a comillas simples, puedes hacerlo en el archivo{" "}
          <code>.editorconfig</code> que encontrarás en la carpeta raíz del
          proyecto. Este archivo nos sirve para configurar Prettier.
        </p>
        <p>
          JavaScript nos ofrece un tercer tipo de delimitador, las comillas
          invertidas o <strong>backticks</strong> (<code>`</code>). No
          sustituyen a las dos anteriores, sino que tienen otro uso: nos
          permiten escribir expresiones de JavaScript dentro de un string:
        </p>
        <CodeJs>{`const name = "Julia";
console.log(\`¡Hola, \${name}!\`);

const age = 30;
console.log(
  \`La usuaria se llama \${name} y tiene \${age} años. Dentro de 10 años tendrá \${
    age + 10
  } años.\`,
);`}</CodeJs>
        <p>
          A un string delimitado por backticks se le llama{" "}
          <strong>template literal</strong>.
        </p>
      </div>
      <h3>Acceder a un caracter</h3>
      <p>
        Para acceder a un caracter concreto de una cadena, podemos hacerlo a
        partir de su posición. Tenemos tres formas de hacerlo:
      </p>
      <ul>
        <li>
          Usando corchetes <code>[]</code> y la posición del caracter que
          queremos acceder.
        </li>
        <li>
          Usando el método <code>charAt()</code> y la posición del caracter que
          queremos acceder.
        </li>
        <li>
          Usando el método <code>at()</code> y la posición del caracter que
          queremos acceder.
        </li>
      </ul>
      <CodeJs>{`let filmTitle = "Kung-fu Panda";

console.log(filmTitle[0]); // K
console.log(filmTitle.charAt(0)); // K
console.log(filmTitle.at(0)); // K`}</CodeJs>
      <p>
        El método <code>at()</code> es el más moderno y tiene una diferencia
        clave con los otros dos: nos permite usar posiciones negativas para
        acceder a los caracteres desde el final de la cadena. Por ejemplo, si
        queremos acceder al último caracter de la cadena, podemos hacerlo con{" "}
        <code>-1</code>.
      </p>
      <CodeJs>{`let filmTitle = "Kung-fu Panda";

console.log(filmTitle[filmTitle.length - 1]); // a
console.log(filmTitle.charAt(filmTitle.length - 1)); // a
console.log(filmTitle.at(-1)); // a`}</CodeJs>
      <p>
        ¿Sabías en JavaScript no existe un tipo de dato <code>char</code> o{" "}
        <code>character</code> como sí tienen otros lenguajes? Los caracteres
        son simplemente strings de longitud 1, por tanto cuando obtengas un
        caracter podrás hacer con él todo lo que puedes hacer con cualquier
        string.
      </p>
      <h3>Longitud de una cadena</h3>
      <p>
        Para saber la longitud de una cadena, es decir, cuántos caracteres
        tiene, podemos usar la propiedad <code>length</code>.
      </p>
      <CodeJs>{`let filmTitle = "Kung-fu Panda";

console.log(
  "El título de la película tiene " + filmTitle.length + " caracteres.",
); // El título de la película tiene 13 caracteres.
`}</CodeJs>
      <div className="featured">
        <h3>Propiedades y métodos</h3>

        <p>
          Los strings tienen una <strong>propiedad</strong> llamada{" "}
          <code>length</code>, que apunta a la longitud de la cadena. Veremos
          que cada tipo de datos tiene sus propias propiedades.
        </p>

        <p>
          Los strings también tienen <strong>métodos</strong>, que son acciones
          que podemos realizar con ellos. Veremos también que cada tipo de datos
          tiene sus propios métodos.
        </p>

        <p>
          En JavaScript, a las propiedades y a los métodos se accede con un
          punto <code>.</code> seguido del nombre de la propiedad o del método.
          Hay otra manera de acceder, pero es menos común y la veremos más
          adelante.
        </p>
      </div>
      <h3>Concatenar cadenas</h3>
      <p>
        Ya conoces el operador <code>+</code>, que como hemos visto es un
        operador sobrecargado. Cuando alguno de los dos operandos es de tipo
        string, el operador no va a sumar sino a concatenar (unir strings).
      </p>
      <CodeJs>{`const dogName = "Coco";
const dogAge = 3;

console.log(
  "Mi perro se llama " +
    dogName +
    " y tiene " +
    dogAge +
    " años. Su nombre tiene " +
    dogName.length +
    " letras.",
); // Mi perro se llama Coco y tiene 3 años. Su nombre tiene 4 letras.`}</CodeJs>
      <p>
        Pero también hemos aprendido que usando template literals se pueden
        incluir expresiones de JavaScript dentro de un string. Esto nos permite
        hacer la concatenación de una manera más legible.
      </p>
      <CodeJs>{`const dogName = "Coco";
const dogAge = 3;

console.log(
  \`Mi perro se llama \${dogName} y tiene \${dogAge} años. Su nombre tiene \${dogName.length} letras.\`,
); // Mi perro se llama Coco y tiene 3 años. Su nombre tiene 4 letras.`}</CodeJs>
      <h3>Transformar a mayúsculas y a minúsculas</h3>
      <p>
        Los strings tienen dos métodos que nos permiten transformarlos a
        mayúsculas o a minúsculas: <code>toUpperCase()</code> y{" "}
        <code>toLowerCase()</code>.
      </p>
      <CodeJs>{`const filmTitle = "Kung-fu Panda";

console.log(filmTitle.toUpperCase()); // KUNG-FU PANDA
console.log(filmTitle.toLowerCase()); // kung-fu panda`}</CodeJs>
      <h4 id="entrega-r1-initial">
        Entrega <code>R1-initial</code>
      </h4>
      <p>
        Ahora que sabes concatenar strings y convertir de mayúscula a minúscula
        y viceversa, completa este programa para que imprima el nombre pero con
        la primera letra en mayúscula. Usa template literals para concatenar.
      </p>
      <CodeJs>{`const name = "julia";

// Escribe tu código aquí`}</CodeJs>
      <h3>Dividir un string</h3>
      <p>
        El método <code>split()</code> nos permite dividir un string en un array
        de strings, usando un separador que le pasamos como argumento.
      </p>
      <CodeJs>{`const studentNames = "Antonia, Julio, María Jesús, Joan";

console.log(studentNames.split(", ")); // ["Antonia", "Julio", "María Jesús", "Joan"]
`}</CodeJs>
      <p>
        Un array es un tipo de valor que nos ofrece JavaScript para representar{" "}
        <strong>una colección de valores</strong>. Los veremos más adelante en
        profundidad.
      </p>
      <h3>Saber si un string contiene otro string</h3>
      <p>
        El método <code>includes()</code> nos permite saber si un string
        contiene otro string. Devuelve <code>true</code> si lo contiene y{" "}
        <code>false</code> si no.
      </p>
      <CodeJs>{`const synopsis =
  "Kung-fu Panda es una película de animación. Narra la historia de un oso panda que sueña con ser un maestro de kung-fu.";

console.log(synopsis.includes("panda")); // true
console.log(synopsis.includes("oso")); // true
console.log(synopsis.includes("oso panda")); // true
console.log(synopsis.includes("oso panda rojo")); // false
`}</CodeJs>
      <h3>Reemplazar un string por otro</h3>
      <p>
        Los métodos <code>replace()</code> y <code>replaceAll()</code> nos
        permiten reemplazar un string por otro. El primero reemplaza solo la
        primera ocurrencia, y el segundo todas las ocurrencias.
      </p>
      <CodeJs>{`const summary =
  "Kung-fu Panda es una película de animación. Narra la historia de un oso panda que sueña con ser un maestro de kung-fu. El oso panda finalmente se convierte en el maestro de kung-fu.";

let newSummary = summary.replace("Kung-fu Panda", "Kung-fu Panda 2");

console.log(newSummary); // Kung-fu Panda 2 es una película de animación. Narra la historia de un oso panda que sueña con ser un maestro de kung-fu. El oso panda finalmente se convierte en el maestro de kung-fu.

newSummary = summary.replaceAll("oso panda", "panda");

console.log(newSummary); // Kung-fu Panda es una película de animación. Narra la historia de un panda que sueña con ser un maestro de kung-fu. El panda finalmente se convierte en el maestro de kung-fu.
`}</CodeJs>
    </>
  );
};

export default Challenge1Strings;
