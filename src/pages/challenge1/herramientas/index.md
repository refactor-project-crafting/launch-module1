# Reto 1-fase 2: Las herramientas del developer

![Portátil con herramientas alrededor](/images/tools.webp)

Para programar no necesitas mucho. Un editor de texto cualquiera y un navegador web son suficientes para empezar. Pero para dedicarse profesionalmente al desarrollo de software, vas a necesitar bastantes herramientas que te van a ir ayudando en cada etapa del proceso.

En este reto vamos a instalar y configurar algunas de las herramientas que vas a necesitar en tu día a día como developer.

## 1. El browser

Lo más probable es que ya tengas uno instalado, así que no vamos a perder tiempo en esto. Eso sí, para el curso vamos a usar **Chrome** o cualquier otro navegador basado en **Chromium**, como _Edge_ o _Brave_.

El browser es una herramienta fundamental para el desarrollo web. No sólo es el lugar donde se ejecutan las aplicaciones que desarrollas, sino que también es el lugar donde puedes ver cómo se comporta tu aplicación en diferentes dispositivos, cómo se ve en diferentes navegadores, y cómo se comporta en diferentes situaciones.

<div class="featured">
  <h3>Las <i>Developer Tools</i></h3>

Tu browser esconde una herramienta importantísima, o mejor dicho, un conjunto de herramientas: las <i>Developer Tools</i>. Con ellas puedes inspeccionar el código fuente de cualquier página web, modificarlo en tiempo real, ver cómo se comporta tu aplicación en diferentes dispositivos, y mucho más. Aprender a utilizarlas es fundamental para tu carrera como developer.

Para abrirlas, pulsa <kbd>F12</kbd> o <kbd>Ctrl+Shift+I</kbd> en Windows, o <kbd>Cmd+Option+I</kbd> en macOS.

</div>

## 2. El editor de texto

Para escribir código necesitas un editor de texto. El más utilizado en el **stack tecnológico** que vas a aprender es **Visual Studio Code**, de Microsoft. Es gratuito, multiplataforma y tiene una gran cantidad de extensiones que te van a ayudar a ser más productivo.

Instala ahora el editor. Si estás en un Windows, recuerda marcar las dos opciones de "Abrir con Code" cuando te lo pregunte.

<figure style="text-align: center">
  <img src="/images/install-code.webp" alt="Asistente de instalación de Visual Studio Code en Windows" width="500" />
  <figcaption>Instalador de Visual Studio Code en Windows</figcaption>
</figure>

Tómate un rato para instalar las extensiones necesarias para el curso y para configurar el editor: <a href="/challenge1/herramientas/configuracion-vs-code">configuración del VS Code</a>.

## 3. Git

<figure class="picture">
  <img src="/images/git-diff.webp" alt="Comandos de Git" width="500" />
  <figcaption>Comandos de Git</figcaption>
</figure>

Git es un sistema de control de versiones que te va a permitir llevar un registro de los cambios que haces en tu código. Hoy en día es una herramienta imprescindible para cualquier developer. La usarás mucho durante el curso y en tu vida profesional.

Instala Git desde <a href="https://git-scm.com/" target="_blank">su página oficial</a>. Cuando lo estés instalando, asegúrate de que el editor por defecto para Git es Visual Studio Code. El resto de opciones las puedes dejar como vienen por defecto.

¿Sabes cómo se configura Git? Por consola 🤓 . Aquí tienes los pasos para configurarlo: <a href="/challenge1/herramientas/configuracion-git">Configuración de Git</a>

## 4. Node.js

<figure class="picture">
  <img src="/images/node-js.webp" alt="Logo de Node.js" width="500" />
</figure>

Anteriormente en los materiales hablamos de dos programas que tienen la capacidad de **ejecutar JavaScript**: uno de ellos es el browser, y el otro es **Node.js**. Este último es un entorno de ejecución de JavaScript que te va a permitir ejecutar código JavaScript en tu ordenador pero fuera del browser.

Ve a la página oficial de Node.js, verás que hay dos versiones para instalar: la versión LTS (_Long Term Service_) y la versión Current. Instala la versión **Current**, que es la más actual.

Una vez instalado, abre una terminal y escribe un comando para comprobar si se ha instalado correctamente.

<div class="featured">
  <h3>Achtung!</h3>

Si tu ordenador se ha utilizado previamente para programar, es posible que ya tengas instalado Node.js. En ese caso, **es importante que compruebes la versión**. Si la versión que tienes instalada es anterior a la que ves como Current en la web oficial, actualízala.

Tener la versión Current es un requisito para el curso.

</div>

## Ahora que tienes Node.js y un browser

Ya tienes instalados en tu ordenador dos programas que son capaces de ejecutar JavaScript. Haz la prueba:

- En el browser, abre las Developer Tools, ve a la pestaña "Consola" y escribe `console.log("¡Soy developer!");`. Verás que se imprime el mensaje en la consola. Eso significa que le has dado una instrucción al browser escrita en JavaScript, y el browser la ha ejecutad.
- En una terminal, escribe `node` y pulsa Enter. Verás que se abre un intérprete de JavaScript en la terminal. Escribe `console.log("¡Soy developer!");` y pulsa Enter. Verás que se imprime el mensaje en la terminal. Eso significa que le has dado una instrucción a Node.js escrita en JavaScript, y Node.js la ha ejecutado.

<div class="featured">
  <h3>El stack MERN</h3>

Hablamos de _stack tecnológico_ (pila de tecnologías) para referirnos a un conjunto de tecnologías que se utilizan juntas para desarrollar aplicaciones. Uno de los stacks más usados en web development, y el que vas a aprender en este curso, es el stack **MERN**: **M**ongoDB, **E**xpress, **R**eact y **N**ode.js.

Ya tienes la **N** 😉

</div>

Ahora ya tienes tu ordenador un poco más preparado. Puedes continuar con la <a href="/challenge1/calentando-motores-js">fase 3</a>.
