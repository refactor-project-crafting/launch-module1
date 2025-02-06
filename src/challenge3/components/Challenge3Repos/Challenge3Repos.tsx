import { Link } from "react-router";
import CodeBash from "../../../components/CodeBash/CodeBash";

const Challenge3Repos: React.FC = () => {
  return (
    <>
      <h2>Repositorios en Git</h2>
      <p>
        Siempre que desarrollemos un proyecto, ese proyecto va a tener un{" "}
        <strong>repositorio de Git</strong>. La información del repositorio (por
        ejemplo, la lista de commits) se almacena dentro de una carpeta oculta
        llamada <code>.git</code>. Esta carpeta no te aparecerá en el árbol de
        archivos del VS Code, está configurado para que no aparezca.
      </p>
      <p>
        Pregunta: ¿cómo puedes comprobar mediante la línea de comandos que
        tienes esa carpeta dentro de un proyecto?
      </p>
      <h3>Inicializar un repositorio</h3>
      <p>
        Cuando empezamos un proyecto desde cero, tenemos una carpeta vacía (o
        con archivos iniciales) y no estará la carpeta <code>.git</code>, porque
        aún no habrá repo inicializado. Para inicializar un repo, usamos el
        comando <code>git init</code>.
      </p>
      <CodeBash>git init</CodeBash>
      <p>
        Con eso aparecerá la carpeta <code>.git</code> y ya tendremos un
        repositorio de Git, por ahora sin commits.
      </p>
      <h3>Clonar un repositorio</h3>
      <p>
        Si en vez de empezar un proyecto desde cero, queremos empezar a trabajar
        en un proyecto que ya existe, podemos <strong>clonar</strong> el
        repositorio. Para ello usamos el comando <code>git clone</code> seguido
        de la URL del repositorio.
      </p>
      <CodeBash>{"git clone <url-del-repositorio>"}</CodeBash>
      <p>
        Esto nos creará una carpeta con todos los archivos del proyecto y la
        carpeta <code>.git</code> con la información del repositorio.
      </p>
      <p>
        En ambos casos estamos hablando del <strong>repositorio local</strong>,
        es decir, el que reside en tu máquina.
      </p>
      <div className="featured">
        <h3>
          ¿<code>git init</code> o <code>git clone</code>?
        </h3>
        <p>
          Muy fácil, hazte esta pregunta: ¿estás empezando un proyecto desde
          cero o estás empezando a trabajar en un proyecto que ya existe?
        </p>
        <ul>
          <li>
            Si estás empezando un proyecto desde cero, usa <code>git init</code>
            .
          </li>
          <li>
            Si estás empezando a trabajar en un proyecto que ya existe, usa{" "}
            <code>git clone</code>.
          </li>
        </ul>
      </div>
      <h2>Repositorios remotos</h2>
      <p>
        Hasta ahora hemos estado hablando del <strong>repositorio local</strong>
        . Pero Git nos permite trabajar con{" "}
        <strong>repositorios remotos</strong>, es decir, repositorios que están
        en un servidor remoto. Existen proveedores de repositorios remotos, los
        tres más importantes son <strong>GitHub</strong>,{" "}
        <strong>GitLab</strong> y <strong>Bitbucket</strong>. Durante el curso
        vamos a trabajar con <strong>GitHub</strong>.
      </p>
      <p>
        Un repositorio remoto nos sirve para compartir nuestro código con otras
        personas y así poder trabajar en equipo.
      </p>
      <h2>Añadir un repositorio remoto</h2>
      <p>
        Si tienes un proyecto que has empezado tú y has inicializado con{" "}
        <code>git init</code>, ese repo local no estará conectado con ningún
        repo remoto. Para conseguirlo, sigue los siguientes pasos:
      </p>
      <ol>
        <li>Ve a GitHub y crea un nuevo repositorio.</li>
        <li>Copia la URL del repositorio.</li>
        <li>
          En tu terminal, dentro de la carpeta de tu proyecto, ejecuta el
          siguiente comando:
        </li>
      </ol>
      <CodeBash>{"git remote add origin <url-del-repositorio>"}</CodeBash>
      <p>
        Con esto, tu repositorio local estará conectado con el repositorio
        remoto que acabas de crear. A partir de aquí podrás lanzar comandos para
        sincronizar tu repo local con el correspondiente repo remoto.
      </p>
      <p>
        Si has clonado un repo ya existente con <code>git clone</code>, entonces
        ya tendrás el repo remoto añadido. No tienes que lanzar el comando
        anterior.
      </p>
      <h3>Sincronizar con el repositorio remoto</h3>
      <p>
        Una vez que has añadido un repositorio remoto, puedes sincronizar tu
        repo local con el remoto. Para ello usamos el comando{" "}
        <code>git push</code>. Este comando sube los cambios que has hecho en tu
        repo local al repo remoto.
      </p>
      <CodeBash>git push origin main</CodeBash>
      <p>
        En este caso estamos subiendo los cambios de la rama <code>main</code>{" "}
        de nuestro repo local al repo remoto. Si tu rama principal se llama de
        otra manera, cámbialo en el comando.
      </p>
      <p>
        Si lo que queremos es traernos los cambios en la dirección opuesta, es
        decir, desde el repo remoto hasta el repo local, entonces usamos el
        comando <code>git pull</code>.
      </p>
      <CodeBash>git pull origin main</CodeBash>
      <h2>A jugar</h2>
      <p>
        Ahora te toca ponerte a jugar con los comandos de Git:{" "}
        <Link to="/challenge3/git/jugando-con-git/">Jugando con Git</Link>
      </p>
    </>
  );
};

export default Challenge3Repos;
