# Reto 1-fase 1: Tu Sistema Operativo y su terminal

![Logotipos de Windows, Linux y macOS](/images/os-logos.svg)

Si estás haciendo esta prueba es que ya tienes un ordenador con uno de los tres principales sistemas operativos: **Windows**, **Linux** o **macOS**.

¿Y qué es un Sistema Operativo? Te lo contamos en este vídeo:

<div class="picture">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/vQd7NalY66s?si=8ofufqlFOjNWCjWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Entendiendo tu disco duro

Los datos que utiliza tu ordenador para funcionar se almacenan en dos sitios: en la **memoria RAM** y en el **disco duro**. Los datos están guardados en el disco duro incluso cuando el ordenador está apagado, y cada vez que el Sistema Operativo necesita acceder a ellos, los carga en la memoria RAM y los utiliza desde ahí.

Tu disco duro está lleno de **archivos** (también llamados **ficheros**). Cada uno de ellos tiene un **nombre** y una **extensión** que indica el **tipo de archivo**. Por ejemplo, un archivo de texto puede tener la extensión **.txt**, un archivo de imagen **.jpg** o **.png**, un archivo de audio **.mp3** o **.wav**, y un archivo de vídeo **.mp4** o **.avi**.

Los archivos no están todos sueltos en el disco duro, sino que están organizados en **carpetas** (también llamadas **directorios**). Las carpetas pueden contener archivos y otras carpetas. A las carpetas que están dentro de otras se les llama **subcarpetas** (o **subdirectorios**).

<div class="featured">
  <h3>STOP</h3>

Tu ordenador tiene que ser un ordenador **de developer**. El Sistema Operativo suele ocultar las extensiones de archivos para que el usuario medio no se confunda, pero tú tienes que poder ver las extensiones.
Configura tu Sistema Operativo para que haga estas dos cosas:

1. Mostrar siempre las extensiones de archivos.
2. Mostrar siempre los archivos ocultos.
</div>

Para ver tus archivos y carpetas, el Sistema Operativo te ofrece:

- Si estás en **Windows**, el **Explorador de archivos**.
- Si estás en **macOS**, el **Finder**.
- Si estás en **Linux**, se llamará de diferente forma según la distribución que estés utilizando. Por ejemplo, en **Ubuntu** se llama **Nautilus**.

<figure class="picture">
  <img src="/images/explorador.webp" alt="Explorador de archivos de Windows" width="500" />
  <figcaption>Explorador de archivos en Windows</figcaption>
</figure>

¿Y cómo se organizan los archivos y carpetas en tu disco duro? Cuando entras en tu Sistema Operativo lo haces desde un usuario. Cada usuario tiene su propio **directorio personal**. Dentro de ese directorio personal, cada usuario puede crear sus propias carpetas y archivos.

Por ejemplo, si tu nombre de usuario para acceder es _refactor_, tu directorio personal se llamará `/home/refactor` en Linux, `/Users/refactor` en macOS, y `C:\Users\refactor` en Windows. Dentro de tu directorio personal suelen encontrarse carpetas como **Desktop**, **Documentos**, **Descargas**, **Música**, **Imágenes**, **Vídeos**, etc.

Imagina que tienes un archivo llamado `game.js` en tu escritorio. Si estás en Windows, el archivo se llamará `game.js` y estará en `C:\Users\refactor\Desktop`. Si estás en macOS, el archivo se llamará `game.js` y estará en `/Users/refactor/Desktop`. Si estás en Linux, el archivo se llamará `game.js` y estará en `/home/refactor/Desktop`.

<div class="featured">
  <h3>Importante</h3>
  En los sistemas <strong>Unix</strong> (como Linux y macOS), un archivo <code>game.js</code> y un archivo <code>Game.js</code> son dos archivos diferentes. En Windows, en cambio, serían el mismo archivo. Es importante que tengas esto en cuenta porque nos va a dar problemas en el futuro.
</div>

Para localizar un archivo o una carpeta utilizamos una **ruta**. La ruta es como una dirección que le indica al Sistema Operativo dónde está el archivo o la carpeta.

Fíjate en esta ruta: `/Users/luis/Desktop/game.js`. Esta ruta indica que el archivo `game.js` está en la carpeta `Desktop`, que está dentro de la carpeta `luis`, que está dentro de la carpeta `Users`, que cuelga directamente de la **raíz** (llamamos raíz a la carpeta madre de todas las demás). Luis ve su archivo `game.js` en su escritorio, pero realmente está guardado en esa ruta.

