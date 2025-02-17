const Challenge3PlayingGit: React.FC = () => {
  return (
    <>
      <h2>Jugando con Git</h2>
      <p>
        En este ejercicio vamos a entrenar los comandos de Git. Crea un
        repositorio remoto en tu cuenta de GitHub que se llame{" "}
        <code>r3-git</code>.
      </p>
      <p>
        Recuerda del apartado anterior que para hacer un commit siempre hay que
        hacer dos pasos.
      </p>
      <p>
        Haz todos los pasos lanzando comandos desde la terminal y entrega una
        captura de pantalla de cada paso.
      </p>
      <ol>
        <li>Crea un proyecto nuevo y ábrelo desde el Code.</li>
        <li>Inicializa un repositorio de Git dentro del proyecto.</li>
        <li>Crea un archivo README.md y añade un título y una descripción.</li>
        <li>
          Crea un archivo <code>package.json</code> lanzando este comando:{" "}
          <code>npm init -y</code>.
        </li>
        <li>
          Haz un commit con esos dos archivos y el mensaje &quot;Initial
          commit&quot;.
        </li>
        <li>
          Crea una carpeta llamada <code>src</code> y dentro de ella un archivo
          llamado <code>index.ts</code>. Añade código TypeScript en su interior.
        </li>
        <li>
          Modifica el archivo <code>README.md</code> añadiendo una lista de
          tareas pendientes.
        </li>
        <li>
          Haz un commit sólo con el archivo de TypeScript y el mensaje &quot;Add
          main TypeScript file&quot;.
        </li>
        <li>
          Ahora haz un commit con la modificación del README y el mensaje
          &quot;Add tasks to README&quot;.
        </li>
        <li>
          Comprueba en Git Graph el log de tu repositorio (esto no es por
          comandos).
        </li>
        <li>Conecta tu repositorio local con tu repositorio remoto.</li>
        <li>Sube tus cambios al repositorio remoto.</li>
      </ol>
      <h3 id="entrega-r3-git">
        Entrega <code>R3-git</code>
      </h3>
      <p>Presenta las capturas en un zip y la URL del repo.</p>
    </>
  );
};

export default Challenge3PlayingGit;
