import { Link } from "react-router";

const Challenge1Tools: React.FC = () => {
  return (
    <>
      <h1>Reto 1-fase 2: Las herramientas del/la developer</h1>
      <img src="/images/tools.webp" alt="Portátil con herramientas alrededor" />
      <p>
        Para programar no necesitas mucho. Un editor de texto cualquiera y un
        navegador web son suficientes para empezar. Pero para dedicarse
        profesionalmente al desarrollo de software, vas a necesitar bastantes
        herramientas que te van a ir ayudando en cada etapa del proceso.
      </p>
      <p>
        En este reto vamos a instalar y configurar algunas de las herramientas
        que vas a necesitar en tu día a día como developer.
      </p>
      <h2>1. El browser</h2>
      <p>
        Lo más probable es que ya tengas uno instalado, así que no vamos a
        perder tiempo en esto. Eso sí, para el curso vamos a usar{" "}
        <strong>Chrome</strong> o cualquier otro navegador basado en{" "}
        <strong>Chromium</strong>, como <strong>Edge</strong> o{" "}
        <strong>Brave</strong>.
      </p>
      <p>
        El browser es una herramienta fundamental para el desarrollo web. No
        sólo es el lugar donde se ejecutan las aplicaciones que desarrollas,
        sino que también es el lugar donde puedes ver cómo se comporta tu
        aplicación en diferentes dispositivos, cómo se ve en diferentes
        navegadores, y cómo se comporta en diferentes situaciones.
      </p>
      <div className="featured">
        <h3>
          Las <i>Developer Tools</i>
        </h3>
        <p>
          Tu browser esconde una herramienta importantísima, o mejor dicho, un
          conjunto de herramientas: las <i>Developer Tools</i>. Con ellas puedes
          inspeccionar el código fuente de cualquier página web, modificarlo en
          tiempo real, ver cómo se comporta tu aplicación en diferentes
          dispositivos, y mucho más. Aprender a utilizarlas es fundamental para
          tu carrera como developer.
        </p>
        <p>
          Para abrirlas, pulsa <kbd>F12</kbd> o <kbd>Ctrl+Shift+I</kbd> en
          Windows, o <kbd>Cmd+Option+I</kbd> en macOS.
        </p>
      </div>
      <h2>2. El editor de texto o IDE</h2>
      <p>
        Para escribir código necesitas un editor de texto. El más utilizado en
        el <strong>stack tecnológico</strong> que vas a aprender es{" "}
        <strong>Visual Studio Code</strong>, de Microsoft. Es gratuito,
        multiplataforma y tiene una gran cantidad de extensiones que te van a
        ayudar a programar.
      </p>
      <p>
        Instala ahora el editor si no lo tienes ya. Si estás en un Windows,
        recuerda marcar las dos opciones de "Abrir con Code" cuando te lo
        pregunte.
      </p>
      <figure style={{ textAlign: "center" }}>
        <img
          src="/images/install-code.webp"
          alt="Asistente de instalación de Visual Studio Code en Windows"
          width="500"
        />
        <figcaption>Instalador de Visual Studio Code en Windows</figcaption>
      </figure>
      <div className="featured">
        <h3 className="stop">STOP</h3>
        <p>
          Tómate un rato para instalar las extensiones necesarias para el curso
          y para configurar el editor:{" "}
          <Link to="/challenge1/herramientas/configuracion-vs-code/">
            configuración del VS Code
          </Link>
          .
        </p>
      </div>
      <h2>3. Git</h2>
      <figure className="picture">
        <img src="/images/git-diff.webp" alt="Comandos de Git" width="500" />
        <figcaption>Comandos de Git</figcaption>
      </figure>
      <p>
        Git es un <strong>sistema de control de versiones</strong> que te va a
        permitir llevar un registro de los cambios que haces en tu código. Hoy
        en día es una herramienta imprescindible para cualquier developer. La
        usarás mucho durante el curso y en tu vida profesional.
      </p>
      <p>
        Instala Git desde{" "}
        <Link to="https://git-scm.com/" target="_blank">
          su página oficial
        </Link>
        . Cuando lo estés instalando, asegúrate de que el editor por defecto
        para Git es Visual Studio Code. El resto de opciones las puedes dejar
        como vienen por defecto.
      </p>
      <p>
        ¿Sabes cómo se configura Git? Por consola 🤓 . Aquí tienes los pasos
        para configurarlo:{" "}
        <Link to="/challenge1/herramientas/configuracion-git/">
          Configuración de Git
        </Link>
      </p>
      <h2>4. Node.js</h2>
      <figure className="picture">
        <img src="/images/node-js.webp" alt="Logo de Node.js" width="500" />
      </figure>
      <p>
        Anteriormente en los materiales hablamos de dos programas que tienen la
        capacidad de <strong>ejecutar JavaScript</strong>: uno de ellos es el
        browser, y el otro es <strong>Node.js</strong>. Este último es un
        entorno de ejecución de JavaScript que te va a permitir ejecutar código
        JavaScript en tu ordenador pero fuera del browser.
      </p>
      <p>
        Ve a la página oficial de Node.js, verás que hay dos versiones para
        instalar: la versión LTS (<em>Long Term Service</em>) y la versión más
        nueva. Instala la versión más actual.
      </p>
      <p>
        Una vez instalado, abre una terminal y escribe un comando para comprobar
        si se ha instalado correctamente. ¿Sabes qué comando tienes que
        escribir?
      </p>
      <div className="featured">
        <h3>Achtung!</h3>
        <p>
          Si tu ordenador se ha utilizado previamente para programar, es posible
          que ya tengas instalado Node.js. En ese caso,{" "}
          <strong>es importante que compruebes la versión</strong>. Si la
          versión que tienes instalada no es la más nueva, actualízala. Tener la
          última versión es un requisito para el curso.
        </p>
        <small>
          Si por alguna razón debes tener instalada alguna versión más antigua,
          utiliza <code>nvm</code> o cualquier otro gestión de versiones de Node
        </small>
      </div>
      <h2>Ahora que tienes Node.js y un browser</h2>
      <p>
        Ya tienes instalados en tu ordenador dos programas que son capaces de
        ejecutar JavaScript. Haz la prueba:
      </p>
      <ul>
        <li>
          En el browser, abre las Developer Tools, ve a la pestaña "Consola" y
          escribe <code>console.log("¡Soy developer!");</code>. Verás que se
          imprime el mensaje en la consola. Eso significa que le has dado una
          instrucción al browser escrita en JavaScript, y el browser la ha
          ejecutado.
        </li>
        <li>
          En una terminal, escribe <code>node</code> y pulsa Enter. Verás que se
          abre un intérprete de JavaScript en la terminal. Escribe
          <code>console.log("¡Soy developer!");</code> y pulsa Enter. Verás que
          se imprime el mensaje en la terminal. Eso significa que le has dado
          una instrucción a Node.js escrita en JavaScript, y Node.js la ha
          ejecutado.
        </li>
      </ul>
      <p>
        <div className="featured">
          <h3>El stack MERN</h3>
          <p>
            Hablamos de <strong>stack tecnológico</strong> (pila de tecnologías)
            para referirnos a un conjunto de tecnologías que se utilizan juntas
            para desarrollar aplicaciones. Uno de los stacks más usados en web
            development, y el que vas a aprender en este curso, es el stack{" "}
            <strong>MERN</strong>: <strong>M</strong>ongoDB, <strong>E</strong>
            xpress, <strong>R</strong>eact y <strong>N</strong>ode.js. Ya tienes
            la <strong>N</strong> 😉
          </p>
        </div>
      </p>
      <p>
        Ahora ya tienes tu ordenador un poco más preparado. Puedes continuar con
        la <Link to="/challenge1/calentando-motores-js/">fase 3</Link>.
      </p>
    </>
  );
};

export default Challenge1Tools;
