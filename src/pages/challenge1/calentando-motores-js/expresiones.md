## Expresiones

Una **expresión** es una porción de código que puede ser sustituida por un valor. Ejemplos:

```javascript
3 + 4; // expresión que se puede sustituir por el valor 7
15 * 3; // expresión que se puede sustituir por el valor 45
"Hola" + ", " + "mundo"; // expresión que se puede sustituir por el valor "Hola, mundo"
3 > 2; // expresión que se puede sustituir por el valor true
10 < 5; // expresión que se puede sustituir por el valor false
```

Decimos que una expresión **resuelve** a un valor. Por ejemplo, la expresión `3 + 4` resuelve a `7`.

En las líneas anteriores has visto expresiones que consisten en valores acompañados de operadores. Los operadores son símbolos que indican al ordenador qué operación debe realizar con los valores.

```javascript
3 + 4; // 3 y 4 son valores, + es el operador que los suma
15 * 3; // 15 y 3 son valores, * es el operador que los multiplica
"Hola" + ", " + "mundo"; // "Hola", ", " y "mundo" son valores, + es el operador que los concatena
3 > 2; // 3 y 2 son valores, > es el operador que compara si 3 es mayor que 2
10 < 5; // 10 y 5 son valores, < es el operador que compara si 10 es menor que 5
```

Cuando asignamos un valor a una variable lo hacemos mediante una expresión:

```javascript
let age = 42 + 1; // age = 43
let name = "Luis" + " García"; // name = "Luis García"
```

<div class="featured">
  <h3>El operador `=`</h3>

El operador `=` no es un operador matemático, sino de **asignación**. Sirve para asignar un valor a una variable, y el valor asignado siempre se va a calcular a partir de una expresión.

**A la izquierda del `=` siempre va el nombre de una variable.**

**A la derecha del `=` siempre va una expresión.**

```javascript
identificador = expresión;
```

</div>

Cada vez que JS se encuentre con una expresión, la **evaluará** para obtener un valor, y la sustituirá por ese valor.

## Tipos de expresiones

### Expresión literal

La expresión más básica es la expresión **literal**. Una expresión literal es un valor escrito directamente en el código. Ejemplos:

```javascript
const age = 42; // 42 es una expresión literal
const name = "Luis"; // "Luis" es una expresión literal
const isRegistered = false; // false es una expresión literal
```

Escribimos _literalmente_ el valor.

### Expresión de identificador

La expresión de **identificador** consiste en escribir un nombre de variable, que será sustituido por el valor al que apunta la variable.

Vamos a analizar este simple código y lo vamos a despiezar:

```javascript
let age = 32;
age = age + 1;
```

En la segunda línea, parece que estamos usando lo mismo a la izquierda del `=` que a la derecha, al fin y al cabo estamos escribiendo `age` en ambos lados. Pero no es así. Recuerda que a la izquierda del igual siempre va el nombre de la variable a la que le vamos a asignar el valor, y a la derecha del igual siempre va una expresión que se va a evaluar para obtener un valor.

JavaScript primero **evaluará** la expresión `age + 1` para obtener un valor, y después **asignará** ese valor a la variable `age`. Para ello, JavaScript buscará el valor al que apunta la variable `age` y le sumará 1. De este modo, al finalizar el programa la variable `age` apuntará al valor `33`.

La expresión que ves a la derecha del `=` está compuesta por dos expresiones más pequeñas: `age` y `1`. La primera es una expresión de identificador, y la segunda es una expresión literal. JavaScript evaluará ambas para obtener sus valores, y después sumará esos valores.

Por tanto, si queremos explicar todos los pasos que sigue JavaScript para ejecutar ese programa de dos líneas, tendríamos que descomponerlo así:

Primera línea:

```javascript
let age = 32;
```

1. Declarar una variable llamada `age`.
2. Evaluar la expresión literal `32` para obtener el valor `32`.
3. Asignar el valor `32` a la variable `age`.

Segunda línea:

```javascript
age = age + 1;
```

1. Evaluar la expresión de identificador `age` para obtener el valor `32`.
2. Evaluar la expresión literal `1` para obtener el valor `1`.
3. Sumar los valores `32` y `1` para obtener el valor `33`.
4. Reasignar el valor `33` a la variable `age`.

Si quisiéramos imprimir el valor por consola, podríamos hacerlo así:

