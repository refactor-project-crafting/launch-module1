## Tu primer programa

Hay una tradición en el entorno de la programación que consiste en que el primer programa que escribes en un lenguaje de programación nuevo es un programa que muestra en pantalla la frase "¡Hola, mundo!".

Estamos seguros de que esto ya lo has hecho previamente en tutoriales y cursos, así que vamos a ajustarnos más a la realidad que te espera.

## El proyecto

Para crear un programa necesitarás crear archivos en tu disco duro. Los archivos tienen que estar organizados, así que para cada programa que desarrolles -a lo que llamamos un _proyecto_-, crea una carpeta nueva. Dentro de esa carpeta, guarda todos los archivos que necesites.

No te preocupes si en este caso vamos a tener una carpeta sólo con un archivo. En el futuro, tus proyectos serán más grandes y tendrás que organizarlos bien.

Crea por tanto una carpeta que se llame `hello-world` en tu escritorio. Dentro de esa carpeta, crea un archivo que se llame `index.js`. Ha sido fácil, ¿verdad? Bien, ahora borra esa carpeta y haz lo mismo pero desde una terminal. Haz una captura a los comandos que hayas utilizado e inclúyela en tu entrega.

<div class="featured">
  <h3>Nombres de archivos y carpetas</h3>

<p>Apúntate en grande y en rojo e imprímelo en un A3 para colgar en la pared: <strong>cuando programes, no crees nombres de archivos o carpetas con espacios ni con acentos</strong>.</p>

<p>Fíjate en el nombre de la carpeta que alberga tu proyecto: <code>hello-world</code>. Es un nombre compuesto por dos palabras, pero en vez de utilizar un espacio, hemos utilizado un guión medio (<code>-</code>). Hay diferentes convenciones para crear nombres con varias palabras sin usar espacio:</p>

- **kebab-case**: todas las palabras en minúsculas y separadas por guiones medios. P.e.: `esto-se-pone-divertido`
- **snake_case**: todas las palabras en minúsculas y separadas por guiones bajos. P.e.: `esto_se_pone_divertido`
- **camelCase**: las palabras no van separadas y se pone en mayúscula la primera letra de cada palabra. Dependiendo de cómo se escriba la primera letra hay dos tipos, **lowerCamelCase** y **UpperCamelCase** (también conocida como **PascalCase**). P.e.: `estoSePoneDivertido` y `EstoSePoneDivertido`

</div>

## El editor

Una vez que has creado tu carpeta para un proyecto, ya puedes abrir Visual Studio Code para empezar a trabajar en él. Es importante que en el editor abras **la carpeta del proyecto**. Tienes varias maneras de hacerlo:

1. Abre VS Code y arrastra la carpeta del proyecto a la ventana del editor.
2. Abre VS Code, ve a `Archivo > Abrir carpeta...` y selecciona la carpeta del proyecto.
3. Abre una terminal y ve a la carpeta del proyecto. Una vez allí, escribe `code .` y pulsa Enter (el comando `code` abre VS Code y el punto le indica que abra la carpeta en la que estás).
4. Si estás en Windows, haz clic con el botón derecho en la carpeta del proyecto y selecciona `Abrir con Code`.

<div class="featured">
  <h3>Comprobación</h3>

  <p>Es importante que compruebes que has abierto la carpeta que toca. Para ello, fíjate en el navegador de archivos del Code (a la izquierda) y mira si aparece el nombre de la carpeta del proyecto en mayúsculas. Además, la carpeta no debería aparecer dentro del listado de archivos, sino encabezándolo.</p>

  <figure class="picture">
    <img src="/images/folder-hello-world.png" alt="Carpeta hello-world marcada en mayúsculas" width="353" />
    <figcaption>Nombre de la carpeta del proyecto en mayúsculas</figcaption>
  </figure>

  <p>&nbsp;</p>

  <figure class="picture">
    <img src="/images/folder-hello-world-error.png" alt="Carpeta hello-world mal abierta" width="353" />
    <figcaption>La carpeta del proyecto no está en mayúsculas<br />y aparece dentro del árbol de carpetas y archivos</figcaption>
  </figure>  
</div>

## Programar para Node.js

Abre el archivo `index.js` y escribe el siguiente código:

```javascript
const name = "Luis";

const greeting = "¡Hola, " + name + "!";
console.log(greeting);
```

Ejecútalo en Node.js para comprobar que funciona correctamente.

En este programa hay tres instrucciones (también llamadas **sentencias**):

1. Crear una variable llamada `name` y asignarle el valor `"Luis"`.
2. Crear una variable llamada `greeting` y asignarle un valor compuesto por la **concatenación** de: `"Hola, "`, el valor de la variable `name` y el carácter `!` (concatenar es unir textos).
3. Imprimir por consola el valor de la variable `greeting`.

El resultado debería ser que en la consola se imprima `¡Hola, Luis!`.

Acabamos de utilizar una serie de conceptos que son fundamentales en la programación. Vamos a ir ampliándolos: <a href="/challenge1/calentando-motores-js/variables">empecemos hablando de variables</a>.
