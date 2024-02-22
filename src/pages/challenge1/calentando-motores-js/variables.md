## Variables

Los programas consisten en el fondo en ir procesando **datos**. Datos que muestran al usuario, datos que se piden al usuario, datos que se procesan, datos que se utilizan para tomar decisiones... en programación, a estos datos les llamamos **valores**.

En JavaScript hay diferentes **tipos** de valores. Vamos a empezar por los básicos:

- Tipo **number** (para cantidades): `42`, `3.14`, `-1`, `0`
- Tipo **string** (para textos): `"hola, buenos días"`, `'Torrevieja del Condado'`, `"42"`
- Tipo **boolean** (para valores de verdad o falsedad): `true`, `false`

En el código, a veces escribiremos directamente estos valores, pero generalmente vamos a querer darles un nombre para poder referirnos a ellos más fácilmente. A estos nombres les llamamos **variables**.

Una **variable** es un nombre que se le da a un valor para poder referirse a él más fácilmente. Aquí tienes varios ejemplos:

```javascript
const age = 42; // La variable age apunta al valor de tipo number 42
const lastName = "García"; // La variable lastName apunta al valor de tipo string "García"
const isStudent = true; // La variable isStudent apunta al valor de tipo boolean true
```

En esas tres líneas hemos creado (**declarado**) tres variables y a cada una le hemos **asignado** un valor. La palabra `const` es una **palabra reservada** de JavaScript que se utiliza para **declarar una variable**. La palabra `const` significa que el valor de la variable no va a cambiar.

En JavaScript también puedes declarar variables con la palabra reservada `let`. Esto lo haremos cuando queramos que el valor de la variable pueda cambiar.

```javascript
let age = 42; // La variable age apunta al valor de tipo number 42
console.log("Tengo " + age + " años");

age = 43; // Cambiamos el valor de la variable age
console.log("Ahora tengo " + age + " años");
```

En el código anterior, hemos **declarado** la variable `age` y le hemos **asignado** el valor number 42. Más adelante hemos **reasignado** a la misma variable `age` el valor number 43. Esto lo podemos hacer porque hemos declarado la variable con `let` y no con `const`.

```javascript
const age = 42;
console.log("Tengo " + age + " años");

age = 43;
console.log("Ahora tengo " + age + " años");
```

Si intentas ejecutar el código anterior, te dará un error "Assignment to constant variable". Esto es porque hemos declarado la variable `age` con `const` y no podemos reasignarle un valor.

Al nombre de una variable también se le llama **identificador**.

<div class="featured">
  <h3>Términos</h3>

  <p>Tómate un momento para repasar algunos términos importantes que hemos visto, y que deberán empezar a formar parte de tu vocabulario como developer:</p>

- **Valor**: un dato que se procesa en un programa.
- **Tipo**: la naturaleza de un valor, que determina cómo se procesa (no se puede hacer lo mismo con un número que con un texto).
- **Variable**: un nombre que se le da a un valor para poder referirse a él más fácilmente.
- **Declarar**: crear una variable.
- **Asignar**: darle un valor a una variable.
- **Reasignar**: cambiar el valor de una variable.
- **Identificador**: el nombre de una variable.
- **Palabra reservada**: una palabra que tiene un significado especial en el lenguaje de programación.
- **Sentencia**: una instrucción que le damos al ordenador.
</div>

Ten en cuenta siempre que un valor no es una variable, y una variable no es un valor. Cuando te encuentres `age = 23;`, puedes leerlo de varias maneras:

- A la variable `age` **se le asigna** el valor 23.
- La variable `age` **apunta** al valor 23.
- La variable `age` **vale** 23.
- La variable `age` **contiene** el valor 23.

Recuerda que para comprobar el valor de una variable siempre puedes usar `console.log` para imprimirlo por consola. Más adelante aprenderás una mejor manera de hacerlo, pero por ahora puedes usar ésta.

## Nombres de variables

A la hora de darle nombre a una variable, hay que tener en cuenta varias reglas:

- En JavaScript usaremos **camelCase** para nombrar variables formadas por más de una palabra. Por ejemplo, `lastName`, `isStudent`, `numberOfChildren`.
- No se pueden utilizar **palabras reservadas** como nombres de variables. Por ejemplo, no podemos llamar a una variable `const` o `let`.
- El nombre de la variable siempre tiene que ser **descriptivo**. Cuando un developer lea el nombre de la variable, tiene que entender qué representa ese valor.
- El nombre de una variable **no debe contener el tipo** del valor. Por ejemplo, no es correcto llamar a una variable `numberAge` o `nameString`.
- Por lo general los valores van a representar algo del mundo real (una edad, un nombre de persona, un total de clientes, la longitud de un texto...). Por eso el nombre de la variable debe describir aquello que representa, y no el tipo de valor que almacena.
- Hay que evitar las abreviaturas. Si queremos que al mirar un identificador, un developer pueda saber qué representa, no podemos usar nombres que no se entiendan. Si llamamos a una variable `a` o `n`, no sabemos qué representa. No hay problema en la longitud del identificador, así que mejor llamar a una variable `numberOfChildren` que `numOfChild`.
- Si la variable apunta a un valor booleano, es buena práctica que el nombre de la variable empiece por `is` o `has`. Por ejemplo, `isStudent`, `hasChildren`.

<div class="featured">
  <h3>La complejidad cognitiva</h3>

  <p>En programación hay una serie de métricas importantes que debes conocer. Una de ellas es la <strong>complejidad cognitiva</strong>.</p>

  <p>La complejidad cognitiva de un fragmento de código mide la carga mental que supone para un developer entender ese código. Cuanto más complejo es un código, más difícil es entenderlo. Y cuanto más difícil es entenderlo, más probable es que contenga errores o más se tardará en encontrar un bug.</p>

  <p>Una de las maneras de reducir la complejidad cognitiva es usar nombres de variables descriptivos. Si una variable se llama <code>numberOfChildren</code>, no hace falta que pensemos mucho en qué representa. Si una variable se llama <code>n</code>, tendremos que estrujarnos el cerebro para saber qué representa.</p>
</div>

## Entrega R1.4

1. En este código tienes varias declaraciones de variables. Escribe, por cada variable:

- El tipo de valor que almacena
- Si el nombre es descriptivo y correcto, o debería llamarse de otra forma

```javascript
const name = "Luis";
let age = 42;
const dog = true;
let numberOfChildren = 2;
const cnt = 15;
const lastname = "García";
let has_registered_boolean = false;
const mainColor = "#4f8902";
const i = 3;
```

2. Declara variables para almacenar los siguientes valores (asígnales el valor que quieras)

- Una contraseña
- Una dirección de correo electrónico
- Un número de teléfono
- El nombre de un gato
- La edad de un perro
- Un color favorito
- Si el usuario tiene hermanos o no
- La cantidad de películas vistas

Ahora que ya has aprendido a trabajar con variables, vamos a continuar con una pieza importantísima: <a href="/challenge1/calentando-motores-js/expresiones">las expresiones</a>.
