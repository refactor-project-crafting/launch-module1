## Operaciones con strings

![Una string con los caracteres separados](/images/string.webp)

Los strings (o _cadenas_) son un tipo de valor que nos ofrece JavaScript para representar textos. Un string está compuesto por una secuencia de caracteres, y cada uno de estos caracteres tiene una posición en la cadena, empezando por la posición `0`.

Por ejemplo, si tenemos la cadena `"Hola"`, el caracter `"H"` está en la posición `0`, el caracter `"o"` está en la posición `1`, el caracter `"l"` está en la posición `2` y el caracter `"a"` está en la posición `3`.

<div class="featured">
  <h3>¿Comillas simples o dobles?</h3>

  <p>En JavaScript podemos usar tanto comillas simples como dobles para delimitar una cadena. No hay diferencia entre ellas, pero es importante <strong>ser consistente</strong> y <strong>usar siempre el mismo tipo de comillas dentro de un mismo proyecto</strong>.</p>

<p>Cuando un proyecto dura muchos meses y hay muchas personas trabajando en él, es muy difícil garantizar que todo el mundo utiliza el mismo tipo de comillas. Es por esta razón que vamos a usar una herramienta que garantiza que las comillas son siempre del mismo tipo. Esta herramienta se llama <strong>Prettier</strong> y es un <strong>formateador</strong>, y tienes una extensión en tu VS Code que la lleva integrada.</p>

<p>Por defecto, Prettier viene configurado para usar comillas dobles. Si quieres cambiarlo a comillas simples, puedes hacerlo en el archivo <code>.editorconfig</code> que encontrarás en la carpeta raíz del proyecto. Este archivo nos sirve para configurar Prettier.</p>

