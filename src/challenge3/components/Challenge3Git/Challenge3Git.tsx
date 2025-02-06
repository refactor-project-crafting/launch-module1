import { Link } from "react-router";
import CodeBash from "../../../components/CodeBash/CodeBash";

const Challenge3Git: React.FC = () => {
  return (
    <>
      <h1>Reto 3-fase 2: Git</h1>
      <img src="/images/git.png" alt="Logotipo de Git" />
      <p>
        Ya has estado usando Git, seguramente sin saber muy bien lo que hacías.
        Vamos a entrar un poco en profundidad.
      </p>
      <h2>¿Qué es Git?</h2>
      <p>
        Git es un <strong>sistema de control de versiones</strong>. Esto
        significa que nos va a permitir registrar la evolución de los cambios en
        nuestro proyecto, de manera que quede un historial de los cambios que se
        han ido realizando en el código.
      </p>
      <p>
        Si mi proyecto se inició hace dos semanas, Git me permite consultar qué
        cambios ha ido sufriendo el código desde entonces, gracias a la lista de{" "}
        <strong>commits</strong> que se han ido realizando.
      </p>
      <p>
        El <strong>log</strong> de un proyecto es su lista de commits, mirando
        el log podemos ver qué cambios se han ido realizando, cuándo se han
        realizado y quién los ha realizado. El log se lee de abajo hacia arriba,
        siendo el commit más reciente el que está en la parte superior.
      </p>
      <figure className="picture">
        <img src="/images/git-log.png" alt="El log de un proyecto" />
        <figcaption>
          La extensión Git Graph mostrando el log de estos mismos materiales
        </figcaption>
      </figure>
      <p>
        Con la extensión <strong>Git Graph</strong> que tienes instalada en tu
        VS Code puedes visualizar el log de tu proyecto de manera gráfica.
      </p>
      <div className="featured">
        <h2>Git con comandos</h2>
        <p>
          Recuerda lo que dijimos en el primer reto acerca de cómo usar Git:{" "}
          <Link to="/challenge1/herramientas/configuracion-git/#cli-vs-gui">
            Configuración Git
          </Link>
        </p>
        <p>
          Nosotros nos vamos a comunicar con Git siempre a través de la{" "}
          <strong>línea de comandos</strong>. Vamos a usar Git Graph como
          excepción para poder ver el log de un proyecto de manera más visual.
          La manera de hacerlo con comandos sería ésta:
        </p>
        <CodeBash>git log</CodeBash>
        <p>
          <strong>Nota</strong>: Es posible que tras lanzar el comando anterior
          te quedes atrapado/a sin saber salir. Pulsa la tecla <code>q</code>{" "}
          (de <em>quit</em>) para salir del log.
        </p>
      </div>
      <h2>¿Y qué es un commit?</h2>
      <p>
        Un commit es una <strong>instantánea</strong> del estado de nuestro
        proyecto en un momento dado. Cada commit tiene un{" "}
        <strong>mensaje</strong> que describe qué cambios ha sufrido el código.
        El mensaje de un commit es muy importante, ya que nos va a permitir
        entender qué cambios se han realizado en cada momento.
      </p>
      <p>
        Cada vez que queramos agrupar una serie de cambios y registrarlos en el
        histórico del proyecto, haremos un commit.
      </p>
      <h2>¿Y cómo se hace un commit?</h2>
      <p>Un commit siempre se hace en dos pasos:</p>
      <ol>
        <li>
          <strong>Preparar los cambios</strong>: Antes de hacer un commit,
          debemos decirle a Git qué cambios queremos registrar. Esto se hace con
          el comando <code>git add</code>. Si queremos registrar todos los
          cambios que hemos hecho, usaremos <code>git add .</code>. Si queremos
          registrar solo algunos cambios, usaremos <code>git add</code> seguido
          del nombre del archivo que queremos registrar.
          <CodeBash>git add .</CodeBash>o
          <CodeBash>git add ts/index.ts</CodeBash>
        </li>
        <li>
          <strong>Hacer el commit</strong>: Una vez que hemos preparado los
          cambios, podemos hacer el commit con el comando{" "}
          <code>git commit</code>. A este comando le podemos pasar un mensaje
          que describa los cambios que hemos hecho.
          <CodeBash>git commit -m "Fix typo in main description"</CodeBash>
          Los cambios que hemos preparado con <code>git add</code> se
          registrarán en el commit que acabamos de hacer.
        </li>
      </ol>
      <h2>Reglas para describir los cambios de un commit</h2>
      <p>
        El mensaje de un commit debe ser <strong>descriptivo</strong>. Debe
        explicar qué cambios se han realizado en el código. No es necesario que
        sea muy largo, pero sí que sea suficientemente claro como para que
        cualquier persona que lea el log del proyecto pueda entender qué cambios
        se han realizado.
      </p>
      <p>
        Además tenemos que seguir un estilo consistente en todos los commits de
        un mismo proyecto. No podemos tener commits que empiecen con mayúscula y
        otros que empiecen con minúscula, o unos en inglés y otros en
        castellano, o diferentes tiempos verbales. Es importante acordar unas
        reglas para describir los cambios y seguirlas.
      </p>
      <p>
        Aquí tienes algunas reglas que vamos a pactar para escribir los mensaje
        de los commits en esta fase del curso:
      </p>
      <ul>
        <li>
          <strong>Empezar con mayúscula</strong>: Todos los mensajes de los
          commits deben empezar con mayúscula.
        </li>
        <li>
          <strong>Inglés</strong>: Todos los mensajes de los commits deben estar
          en inglés.
        </li>
        <li>
          <strong>Empezar con verbo en imperativo</strong>: Todos los mensajes
          de los commits deben empezar con un verbo en imperativo. Por ejemplo:
          &quot;Add&quot;, &quot;Fix&quot;, &quot;Change&quot;,
          &quot;Remove&quot;, &quot;Refactor&quot;, &quot;Update&quot;,
          &quot;Create&quot;, &quot;Delete&quot;, etc.
        </li>
      </ul>
    </>
  );
};

export default Challenge3Git;
