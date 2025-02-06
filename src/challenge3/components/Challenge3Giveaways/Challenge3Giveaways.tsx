import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3Giveaways: React.FC = () => {
  return (
    <>
      <h1>Reto 3-fase 4: El sorteo</h1>
      <img src="/images/ruleta.png" alt="Una ruleta de sorteo" />
      <p>
        Estamos construyendo una aplicación para gestionar sorteos en redes
        sociales. Nos vendrá bien tu ayuda para terminar toda la lógica de
        tratamiento de los datos. Está aquí:{" "}
        <a
          href="https://github.com/refactor-project-crafting/launch-giveaways"
          target="_blank"
        >
          repo del proyecto
        </a>
      </p>
      <p>
        Aún no tenemos interfaz de usuario, mientras desde el departamento de
        producto se deciden si esto va a ser una web o una app móvil, nosotros
        tenemos el encargo de validar la lógica de negocio y la interacción con
        los diferentes tipos de usuarios, que son dos: administradores y
        usuarios normales. Así que estamos desarrollando el programa para usar
        por ahora desde la consola.
      </p>
      <div className="featured">
        <h3>Historias de usuario</h3>
        <p>
          Ya has visto que una de las maneras de describir lo que tiene que
          hacer la aplicación es desde el punto de vista del usuario. Hasta
          ahora todas las user stories que hemos visto empezaban por "Como
          usuario...". Las user stories empiezan siempre así porque puede haber
          diferentes tipos de usuarios, y la aplicación tendrá que comportarse
          de manera diferente según el tipo de usuario que esté interactuando
          con ella.
        </p>
        <p>
          En este caso vemos que tenemos user stories para un usuario
          administrador y user stories para un usuario normal.
        </p>
      </div>
      <h2>User stories</h2>
      <p>Como administrador:</p>
      <ul>
        <li>
          Quiero poder iniciar sesión en la aplicación con mis credenciales,
          para poder usarla.
        </li>
        <li>
          Quiero poder añadir un nuevo sorteo para que los usuarios puedan
          participar.
        </li>
        <li>
          Quiero poder ver todos los sorteos que hay, para conocer qué sorteos
          están dados de alta.
        </li>
        <li>
          Quiero poder eliminar un sorteo que ya no esté activo, para que no
          aparezca más en el listado.
        </li>
      </ul>
      <p>Como usuario:</p>
      <ul>
        <li>
          Quiero poder iniciar sesión en la aplicación con mis credenciales,
          para poder usarla.
        </li>
        <li>
          Quiero poder ver todos los sorteos que hay en la base de datos, para
          decidir en cuál me inscribo.
        </li>
        <li>
          Quiero poder inscribirme en un sorteo, para optar a ganar el premio.
        </li>
        <li>
          Quiero poder ver en qué sorteos me he inscrito, para comprobar mis
          inscripciones.
        </li>
      </ul>
      <h2>Notas sobre el código</h2>
      <p>
        Cada vez que vayas a crear una función, acuérdate de pensar primero en
        ella desde fuera, como si fuera una caja negra. Piensa si es una función
        tipo query o tipo command. Escribe primero la firma de la función, y
        luego ya el bloque de código de la implementación. Es obligatorio que
        anotes el tipo de la salida en todas las funciones.
      </p>
      <p>
        Recuerda la regla para nombrar funciones: verbo + sustantivo. Y si
        devuelve un booleano, que el verbo sea <code>is</code>, <code>has</code>{" "}
        o el que corresponda.
      </p>
      <p>
        Crea las funciones en el archivo <code>giveaways.ts</code>. Más adelante
        aprenderemos a organizar cada función en su archivo, pero por ahora
        todas las funciones que crees para este ejercicio estarán en el mismo
        archivo. Cada función debe estar precedida por la palabra{" "}
        <code>export</code>, para poder ser usada en otros archivos. Así:
      </p>
      <CodeTs>
        {"export const greetPerson = (person: Person): void => {"}
      </CodeTs>
      <p>
        Tienes una variable llamada <code>programData</code> que apunta a un
        objeto con datos de la aplicación. Está en el archivo{" "}
        <code>storage.ts</code>. Esta variable está exportada para que puedas
        usarla en otros archivos, y puedes tanto leer los valores de sus
        propiedades como modificarlos. Siempre que modifiques datos de este
        objeto, invoca a la función <code>saveData</code> para que se guarden
        los cambios en disco duro, y así permanezcan aunque vuelvas a ejecutar
        el programa.
      </p>
      <p>Contiene los siguientes datos:</p>
      <ul>
        <li>
          <code>isAdmin</code>: un valor que indica si el usuario que está
          usando la aplicación es administrador o no.
        </li>
        <li>
          <code>userEmail</code>: contendrá el email del usuario que inicia
          sesión en la aplicación.
        </li>
        <li>
          <code>giveaways</code>: contendrá un array con los sorteos que se han
          creado.
        </li>
        <li>
          <code>users</code>: contiene un array con los usuarios que se han
          registrado en la aplicación.
        </li>
      </ul>
      <p>
        Por último, hay líneas de código comentadas para que no se ejecuten,
        como aún no están todas las funciones te daría errores y no podrías
        compilar. En cada paso te indicaremos qué líneas tienes que descomentar
        para que funcione la task.
      </p>
      <h2 id="entrega-r3-sorteos-">
        Entrega <code>R3-sorteos</code>
      </h2>
      <p>
        Entrega la URL del repositorio de GitHub que contiene el código de este
        ejercicio.
      </p>
      <p>
        Aquí tienes el backlog del proyecto:{" "}
        <a href="/challenge3/app-sorteos/backlog">
          backlog de la aplicación de sorteos
        </a>
        .
      </p>
    </>
  );
};

export default Challenge3Giveaways;
