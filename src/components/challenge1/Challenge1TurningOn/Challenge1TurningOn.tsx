import { Link } from "react-router";
import CodeCpp from "../../CodeCpp/CodeCpp";
import CodePython from "../../CodePython/CodePython";

const Challenge1TurningOn: React.FC = () => {
  return (
    <>
      <h1>Reto 1-fase 3: Calentando motores con JS</h1>
      <img src="/images/javascript.webp" alt="Logo de JavaScript" />
      <p>
        Ya tienes las herramientas necesarias para empezar a programar en
        JavaScript. Recuerda: utilizarás <strong>Visual Studio Code</strong>{" "}
        para escribir el código y <strong>un entorno de ejecución</strong> para
        ejecutarlo. Ya sabes que los dos entornos de ejecución que tienes son el
        browser y Node.js.
      </p>
      <h2>Pero... ¿qué es un programa?</h2>
      <p>
        En el apartado anterior le has dado una orden tanto al browser como a
        Node.js. La orden que les diste fue{" "}
        <code>console.log("¡Soy developer!")</code>.
      </p>
      <p>
        Un <strong>programa</strong> es un <strong>conjunto de órdenes</strong>{" "}
        que le pasamos a un entorno de ejecución para que las ejecute. Si en vez
        de simplemente darle la orden de imprimir ese mensaje, hubieras hecho lo
        siguiente, habrías escrito un programa:
      </p>
      <ol>
        <li>Preguntarle al usuario su nombre.</li>
        <li>Preguntarle al usuario sus apellidos.</li>
        <li>
          Imprimir por consola un mensaje de bienvenida con el nombre y los
          apellidos del usuario.
        </li>
      </ol>
      <h2>¿Qué es un lenguaje de programación?</h2>
      <p>
        Un <strong>lenguaje de programación</strong> es un{" "}
        <strong>conjunto de reglas y símbolos</strong> que nos permite escribir
        programas. Los lenguajes de programación son como idiomas: cada uno
        tiene sus propias reglas gramaticales y su propio vocabulario.
      </p>
      <p>
        Ejemplos de lenguajes de programación: JavaScript, Python, Ruby, Java,
        C#, C++, PHP, Swift, Kotlin, Go, Rust, TypeScript, etc.
      </p>
      <p>
        Los lenguajes de programación pueden ser <strong>de alto nivel</strong>{" "}
        o <strong>de bajo nivel</strong>. Los lenguajes de alto nivel son más
        parecidos al lenguaje natural humano (generalmente inglés), y los
        lenguajes de bajo nivel son más parecidos al lenguaje de la máquina y
        más difíciles de entender para el humano.
      </p>
      <p>
        Ejemplo de un programa con un lenguaje de alto nivel (Python) que pide
        el nombre y los apellidos al usuario y le da la bienvenida:
      </p>
      <CodePython>
        {`name = input('¿Cuál es tu nombre? ')
lastName = input('¿Cuáles son tus apellidos? ')
print(f'¡Hola, {name} {lastName}!')`}
      </CodePython>
      <p>Ahora el mismo programa con un lenguaje de bajo nivel (C++):</p>
      <CodeCpp>
        {`#include <iostream>
#include <string>

int main() {
    std::string firstName;
    std::string lastName;

    std::cout << "What is your first name? ";
    std::getline(std::cin, firstName);

    std::cout << "What are your last names? ";
    std::getline(std::cin, lastName);

    std::cout << "Hello, " << firstName << " " << lastName << "!" << std::endl;

    return 0;
}`}
      </CodeCpp>
      <p>
        El ejemplo de C++ es más difícil de entender para un humano porque está
        más cerca del lenguaje de la máquina, es de más bajo nivel.
      </p>
      <p>
        JavaScript es un <strong>lenguaje de alto nivel</strong>.
      </p>
      <h2>Lenguajes interpretados vs lenguajes compilados</h2>
      <p>
        No todos los entornos de ejecución entienden el código tal y como lo
        escribimos. En el caso de JavaScript, sus entornos de ejecución sí
        entienden el mismo código que escribimos, sin necesidad de modificarlo.
        A estos lenguajes se les llama <strong>lenguajes interpretados</strong>.
        El entorno de ejecución va a interpretar el código línea por línea y lo
        va a ir ejecutando. JavaScript es, por tanto, un{" "}
        <strong>lenguaje interpretado</strong>.
      </p>
      <p>
        Sin embargo, hay otros lenguajes cuyos entornos de ejecución no pueden
        ejecutar el código tal y como lo escribimos, ese código necesita de un
        proceso de traducción antes de poder ser ejecutado. A estos lenguajes se
        les llama <strong>lenguajes compilados</strong>. El proceso de
        traducción se llama <strong>compilación</strong>. Cuando trabajamos con
        un lenguaje compilado, siempre que queramos ver funcionando nuestro
        código, tendremos que pasar por un paso intermedio que es la
        compilación.
      </p>
      <p>
        Ejemplos de lenguajes interpretados: JavaScript, Python, Ruby, PHP, etc.
      </p>
      <p>
        Ejemplos de lenguajes compilados: C, C++, C#, Java, Rust, Go,
        TypeScript, etc.
      </p>
      <p>
        Fíjate que TypeScript es un lenguaje compilado, y nosotros vamos a
        programar en TypeScript, así que presta atención a los conceptos que
        vayan surgiendo relacionados con la compilación.
      </p>
      <div className="featured">
        <h3>Código fuente</h3>
        <p>
          Cuando se utiliza un lenguaje compilado, al código que los developers
          escribimos se le llama <strong>código fuente</strong>. El código
          fuente no se puede ejecutar, sino que necesita ser traducido a un
          <strong>código compilado</strong> para poder ser ejecutado.
        </p>
        <p>
          Ve acostumbrándote a esta división. Incluso en el caso de que
          programaras sólo en JavaScript (no va a ser tu caso, en breves daremos
          el salto a TypeScript y podrás programar en ambos lenguajes) también
          tendrías varias herramientas para transformar tu código fuente en otro
          código diferente, que será el que se ejecutará.
        </p>
        <p>
          Dentro de un proyecto, el código fuente se suele guardar en una
          carpeta llamada <code>src</code> (de <em>source</em>). El código
          compilado se suele guardar en una carpeta llamada <code>dist</code>{" "}
          (de <em>distribution</em>), aunque también podrás encontrar la carpeta
          del código compilado como <code>build</code>
          (la aplicación ya construida).
        </p>
        <figure className="picture">
          <img
            src="/images/carpetas.webp"
            alt="Carpetas de un proyecto con src y dist resaltadas"
            width="293"
          />
          <figcaption>
            Carpetas <code>src</code> y <code>dist</code> de estos mismos
            apuntes
          </figcaption>
        </figure>
      </div>
      <p>
        Es el momento de demostrar que estás capacitado/a para programar:{" "}
        <Link to="/challenge1/calentando-motores-js/tu-primer-programa">
          tu primer programa
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge1TurningOn;