<p>JavaScript nos ofrece un tercer tipo de delimitador, las comillas invertidas o <strong>backticks</strong> (<code>`</code>). No sustituyen a las dos anteriores, sino que tienen otro uso: nos permiten escribir expresiones de JavaScript dentro de un string:</p>

```javascript
const name = "Julia";
console.log(`¡Hola, ${name}!`);

const age = 30;
console.log(
  `La usuaria se llama ${name} y tiene ${age} años. Dentro de 10 años tendrá ${
    age + 10
  } años.`
);
```

<p>A un string delimitado por backticks se le llama <strong>template literal</strong>.</p>

</div>

### Acceder a un caracter

Para acceder a un caracter concreto de una cadena, podemos hacerlo a partir de su posición. Tenemos tres formas de hacerlo:

- Usando corchetes `[]` y la posición del caracter que queremos acceder.
- Usando el método `charAt()` y la posición del caracter que queremos acceder.
- Usando el método `at()` y la posición del caracter que queremos acceder.

```javascript
let filmTitle = "Kung-fu Panda";

console.log(filmTitle[0]); // K
console.log(filmTitle.charAt(0)); // K
console.log(filmTitle.at(0)); // K
```

El método `at()` es el más moderno y tiene una diferencia clave con los otros dos: nos permite usar posiciones negativas para acceder a los caracteres desde el final de la cadena. Por ejemplo, si queremos acceder al último caracter de la cadena, podemos hacerlo con `-1`.

```javascript
let filmTitle = "Kung-fu Panda";

console.log(filmTitle[filmTitle.length - 1]); // a
console.log(filmTitle.charAt(filmTitle.length - 1)); // a
console.log(filmTitle.at(-1)); // a
```

¿Sabías que no existe un tipo de dato `char` o `character` en JavaScript? Los caracteres son simplemente strings de longitud 1, por tanto cuando obtengas un caracter podrás hacer con él todo lo que puedes hacer con cualquier string.

### Longitud de una cadena

Para saber la longitud de una cadena, es decir, cuántos caracteres tiene, podemos usar la propiedad `length`.

```javascript
let filmTitle = "Kung-fu Panda";

console.log(
  "El título de la película tiene " + filmTitle.length + " caracteres."
); // El título de la película tiene 13 caracteres.
```

<div class="featured">
  <h3>Propiedades y métodos</h3>

  <p>Los strings tienen una <strong>propiedad</strong> llamada <code>length</code>, que apunta a la longitud de la cadena. Veremos que cada tipo de datos tiene sus propias propiedades.</p>

  <p>Los strings también tienen <strong>métodos</strong>, que son acciones que podemos realizar con ellos. Veremos también que cada tipo de datos tiene sus propios métodos.</p>

  <p>En JavaScript, a las propiedades y a los métodos se accede con un punto <code>.</code> seguido del nombre de la propiedad o del método. Hay otra manera de acceder, pero es menos común y la veremos más adelante.</p>
</div>

### Concatenar cadenas

Ya conoces el operador `+`, que como hemos visto es un operador sobrecargado. Cuando alguno de los dos operandos es de tipo string, el operador no va a sumar sino a concatenar (unir strings).

```javascript
const dogName = "Coco";
const dogAge = 3;

console.log(
  "Mi perro se llama " +
    dogName +
    " y tiene " +
    dogAge +
    " años. Su nombre tiene " +
    dogName.length +
    " letras."
); // Mi perro se llama Coco y tiene 3 años. Su nombre tiene 4 letras.
```

Pero también hemos aprendido que usando template literals se pueden incluir expresiones de JavaScript dentro de un string. Esto nos permite hacer la concatenación de una manera más legible.

```javascript
const dogName = "Coco";
const dogAge = 3;

console.log(
  `Mi perro se llama ${dogName} y tiene ${dogAge} años. Su nombre tiene ${dogName.length} letras.`
); // Mi perro se llama Coco y tiene 3 años. Su nombre tiene 4 letras.
```

### Transformar a mayúsculas y a minúsculas

Los strings tienen dos métodos que nos permiten transformarlos a mayúsculas o a minúsculas: `toUpperCase()` y `toLowerCase()`.

```javascript
const filmTitle = "Kung-fu Panda";

console.log(filmTitle.toUpperCase()); // KUNG-FU PANDA
console.log(filmTitle.toLowerCase()); // kung-fu panda
```

#### Entrega R1.7

Ahora que sabes concatenar strings y convertir de mayúscula a minúscula y viceversa, completa este programa para que imprima el nombre pero con la primera letra en mayúscula. Usa template literals para concatenar.

```javascript
const name = "julia";

// Escribe tu código aquí
```

### Dividir un string

El método `split()` nos permite dividir un string en un array de strings, usando un separador que le pasamos como argumento.

```javascript
const studentNames = "Antonia, Julio, María Jesús, Joan";

console.log(studentNames.split(", ")); // ["Antonia", "Julio", "María Jesús", "Joan"]
```

<p>Un array es un tipo de valor que nos ofrece JavaScript para representar <strong>una colección de valores</strong>. Los veremos más adelante en profundidad.</p>

### Saber si un string contiene otro string

El método `includes()` nos permite saber si un string contiene otro string. Devuelve `true` si lo contiene y `false` si no.

```javascript
const synopsis =
  "Kung-fu Panda es una película de animación. Narra la historia de un oso panda que sueña con ser un maestro de kung-fu.";

console.log(synopsis.includes("panda")); // true
console.log(synopsis.includes("oso")); // true
console.log(synopsis.includes("oso panda")); // true
console.log(synopsis.includes("oso panda rojo")); // false
```

### Reemplazar un string por otro

Los métodos `replace()` y `replaceAll()` nos permiten reemplazar un string por otro. El primero reemplaza solo la primera ocurrencia, y el segundo todas las ocurrencias.

```javascript
const summary =
  "Kung-fu Panda es una película de animación. Narra la historia de un oso panda que sueña con ser un maestro de kung-fu. El oso panda finalmente se convierte en el maestro de kung-fu.";

let newSummary = summary.replace("Kung-fu Panda", "Kung-fu Panda 2");

console.log(newSummary); // Kung-fu Panda 2 es una película de animación. Narra la historia de un oso panda que sueña con ser un maestro de kung-fu. El oso panda finalmente se convierte en el maestro de kung-fu.

newSummary = summary.replaceAll("oso panda", "panda");

console.log(newSummary); // Kung-fu Panda es una película de animación. Narra la historia de un panda que sueña con ser un maestro de kung-fu. El panda finalmente se convierte en el maestro de kung-fu.
```
