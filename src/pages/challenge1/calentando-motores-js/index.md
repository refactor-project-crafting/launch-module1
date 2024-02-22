# Reto 1-fase 3: Calentando motores con JS

![Logo de JavaScript](/images/javascript.webp)

Ya tienes las herramientas necesarias para empezar a programar en JavaScript. Recuerda: utilizarás **Visual Studio Code** para escribir el código y **un entorno de ejecución** para ejecutarlo. Ya sabes que los dos entornos de ejecución que tienes son el browser y Node.js.

## Pero... ¿qué es un programa?

En el apartado anterior le has dado una orden tanto al browser como a Node.js. La orden que les diste fue `console.log("¡Soy developer!")`.

Un **programa** es un **conjunto de órdenes** que le pasamos a un entorno de ejecución para que las ejecute. Si en vez de simplemente darle la orden de imprimir ese mensaje, hubieras hecho lo siguiente, habrías escrito un programa:

1. Preguntarle al usuario su nombre.
2. Preguntarle al usuario sus apellidos.
3. Imprimir por consola un mensaje de bienvenida con el nombre y los apellidos del usuario.

## ¿Qué es un lenguaje de programación?

Un **lenguaje de programación** es un **conjunto de reglas y símbolos** que nos permiten escribir programas. Los lenguajes de programación son como idiomas: cada uno tiene sus propias reglas gramaticales y su propio vocabulario.

Ejemplos de lenguajes de programación: JavaScript, Python, Ruby, Java, C#, C++, PHP, Swift, Kotlin, Go, Rust, TypeScript, etc.

Los lenguajes de programación pueden ser **de alto nivel** o **de bajo nivel**. Los lenguajes de alto nivel son más parecidos al lenguaje natural humano (generalmente inglés), y los lenguajes de bajo nivel son más parecidos al lenguaje de la máquina y más difíciles de entender para el humano.

Ejemplo de un programa con un lenguaje de alto nivel (Python) que pide el nombre y los apellidos al usuario y le da la bienvenida:

```python
name = input('¿Cuál es tu nombre? ')
lastName = input('¿Cuáles son tus apellidos? ')
print(f'¡Hola, {name} {lastName}!')
```

Ahora el mismo programa con un lenguaje de bajo nivel (C++):

```cpp
#include <iostream>
#include <string>

int main() {
    std::string firstName;
    std::string lastName;

    std::cout << "What is your first name? ";
    std::getline(std::cin, firstName);

    std::cout << "What are your last names? ";
    std::getline(std::cin, lastName);

    std::cout << "Hello, " << firstName << " " << lastName << "!" << std::endl;

    return 0;
}
```

El ejemplo de C++ es más difícil de entender para un humano porque está más cerca del lenguaje de la máquina, es de más bajo nivel.

JavaScript es un **lenguaje de alto nivel**.

## Lenguajes interpretados vs lenguajes compilados

No todos los entornos de ejecución entienden el código tal y como lo escribimos. En el caso de JavaScript, sus entornos de ejecución sí entienden el mismo código que escribimos, sin necesidad de modificarlo. A estos lenguajes se les llama **lenguajes interpretados**. El entorno de ejecución va a interpretar el código línea por línea y lo va a ejecutar. JavaScript es, por tanto, un **lenguaje interpretado**.

Sin embargo, hay otros entornos de ejecución que no pueden ejecutar el código tal y como lo escribimos, ese código necesita de un proceso de traducción antes de poder ser ejecutado. A estos lenguajes se les llama **lenguajes compilados**. El proceso de traducción se llama **compilación**. Cuando trabajamos con un lenguaje compilado, siempre que queramos ver funcionando nuestro código, tendremos que pasar por un paso intermedio que es la compilación.

Ejemplos de lenguajes interpretados: JavaScript, Python, Ruby, PHP, etc.

Ejemplos de lenguajes compilados: C, C++, C#, Java, Rust, Go, TypeScript, etc.

Fíjate que TypeScript es un lenguaje compilado, y nosotros vamos a programar en TypeScript, así que presta atención a los conceptos que vayan surgiendo relacionados con la compilación.

<div class="featured">
  <h3>Código fuente</h3>

Cuando se utiliza un lenguaje compilado, al código que los developers escribimos se le llama **código fuente**. El código fuente no se puede ejecutar, sino que necesita ser traducido a un **código compilado** para poder ser ejecutado.

Ve acostumbrándote a esta división. Incluso en el caso de que programaras sólo en JavaScript (no va a ser tu caso, en breves daremos el salto a TypeScript y podrás programar en ambos lenguajes) también tendrías varias herramientas para transformar tu código fuente en otro código diferente, que será el que se ejecutará.

Dentro de un proyecto, el código fuente se suele guardar en una carpeta llamada `src` (de _source_). El código compilado se suele guardar en una carpeta llamada `dist` (de _distribution_), aunque también podrás encontrar la carpeta del código compilado como `build` (la aplicación ya construida).

  <figure class="picture">
    <img src="/images/carpetas.webp" alt="Carpetas de un proyecto con src y dist resaltadas" width="293" />
    <figcaption>Carpetas `src` y `dist` de estos mismos apuntes</figcaption>
  </figure>
</div>

Es el momento de demostrar que estás capacitado/a para programar: <a href="/challenge1/calentando-motores-js/tu-primer-programa">tu primer programa</a>.
