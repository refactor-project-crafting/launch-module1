import { Link } from "react-router";
import CodeJs from "../../CodeJs/CodeJs";

const Challenge1FirstProgram: React.FC = () => {
  return (
    <>
      <h2>Tu primer programa</h2>
      <p>
        Hay una tradición en el entorno de la programación que consiste en que
        el primer programa que escribes en un lenguaje de programación nuevo es
        un programa que muestra en pantalla la frase "¡Hola, mundo!".
      </p>
      <p>
        Estamos seguros de que esto ya lo has hecho previamente en tutoriales y
        cursos, así que vamos a ajustarnos más a la realidad que te espera.
      </p>
      <h2>El proyecto</h2>
      <p>
        Para crear un programa necesitarás crear archivos en tu disco duro. Los
        archivos tienen que estar organizados, así que para cada programa que
        desarrolles -a lo que llamamos un <em>proyecto</em>-, crea una carpeta
        nueva. Dentro de esa carpeta, guarda todos los archivos que necesites.
      </p>
      <p>
        No te preocupes si en este caso vamos a tener una carpeta sólo con un
        archivo. En el futuro, tus proyectos serán más grandes y tendrás que
        organizarlos bien.
      </p>
      <p>
        En tu escritorio crea una carpeta que se llame{" "}
        <code>crafting-202502</code>. Crea dentro una carpeta que se llame{" "}
        <code>hello-world</code>. Y dentro de esa carpeta, crea un archivo que
        se llame <code>index.js</code>. Ha sido fácil, ¿verdad? Bien, ahora
        borra esa carpeta <code>hello-world</code> y haz lo mismo pero desde una
        terminal. Haz una captura a los comandos que hayas utilizado e inclúyela
        en tu entrega.
      </p>
      <div className="featured">
        <h3>Nombres de archivos y carpetas</h3>
        <p>
          Apúntate en grande y en rojo e imprímelo en un A3 para colgar en la
          pared:{" "}
          <strong>
            cuando programes, no crees nombres de archivos o carpetas con
            espacios ni con acentos
          </strong>
          .
        </p>
        <p>
          Fíjate en el nombre de la carpeta que alberga tu proyecto:{" "}
          <code>hello-world</code>. Es un nombre compuesto por dos palabras,
          pero en vez de utilizar un espacio, hemos utilizado un guión medio (
          <code>-</code>). Hay diferentes convenciones para crear nombres con
          varias palabras sin usar espacio:
        </p>
        <ul>
          <li>
            <strong>kebab-case</strong>: todas las palabras en minúsculas y
            separadas por guiones medios. P.e.:{" "}
            <code>esto-se-pone-divertido</code>
          </li>
          <li>
            <strong>snake_case</strong>: todas las palabras en minúsculas y
            separadas por guiones bajos. P.e.:{" "}
            <code>esto_se_pone_divertido</code>
          </li>
          <li>
            <strong>camelCase</strong>: las palabras no van separadas y se pone
            en mayúscula la primera letra de cada palabra. Dependiendo de cómo
            se escriba la primera letra hay dos tipos,{" "}
            <strong>lowerCamelCase</strong> y <strong>UpperCamelCase</strong>{" "}
            (también conocida como <strong>PascalCase</strong>). P.e.:{" "}
            <code>estoSePoneDivertido</code> y <code>EstoSePoneDivertido</code>
          </li>
        </ul>
      </div>
      <h2>El editor</h2>
      <p>
        Una vez que has creado tu carpeta para un proyecto, ya puedes abrir
        Visual Studio Code para empezar a trabajar en él. Es importante que en
        el editor abras <strong>la carpeta del proyecto</strong>. Tienes varias
        maneras de hacerlo:
      </p>
      <ol>
        <li>
          Abre VS Code y arrastra la carpeta del proyecto a la ventana del
          editor.
        </li>
        <li>
          Abre VS Code, ve a <code>Archivo &gt; Abrir carpeta...</code> y
          selecciona la carpeta del proyecto.
        </li>
        <li>
          Abre una terminal y ve a la carpeta del proyecto. Una vez allí,
          escribe <code>code .</code> y pulsa Enter (el comando{" "}
          <code>code</code> abre VS Code y el punto le indica que abra la
          carpeta en la que estás).
        </li>
        <li>
          Si estás en Windows, haz clic con el botón derecho en la carpeta del
          proyecto y selecciona <code>Abrir con Code</code>.
        </li>
      </ol>
      <div className="featured">
        <h3>Comprobación</h3>

        <p>
          Es importante que compruebes que has abierto la carpeta que toca. Para
          ello, fíjate en el navegador de archivos del Code (a la izquierda) y
          mira si aparece el nombre de la carpeta del proyecto en mayúsculas.
          Además, la carpeta no debería aparecer dentro del listado de archivos,
          sino encabezándolo.
        </p>

        <figure className="picture">
          <img
            src="/images/folder-hello-world.png"
            alt="Carpeta hello-world marcada en mayúsculas"
            width="353"
          />
          <figcaption>
            Nombre de la carpeta del proyecto en mayúsculas
          </figcaption>
        </figure>

        <p>&nbsp;</p>

        <figure className="picture">
          <img
            src="/images/folder-hello-world-error.png"
            alt="Carpeta hello-world mal abierta"
            width="353"
          />
          <figcaption>
            La carpeta del proyecto no está en mayúsculas
            <br />y aparece dentro del árbol de carpetas y archivos
          </figcaption>
        </figure>
      </div>
      <h2>Programar para Node.js</h2>
      <p>
        Abre el archivo <code>index.js</code> y escribe el siguiente código:
      </p>
      <CodeJs>{`const name = "Luis";

const greeting = "¡Hola, " + name + "!";
console.log(greeting);`}</CodeJs>
      <p>
        Ejecuta el archivo en Node.js para comprobar que funciona correctamente.
      </p>
      <p>
        En este programa hay tres instrucciones (también llamadas{" "}
        <strong>sentencias</strong>):
      </p>
      <ol>
        <li>
          Crear una variable llamada <code>name</code> y asignarle el valor{" "}
          <code>&quot;Luis&quot;</code>.
        </li>
        <li>
          Crear una variable llamada <code>greeting</code> y asignarle un valor
          compuesto por la <strong>concatenación</strong> de:{" "}
          <code>&quot;Hola, &quot;</code>, el valor de la variable{" "}
          <code>name</code> y el carácter <code>!</code> (concatenar es unir
          textos).
        </li>
        <li>
          Imprimir por consola el valor de la variable <code>greeting</code>.
        </li>
      </ol>
      <p>
        El resultado debería ser que en la consola se imprima{" "}
        <code>¡Hola, Luis!</code>.
      </p>
      <p>
        Acabamos de utilizar una serie de conceptos que son fundamentales en la
        programación. Vamos a ir ampliándolos:{" "}
        <Link to="/challenge1/calentando-motores-js/variables">
          empecemos hablando de variables
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge1FirstProgram;