## Terminal

Seguramente estés acostumbrado a comunicarte con tu sistema operativo a través de una **interfaz gráfica**, compuesta de ventanas, botones, iconos, links, y el puntero de tu ratón. Pero ésa no es la única forma.

Hay otra interfaz (_interfaz_ significa _punto de contacto_) que no es gráfica que es la **línea de comandos** (también conocida como **CLI**, _Command Line Interface_). Para encontrarla, en Windows se llama **Símbolo del sistema** o **PowerShell**, en macOS se llama **Terminal**, y en Linux se llama **Terminal** o **Consola**.

La línea de comandos es una forma de comunicarte con tu Sistema Operativo escribiendo **comandos** (órdenes) en lugar de hacer clic en botones. Al principio te parecerá más complicado, pero a medida que vayas aprendiendo a utilizarla te darás cuenta de todo lo que te ofrece.

Cuando abras una terminal o consola, verás una **línea de comandos** esperando a que escribas algo. Esa línea de comandos se llama **prompt**. El prompt te indica que el Sistema Operativo está esperando a que le des una orden. En el prompt te aparecerá en qué ruta o carpeta del disco duro estás trabajando en ese momento. Todas las órdenes que des se ejecutarán en esa carpeta.

Por ejemplo, si estás en Windows y ves `C:\Users\refactor>`, significa que estás en la carpeta `C:\Users\refactor`. Si estás en macOS y ves `luis@MacBook-Pro-de-Luis ~ %`, significa que estás en la carpeta `/Users/luis` (ese símbolo `~` es una abreviatura de tu directorio personal).

<figure style="text-align: center">
  <img src="/images/omelette.png" alt="La terminal con una ruta" width="500" />
  <figcaption>Estamos en la carpeta <i>omelette</i></figcaption>
</figure>

En la captura anterior puedes ver que estamos en una carpeta `omelette`, que es una subcarpeta de `recipes`. La carpeta `recipes` es una subcarpeta de la carpeta `marius`. Y así hasta llegar a la carpeta raíz (`\`).

## Entrega R1.1

Necesitamos que ejecutes todas estas acciones con la terminal o consola de tu Sistema Operativo. No uses la interfaz gráfica. Léete primero el apartado <a href="/challenge1/os/moviendote-por-tu-disco-duro">Moviéndote por tu disco duro</a> y tenlo de referencia para que puedas ir consultándolo si lo necesitas. También puedes buscar recursos por internet.

De cara a la entrega, **haz una captura de pantalla** de cada uno de los pasos que te pedimos.

1. Abre la terminal o consola de tu Sistema Operativo.
2. Desde la carpeta de tu usuario, crea una carpeta llamada `web`.
3. Entra en la carpeta `web`.
4. Crea tres archivos: `index.html`, `styles.css` y `app.js`.
5. Comprueba mediante un comando que los archivos se han creado.
6. Borra el archivo `styles.css`.
7. Crea una carpeta llamada `css`.
8. Entra en la carpeta `css` y crea un archivo llamado `styles.css`.
9. Comprueba mediante un comando que el archivo `styles.css` se ha creado.
10. Sal de la carpeta `css` y crea una carpeta llamada `js`.
11. Mueve el archivo `app.js` a la carpeta `js`.
12. Comprueba mediante un comando que el archivo `app.js` se ha movido.
13. Sal de la carpeta `web`.
14. Renombra la carpeta `web` a `portfolio`.
15. Comprueba mediante un comando que la carpeta `web` se ha renombrado.
16. Ahora realiza las siguientes acciones encadenando varios comandos en una sola línea:
    - Entra en la carpeta `portfolio`.
    - Crea una carpeta llamada `images`.
    - Entra en la carpeta `images`.
    - Crea un archivo llamado `logo.png`.
    - Comprueba mediante un comando que el archivo `logo.png` se ha creado.
    - Sal de la carpeta `images`.
    - Borra las carpetas `css` y `js` y el archivo `index.html`.
    - Comprueba mediante un comando que las carpetas y el archivo se han borrado.
17. Por último, ve desde donde estás a la raíz del disco duro en un solo comando.

Entrega un archivo comprimido en zip con todas las capturas de pantalla.

Cuando hayas terminado, puedes continuar con la <a href="/challenge1/herramientas">fase 2</a>.
