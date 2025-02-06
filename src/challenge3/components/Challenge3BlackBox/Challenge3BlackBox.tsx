import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3BlackBox: React.FC = () => {
  return (
    <>
      <h2>El concepto de caja negra</h2>
      <figure className="picture">
        <img src="/images/black-box.png" alt="Caja negra" />
        <figcaption>Las funciones vistas como una caja negra</figcaption>
      </figure>
      <p>
        El concepto de caja negra es muy importante en programación. Se refiere
        a la idea de que no necesitamos saber cómo funciona algo por dentro para
        poder usarlo. Por ejemplo, cuando usamos una función de JavaScript, no
        necesitamos saber cómo está implementada esa función para poder usarla.
        Solo necesitamos saber qué hace y cómo se usa.
      </p>
      <p>
        Imagina que estás desarrollando la validación de los campos de un
        formulario. Necesitas comprobar si un campo de nombre de usuario es
        válido. Puedes escribir una función que haga esa comprobación, pero no
        necesitas saber cómo está implementada esa función. Solo necesitas saber
        que si le pasas un nombre de usuario, te dirá si es válido o no.
      </p>
      <CodeTs>{`const username = "jrubio";

if (!isUsernameValid(username)) {
  console.log("El nombre de usuario no es válido");
}`}</CodeTs>
      <p>
        Fíjate que no vemos el código de la función <code>isUsernameValid</code>{" "}
        por dentro, pero eso no nos impide usarla. Lo único que debemos saber
        es:
      </p>
      <ul>
        <li>cómo se llama</li>
        <li>qué valores le tengo que enviar</li>
        <li>qué valor me va a devolver</li>
      </ul>
      <p>En este caso, sabemos:</p>
      <ul>
        <li>
          la función se llama <code>isUsernameValid</code>
        </li>
        <li>le tengo que enviar un nombre de usuario de tipo string</li>
        <li>
          me va a devolver un booleano indicando si el nombre de usuario es
          válido o no
        </li>
      </ul>
      <p>
        No tengo que saber más. Quizás esa función esté definida más arriba en
        el código, o en otro archivo, o la estoy importando de una librería
        externa. No importa, no necesito conocer su interior para poder usarla.
        Del mismo modo que no necesito saber cómo funciona el motor de un coche
        para poder conducirlo.
      </p>
      <div className="featured">
        <h3>Abstracción</h3>
        <p>
          Lo abstracto es lo contrario de lo concreto. Esconder un código en una
          función y darle un nombre es una forma de abstraer. Usaremos la
          función sin saber lo concreto, sin saber cómo está implementada su
          lógica interna.
        </p>
        <p>
          Si existe una función <code>getCircleArea</code>, no necesito conocer
          los detalles concretos de cómo se calcula el área de un círculo. Solo
          necesito saber que si le paso el radio de un círculo, me devolverá el
          área. Eso es abstracción. Nos abstraemos de los{" "}
          <strong>detalles de implementación</strong>.
        </p>
      </div>
      <h3>La interfaz de una función</h3>
      <p>
        En los primeros apartados del reto 1 hablamos del concepto{" "}
        <strong>interfaz</strong> (para hablar de interfaz gráfica, interfaz de
        usuario, interfaz de línea de comandos...). Definíamos interfaz como un
        punto de contacto entre dos partes.
      </p>
      <p>
        Cuando yo uso una función <code>getCircleArea</code>, voy a escribir su
        nombre, le voy a pasar un número y voy a recoger el número que me
        devuelve. Ésas son las tres cosas de la función con las que voy a tener
        contacto. No voy a tener contacto con el código interno (los detalles de
        implementación).
      </p>
      <p>
        La interfaz de una función es aquello que la función{" "}
        <strong>me expone</strong> para que la pueda usar:
      </p>
      <ul>
        <li>
          <strong>Nombre</strong>: cómo se llama la función
        </li>
        <li>
          <strong>Parámetros</strong>: qué valores le tengo que enviar
        </li>
        <li>
          <strong>Valor de retorno</strong>: qué valor me va a devolver
        </li>
      </ul>
      <p>Una interfaz siempre me esconde detalles:</p>
      <ul>
        <li>
          la interfaz gráfica de Windows me esconde todo el código de cómo
          funciona el sistema operativo
        </li>
        <li>
          la interfaz gráfica Git Graph me esconde todos los comandos de Git que
          se lanzan por debajo
        </li>
        <li>
          la interfaz de una función me esconde cómo está implementada esa
          función
        </li>
      </ul>
      <p>
        A la interfaz de una función también se le llama <strong>API</strong> (
        <em>Application Programming Interface</em>). Es aquello que la función
        ofrece al exterior para interactuar con ella.
      </p>
      <p>Ejemplos de descripción de API de funciones:</p>
      <ul>
        <li>
          <code>console.log</code>: le paso un valor y lo imprime por la consola
        </li>
        <li>
          <code>Math.random</code>: no le paso nada y me devuelve un número
          aleatorio
        </li>
        <li>
          <code>getAverageStudentsGrade</code>: le paso un array de estudiantes
          y me devuelve un número con la nota media
        </li>
        <li>
          <code>getTotalPrice</code>: le paso un array de precios y me devuelve
          un número con el precio total
        </li>
      </ul>
      <p>
        En ninguno de esos casos necesito conocer los detalles de implementación
        de cada función, sólo su interfaz.
      </p>
      <p>
        Si aún no lo entiendes bien, piensa en las funciones de JavaScript que
        usas normalmente. <code>console.log()</code>, <code>toUpperCase()</code>
        , <code>split()</code>, <code>sort()</code>, <code>at()</code>... no
        sabes cómo funcionan por dentro, cómo hacen lo que hacen, pero sabes
        cómo usarlas. Sabes que al llamarlas con ciertos parámetros te devuelven
        ciertos valores (query) o hacen algo (command).
      </p>
      <p>
        Pregunta: de las cinco funciones de JS nombradas, ¿cuáles son query y
        cuáles command?
      </p>
      <h3>Sintaxis de una función</h3>
      <p>Para crear una función debemos escribir:</p>
      <ul>
        <li>
          entre paréntesis, los parámetros que recibe, con anotaciones de tipo
        </li>
        <li>
          después de los paréntesis, anotación de tipo del valor de salida (si
          no devuelve nada, el tipo es <code>void</code>)
        </li>
        <li>
          una flecha (<code>=&gt;</code>)
        </li>
        <li>
          el cuerpo de la función, que es un bloque de código entre llaves
        </li>
      </ul>
      <p>Aquí tienes varios ejemplos:</p>
      <CodeTs>{`const getCircleArea = (radius: number): number => {
  // ...
};

const getAverageStudentsGrade = (students: Student[]): number => {
  // ...
};

const getLongestName = (nameA: string, nameB: string): string => {
  // ...
};

const isEmailValid = (email: string): boolean => {
  // ...
};

const greetPerson = (name: string): void => {
  // ...
};

const sendEmail = (email: string, subject: string, body: string): void => {
  // ...
};`}</CodeTs>
      <p>
        A esta sintaxis se le llama <strong>arrow syntax</strong>, porque
        utiliza la flecha <code>=&gt;</code>. No es la única forma de escribir
        una función, también tenemos la sintaxis clásica. Comprueba las
        diferencias:
      </p>
      <CodeTs>{`function getCircleArea(radius: number): number {
  // ...
}

function getAverageStudentsGrade(students: Student[]): number {
  // ...
}

function getLongestName(nameA: string, nameB: string): string {
  // ...
}

function isEmailValid(email: string): boolean {
  // ...
}

function greetPerson(name: string): void {
  // ...
}

function sendEmail(email: string, subject: string, body: string): void {
  // ...
}`}</CodeTs>
      Tanto en la sintaxis arrow como en la clásica, el bloque con el cuerpo de
      la función es exactamente igual. La diferencia está en la sintaxis de la
      definición de la función.
      <h3>Practica</h3>
      <p>
        De cara a familiarizarte con entender las funciones desde fuera, te
        vamos a listar una serie de funciones y tienes que escribir la interfaz
        de cada una de ellas. No escribas la implementación, en su lugar pon un
        comentario con puntos suspensivos. Por ejemplo:
      </p>
      <CodeTs>{`const getCircleArea = (radius: number): number => {
  // ...
};

const getAverageStudentsGrade = (students: Student[]): number => {
  // ...
};`}</CodeTs>
      <p>
        En el caso de las funciones query, TypeScript te dará un error porque no
        estarás devolviendo nada. En este ejercicio vamos a pasar por alto ese
        error (¡sólo ése!) para poder centrarnos en la API de las funciones.
      </p>
      <p>
        Vamos a ello, escribe la interfaz de las siguientes funciones usando la
        sintaxis de arrow functions:
      </p>
      <ul>
        <li>
          una función que recibe un número y devuelve <code>true</code> si es
          par y <code>false</code> si es impar
        </li>
        <li>
          una función que recibe dos números y devuelve el mayor de los dos
        </li>
        <li>una función que recibe un listado de edades y devuelve la media</li>
        <li>
          una función que recibe un listado de perros e imprime por consola sus
          nombres
        </li>
        <li>
          una función que recibe un listado de nombres y devuelve la longitud
          del nombre más largo
        </li>
        <li>
          una función que recibe un estudiante y devuelve si ha aprobado o no
        </li>
        <li>una función que recibe un gato y devuelve su raza</li>
        <li>
          una función que recibe un nombre de usuario y un password y loguea al
          usuario en la aplicación
        </li>
      </ul>
      <p>
        Y ahora escribe la interfaz de las siguientes funciones usando la
        sintaxis clásica:
      </p>
      <ul>
        <li>
          una función que recibe tres colores y devuelve el color resultante de
          su mezcla
        </li>
        <li>una función que recibe un número y devuelve su factorial</li>
        <li>
          una función que recibe un listado de estudiantes y les envía un correo
          de felicitación
        </li>
        <li>
          una función que recibe un listado de productos y devuelve el listado
          ordenado por precio
        </li>
        <li>
          una función que recibe un elefante y un país, y devuelve si es legal
          tenerlo como mascota
        </li>
        <li>
          una función que recibe unas coordenadas y lanza un dardo con somnífero
        </li>
      </ul>
      <div className="featured">
        <h3>La firma de una función</h3>
        <p>
          A la interfaz de una función también se le llama{" "}
          <strong>firma</strong>. Tienes, por tanto, tres maneras de referirte a
          la forma externa de una función:
        </p>
        <ul>
          <li>
            <strong>la interfaz</strong> de la función
          </li>
          <li>
            <strong>la API</strong> de la función
          </li>
          <li>
            <strong>la firma</strong> de la función
          </li>
        </ul>
      </div>
      <h3 id="entrega-r3-firmas">
        Entrega <code>R3-firmas</code>:
      </h3>
      <p>
        Entrega un archivo de TypeScript suelto con las firmas de las funciones
        que te hemos pedido. Sólo el archivo <code>.ts</code>.
      </p>
      <p>
        Vamos a trabajar más con la entrada y la salida de las funciones:{" "}
        <Link to="/challenge3/funciones/entrada-salida/">Entrada y salida</Link>
      </p>
    </>
  );
};

export default Challenge3BlackBox;
