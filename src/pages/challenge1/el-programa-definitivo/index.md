# Reto 1-fase 5: El programa definitivo del reto

![Un campo para password con un candado](/images/candado.webp)

Después de todo lo que has aprendido, es el momento de que nos ayudes con lo que te pedimos al principio del reto.

Tenemos una web con dos formularios, uno de register y otro de login. Necesitamos que nos ayudes a hacer el programa que valide los datos que se introducen en estos formularios. Las validaciones serán las que ya te pedimos en un programa anterior.

### Requirements

- Dado un nombre de usuario, el programa debe comprobar si tiene 5 caracteres o más.
- Dada una contraseña, el programa debe comprobar:
  - Si tiene 8 caracteres o más.
  - Si tiene al menos un número.
  - Si tiene al menos una letra mayúscula.
- Dada una segunda contraseña, el programa debe comprobar si es igual a la primera contraseña.
- Dada una edad, el programa debe comprobar si es mayor de edad.

### User stories

Otra manera de describir los requisitos de un programa, esta vez desde el punto de vista de un usuario, son las **user stories**. Aquí tienes las que corresponden a este programa:

1. Como usuario, quiero poder introducir mis datos para registrarme.
2. Como usuario, quiero que se me informe con un mensaje de error si mis datos no cumplen los requisitos de la aplicación.
3. Como usuario, quiero que se me informe con un mensaje de éxito si mi registro ha sido completado con éxito.
4. Como usuario, quiero poder introducir mis credenciales para iniciar sesión.
5. Como usuario, quiero que se me informe con un mensaje de error si mis credenciales no son las correctas.
6. Como usuario, quiero poder acceder a la aplicación si mis credenciales son las correctas.

## Tu parte

Vas a incorporarte al equipo de desarrollo de esta aplicación. Ya se ha construido parte de la funcionalidad, pero faltan las validaciones de los datos que ingresa el usuario, y ahí entras tú.

Clónate el repositorio del proyecto: https://github.com/refactor-project-crafting/launch-login-register

Después de clonarlo, abre el proyecto en el VS Code e instala las dependencias con el comando `npm install`.

Para poder ver la aplicación, debes ejecutar el comando `npm start` y abrir tu navegador en la dirección `http://localhost:3000`.

### Validaciones

En el proyecto encontrarás un módulo llamado `auth`, que tiene dos archivos, `validation.js` y `login.js`.

En `validation.js` encontrarás varias funciones para validar cada uno de los datos que se le piden al usuario en el formulario de registro. Dentro de cada función encontrarás unos comentarios que describen el código que tienes que añadir.

Para comprobar si funciona correctamente, abre la página de registro e introduce datos erróneos primero, y luego datos correctos. Cuando hay error debería mostrarse en rojo un mensaje de error. Y cuando no hay error debería redirigirte a una página diciéndote que te has registrado correctamente.

En `login.js` tendrás que comprobar si las credenciales introducidas son las mismas que las almacenadas. También tienes unos comentarios explicándote qué tienes que hacer.

Para comprobar si funciona correctamente, abre la página de login e introduce unas credenciales diferentes a las que introdujiste al registrarte. Debería aparecer un mensaje de error en rojo. Luego introduce las credenciales correctas y debería redirigirte a una página de bienvenida.

### Entrega R1.9

Cuando hayas terminado, sube el proyecto a un repositorio en tu GitHub y comparte
