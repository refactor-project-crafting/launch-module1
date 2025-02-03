import CodeBash from "@components/CodeBash/CodeBash";

const Challenge1Git: React.FC = () => {
  return (
    <>
      <h2>Configuración de Git</h2>
      <p>
        Es muy probable que ahora mismo, tras instalar Git, no tengas ni la más
        remota idea de qué te has instalado. No te preocupes, ya irás viendo
        para qué sirve, pero por ahora vamos a configurarlo para que funcione
        correctamente.
      </p>
      <h3>CLI vs GUI</h3>
      <p>
        Git se puede utilizar de dos maneras: desde la línea de comandos (
        <strong>
          CLI o <em>Command Line Interface</em>
        </strong>
        ) o desde una interfaz gráfica (
        <strong>
          GUI o <em>Graphic User Interface</em>
        </strong>
        ). En este curso vamos a utilizar la CLI, te dará mucho más control y te
        ayudará a entender mejor cómo funciona Git.
      </p>
      <div className="featured">
        <h3>Interfaz</h3>
        <p>
          Ya ha aparecido previamente la palabra <em>interfaz</em> en estos
          materiales, ¿recuerdas? Decíamos que una interfaz es un punto de
          contacto. En el caso del Sistema Operativo, tenemos dos interfaces: la{" "}
          <strong>interfaz gráfica</strong> (ventanas, iconos, puntero, clic...)
          y la <strong>interfaz de línea de comandos</strong> (la terminal).
        </p>{" "}
        <p>
          Git también tiene dos interfaces: la <strong>interfaz gráfica</strong>{" "}
          (una aplicación con ventanas, botones, que te permite interactuar con
          Git mediante clicks del ratón) y la{" "}
          <strong>interfaz de línea de comandos</strong> (la terminal, que te
          permite interactuar con Git mediante comandos).
        </p>
        <p>
          Recuerda bien la palabra <strong>interfaz</strong>, es sumamente
          importante en programación. Su significado dependerá del contexto en
          que la usemos, pero siempre va a significar un punto de contacto entre
          dos partes.
        </p>
      </div>
      <h3>Comandos de Git</h3>
      <p>
        Todos los comandos de Git empiezan con éste: <code>git</code>. A
        continuación, se escribe el nombre del comando que queremos ejecutar, y
        después se añaden los argumentos que necesite el comando.
      </p>
      <p>
        Para configurar Git vamos a utilizar el comando <code>git config</code>.
        Nos permitirá establecer opciones de configuración del programa y
        también consultar las que ya están establecidas.
      </p>
      <h4>Los tres ámbitos de configuración</h4>
      <p>
        Cada opción de configuración de Git se puede establecer en tres ámbitos
        diferentes:
      </p>
      <ul>
        <li>
          <strong>Local</strong>: se aplica sólo a un proyecto concreto.
        </li>
        <li>
          <strong>Global</strong>: se aplica a todos los proyectos que hagas con
          tu usuario del Sistema Operativo
        </li>
        <li>
          <strong>System</strong>: se aplica a todos los usuarios del Sistema
          Operativo.
        </li>
      </ul>
      <p>Por ejemplo:</p>
      <CodeBash>
        {`git config --local user.name "Luis González" # Configura mi nombre paraun proyecto concreto 
git config --global user.name "Antonia Mistral" # Configura mi nombre para todos los proyectos de mi usuario del S.O.
git config --system user.name "Juan Luis Díaz" # Configura mi nombre para todos los usuarios del S.O.`}
      </CodeBash>
      <p>Analicemos el primero de los comandos anteriores:</p>
      <ul>
        <li>
          <code>git config</code>: es el comando de Git que nos permite
          establecer o consultar una opción de configuración del programa.
        </li>
        <li>
          <code>--local</code>: es un <strong>argumento</strong> que le estamos
          pasando al comando. Le indica que la opción de configuración que vamos
          a establecer o consultar se aplicará sólo a un proyecto concreto.
        </li>
        <li>
          <code>user.name</code>: es el{" "}
          <strong>nombre de la opción de configuración</strong> que queremos
          establecer o consultar. Esta opción concreta sirve para que Git
          almacene tu nombre.
        </li>{" "}
        <li>
          <code>"Luis González"</code>: es el <strong>valor</strong> que le
          estamos dando a la opción de configuración. En este caso, estamos
          diciendo que en este proyecto concreto, Git debe almacenar el nombre
          "Luis González".
        </li>
      </ul>
      <p>
        Como ahora mismo no tendrás ningún proyecto, sólo tiene sentido que
        configures Git a nivel global o de sistema.
      </p>
      <h2 id="entrega-r1-git">
        Entrega <code>R1-git</code>
      </h2>
      <ol>
        <li>Abre una terminal o consola.</li>
        <li>
          Configura tu nombre de usuario para Git a nivel global. Elige tu
          nombre y tu primer apellido.
        </li>
        <li>
          Configura tu dirección de correo electrónico para Git a nivel global.
          En este curso tiene que ser la misma que tienes vinculada a tu cuenta
          de GitHub (sólo en este curso, esto no es una condición de Git).
        </li>
        <li>
          Configura la opción <code>core.autocrlf</code>, establece su valor a
          <code>false</code> a nivel global.
        </li>
        <li>
          Lanza un comando para comprobar qué valores de configuración has
          establecido y haz captura tanto del comando como de la respuesta que
          te dé. Entrega la captura.
        </li>
      </ol>
    </>
  );
};

export default Challenge1Git;
