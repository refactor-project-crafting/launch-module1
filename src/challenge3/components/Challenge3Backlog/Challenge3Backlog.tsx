import CodeText from "../../../components/CodeText/CodeText";

const Challenge3Backlog: React.FC = () => {
  return (
    <>
      <h2>Aplicación de sorteos - Backlog</h2>
      <p>
        Aquí tienes el backlog de tareas, crea un commit por cada tarea que
        completes. Puedes añadir commits extra si tienes que hacer fixes o
        añadir algo que hayas olvidado.
      </p>
      <p>Comprueba cada tarea antes de darla por finalizada.</p>
      <h3>Task 1. Inicio de sesión</h3>
      <p>
        Crea una función para loguear al usuario, llamada <code>loginUser</code>
        . Recibirá un email y una contraseña, y no devolverá nada. Busca en el
        listado de usuarios registrados de <code>programData</code> si existe un
        usuario con ese email y esa contraseña. Si no existe, debe imprimir un
        error por consola y finalizar el programa (busca cómo finalizar la
        ejecución de un programa con <code>process.exit</code>).
      </p>
      <p>
        Si existe, guarda el email del usuario en{" "}
        <code>programData.userEmail</code> y guarda si es admin o no en{" "}
        <code>programData.isAdmin</code>. Recuerda invocar después a la función{" "}
        <code>saveData</code> para guardar los cambios en disco duro. Imprime un
        saludo por consola.
      </p>
      <p>
        Con esta tarea, el usuario ya podrá iniciar sesión en la aplicación. En
        el archivo <code>storage.ts</code> tienes un array con usuarios
        registrados que puedes usar para probarlo.
      </p>
      <p>
        Descomenta las líneas 2 y 12 del archivo <code>index.ts</code> para
        probarlo.
      </p>
      <h3>Task 2. Crear un sorteo</h3>
      <p>
        Crea una función para añadir un sorteo, llamada{" "}
        <code>createGiveaway</code>. No recibirá ni devolverá nada. En su
        interior, invoca a la función <code>askUserNewGiveawayData</code> para
        pedirle al usuario los datos del nuevo sorteo. Esta función te devolverá
        un objeto con los datos que ha introducido el usuario.
      </p>
      <p>
        Añade el sorteo al array <code>giveaways</code> de{" "}
        <code>programData</code>, y después invoca a la función{" "}
        <code>saveData</code> para guardar los cambios en disco duro.
      </p>
      <p>Recuerda imprimir algún mensaje para darle feedback al usuario.</p>
      <p>
        Descomenta las líneas 2, 3, 8 y 59 del archivo <code>ui.ts</code> para
        probarlo.
      </p>
      <h3>Task 3. Ver todos los sorteos</h3>
      <p>
        Crea una función para ver todos los sorteos, llamada{" "}
        <code>listGiveaways</code>. No recibirá ni devolverá nada.
      </p>
      <p>
        Si no hay sorteos debe imprimir un mensaje por consola indicándolo. Si
        hay sorteos, deberá imprimir por consola el siguiente mensaje:
        &quot;Éstos son los X sorteos disponibles:&quot; (donde X es el número
        de sorteos que hay). Después, por cada sorteo, imprimirá un mensaje con
        un número (empezando por 1), el nombre del sorteo y la red social en la
        que se va a realizar.
      </p>
      <p>Ejemplo de salida por consola:</p>
      <CodeText>{`Éstos son los 3 sorteos disponibles:

1. Sorteo de un iPhone en Instagram
2. Sorteo de un viaje a París en Twitter
3. Sorteo de un coche en Facebook`}</CodeText>
      <p>
        Descomenta las líneas 6 y 54 del archivo <code>ui.ts</code> para
        probarlo.
      </p>
      <h3>Task 4. Eliminar un sorteo</h3>
      <p>
        Crea una función para eliminar un sorteo, llamada{" "}
        <code>deleteGiveaway</code>. Recibirá el número de sorteo que se quiere
        eliminar. No devolverá nada.
      </p>
      <p>
        Si el sorteo no existe, debe imprimir un mensaje por consola
        indicándolo. Si existe, debe eliminarlo del array <code>giveaways</code>{" "}
        de <code>programData</code>, y después invocar a la función{" "}
        <code>saveData</code> para guardar los cambios en disco duro.
      </p>
      <p>Recuerda imprimir algún mensaje para darle feedback al usuario.</p>
      <p>
        Descomenta las líneas 4 y 70 del archivo <code>ui.ts</code> para
        probarlo.
      </p>
      <h3>Task 5. Inscribirse en un sorteo</h3>
      <p>
        Crea una función para inscribirse en un sorteo, llamada{" "}
        <code>enterGiveaway</code>. Recibirá el número de sorteo en el que se
        quiere inscribir. No devolverá nada.
      </p>
      <p>
        Si el sorteo no existe, debe imprimir un mensaje por consola
        indicándolo. Si existe, debe añadir el usuario a la lista de
        participantes del sorteo, y después invocar a la función{" "}
        <code>saveData</code> para guardar los cambios en disco duro.
      </p>
      <p>Recuerda imprimir algún mensaje para darle feedback al usuario.</p>
      <p>
        Descomenta las líneas 5 y 63 del archivo <code>ui.ts</code> para
        probarlo.
      </p>
      <h3>Task 6. Ver sorteos en los que estoy inscrito</h3>
      <p>
        Crea una función para ver los sorteos en los que está inscrito el
        usuario, llamada <code>listUserGiveaways</code>. No recibirá ni
        devolverá nada.
      </p>
      <p>
        Si no hay sorteos en los que esté inscrito, debe imprimir un mensaje por
        consola indicándolo. Si hay sorteos, deberá imprimir por consola el
        siguiente mensaje: &quot;Estás inscrito en los siguientes X
        sorteos:&quot; (donde X es el número de sorteos en los que está
        inscrito). Después imprimirá por cada sorteo en el que está inscrito un
        mensaje con un número (empezando por 1), el nombre del sorteo y la red
        social en la que se va a realizar.
      </p>
      <p>
        Descomenta las líneas 7 y 73 del archivo <code>ui.ts</code> para
        probarlo.
      </p>
    </>
  );
};

export default Challenge3Backlog;