```javascript
console.log(age); // 33
```

Pero ahora párate a pensar la respuesta a esta pregunta: ¿el valor que se imprime en la consola es el mismo independientemente de en qué línea coloquemos el `console.log`?

```javascript
let age = 32;
console.log(age); // 32

age = age + 1;
console.log(age); // 33
```

La respuesta es no. Y esto es porque dependiendo de en qué punto del programa se evalúe una expresión, el valor resultante podría ser diferente. En el caso de `age`, el valor que se imprime en la consola es diferente dependiendo de si se imprime antes o después de la reasignación.

### Expresión aritmética

Una **expresión aritmética** es una expresión que contiene operadores aritméticos. Ejemplos:

```javascript
let age = 42;
age = age + 1; // age = 43

let result = 15 * 3; // result = 45
```

El operador `+` y el operador `*` son operadores aritméticos, y permiten realizar operaciones matemáticas con valores de tipo **number**.

### Expresión lógica

Una **expresión lógica** es una expresión que contiene operadores lógicos. Ejemplos:

```javascript
const isAdult = age > 18; // La expresión resolverá a true o false
const isCurrentYear = year === 2024; // La expresión resolverá a true o false
```

El operador `>` y el operador `===` son operadores lógicos, y permiten realizar operaciones con valores de tipo **boolean**.

### Expresión de concatenación

Una **expresión de concatenación** es una expresión que contiene el operador `+` y que permite unir dos o más valores de tipo **string**. Ejemplos:

```javascript
const name = "Luis" + " García"; // name = "Luis García"
const greeting = "¡Hola, " + name + "!"; // greeting = "¡Hola, Luis García!"
```

En la primera línea vemos una expresión de concatenación compuesta por dos expresiones literales. En la segunda línea hay una expresión de concatenación compuesta por dos expresiones literales y una expresión de identificador.

- La expresión literal `"Luis"` resuelve al valor de tipo string `"Luis"`.
- La expresión literal `" García"` resuelve al valor de tipo string `" García"`.
- La expresión literal `"¡Hola, "` resuelve al valor de tipo string `"¡Hola, "`.
- La expresión de identificador `name` resuelve al valor de tipo string `"Luis García"`.
- La expresión literal `"!"` resuelve al valor de tipo string `"!"`.

<div class="featured">
  <h3>Sobrecarga de operadores</h3>

  <p>Previamente habíamos visto que el operador `+` servía para sumar, pero en este caso vemos que sirve para concatenar. Se dice que el operador `+` es un operador <strong>sobrecargado</strong>, es decir, que puede realizar más de una operación.</p>

  <p>¿Y qué determina que sume o concatene? El tipo de los operandos. Si uno de los dos operandos es de tipo string, entonces concatenará. Y si ambos operandos son number, entonces sumará.</p>

```javascript
3 + 4; // 7
"3" + "4"; // "34"
"3" + 4; // "34"
```

</div>

### Entrega R1.5

1. Escribe:

- una expresión compuesta de expresiones literales (mínimo dos) que resuelva al valor `true`.
- una expresión compuesta de expresiones literales (mínimo dos) que resuelva al valor `18`.
- una expresión compuesta de expresiones literales (mínimo dos) que resuelva al valor `"Crafting en Desarrollo Web Profesional"`.

2. Escribe:

- una expresión compuesta de expresiones literales y de identificador, que resuelva al valor `22`.
- una expresión compuesta de expresiones literales y de identificador, que resuelva al valor `false`.
- una expresión compuesta de expresiones literales y de identificador, que resuelva al valor `"Mi amiga Marta tiene 29 años"`.

3. Describe las expresiones señaladas. Di todos los tipos de expresiones que ves en cada una, y a qué valor resuelven.

```javascript
let age = 54;

15 * 3 >= age; // <-- describe esta expresión
```

```javascript
let year = 2015;
let age = 8;
let currentYear = 2024;

year + age === currentYear; // <-- describe esta expresión
```

```javascript
let name = "Marta";
let age = 29;

"Marta tiene " + age + " años, y el año que viene tendrá " + age + 1; // <-- describe esta expresión
```

## Continúa

Ahora que ya conoces algunas piezas fundamentales de JavaScript, es hora de que desarrolles tu primer programa de verdad: <a href="/challenge1/calentando-motores-js/finaliza-tu-primer-programa">finaliza tu primer programa</a>.
