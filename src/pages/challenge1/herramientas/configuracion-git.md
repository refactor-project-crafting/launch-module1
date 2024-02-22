## Configuración de Git

Es muy probable que ahora mismo, tras instalar Git, no tengas ni la más remota idea de qué te has instalado. No te preocupes, ya irás viendo para qué sirve, pero por ahora vamos a configurarlo para que funcione correctamente.

### CLI vs GUI

Git se puede utilizar de dos maneras: desde la línea de comandos (**CLI o _Command Line Interface_**) o desde una interfaz gráfica (**GUI o _Graphic User Interface_**). En este curso vamos a utilizar la CLI, te dará mucho más control y te ayudará a entender mejor cómo funciona Git.

<div class="featured">
  <h3>Interfaz</h3>

Ya ha aparecido previamente la palabra _interfaz_ en estos materiales, ¿recuerdas? Decíamos que una interfaz es un punto de contacto. En el caso del Sistema Operativo, tenemos dos interfaces: la **interfaz gráfica** (ventanas, iconos, puntero, clic...) y la **interfaz de línea de comandos** (la terminal).

Git también tiene dos interfaces: la **interfaz gráfica** (una aplicación con ventanas, botones, que te permite interactuar con Git mediante clicks del ratón) y la **interfaz de línea de comandos** (la terminal, que te permite interactuar con Git mediante comandos).

Recuerda bien la palabra **interfaz**, es sumamente importante en programación. Su significado dependerá del contexto en que la usemos, pero siempre va a significar un punto de contacto entre dos partes.

</div>

### Comandos de Git

Todos los comandos de Git empiezan con éste: `git`. A continuación, se escribe el nombre del comando que queremos ejecutar, y después se añaden los argumentos que necesite el comando.

Para configurar Git vamos a utilizar el comando `git config`. Nos permitirá establecer opciones de configuración del programa y también consultar las que ya están establecidas.

### Los tres ámbitos de configuración

Cada opción de configuración de Git se puede establecer en tres ámbitos diferentes:

1. **Local**: se aplica sólo a un proyecto concreto.
2. **Global**: se aplica a todos los proyectos que hagas con tu usuario del Sistema Operativo.
3. **System**: se aplica a todos los usuarios del Sistema Operativo.

Por ejemplo:

```bash
git config --local user.name "Luis González" # Configura mi nombre para un proyecto concreto
git config --global user.name "Antonia Mistral" # Configura mi nombre para todos los proyectos de mi usuario del S.O.
git config --system user.name "Juan Luis Díaz" # Configura mi nombre para todos los usuarios del S.O.
```

Analicemos el primero de los comandos anteriores:

- `git config`: es el comando de Git que nos permite establecer o consultar una opción de configuración del programa.
- `--local`: es un **argumento** que le estamos pasando al comando. Le indica que la opción de configuración que vamos a establecer o consultar se aplicará sólo a un proyecto concreto.
- `user.name`: es el **nombre de la opción de configuración** que queremos establecer o consultar. Esta opción concreta sirve para que Git almacene tu nombre.
- `"Luis González"`: es el **valor** que le estamos dando a la opción de configuración. En este caso, estamos diciendo que en este proyecto concreto, Git debe almacenar el nombre "Luis González".

Como ahora mismo no tendrás ningún proyecto, sólo tiene sentido que configures Git a nivel global o de sistema.

## Entrega R1.3

1. Abre una terminal o consola.
2. Configura tu nombre de usuario para Git a nivel global. Elige tu nombre y tu primer apellido.
3. Configura tu dirección de correo electrónico para Git a nivel global. En este curso tiene que ser la misma que tienes vinculada a tu cuenta de GitHub (sólo en este curso, esto no es una condición de Git).
4. Configura la opción `core.autocrlf`, establece su valor a `false` a nivel global.
5. Lanza un comando para comprobar qué valores de configuración has establecido y haz captura tanto del comando como de la respuesta que te dé. Entrega la captura.
