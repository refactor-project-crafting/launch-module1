import { Link } from "react-router";

const Challenge1Definitive: React.FC = () => {
  return (
    <>
      <h1>Reto 1-fase 5: El programa definitivo del reto</h1>
      <img
        src="/images/candado.webp"
        alt="Un campo para password con un candado"
      />
      <p>
        Después de todo lo que has aprendido, es el momento de que nos ayudes
        con lo que te pedimos al principio del reto.
      </p>
      <p>
        Tenemos una web con dos formularios, uno de register y otro de login.
        Necesitamos que nos ayudes a hacer el programa que valide los datos que
        se introducen en estos formularios. Las validaciones serán las que ya te
        pedimos en un programa anterior.
      </p>
      <h3>Requirements</h3>
      <ul>
        <li>
          Dado un nombre de usuario, el programa debe comprobar si tiene 5
          caracteres o más.
        </li>
        <li>
          Dada una contraseña, el programa debe comprobar:
          <ul>
            <li>Si tiene 8 caracteres o más.</li>
            <li>Si tiene al menos un número.</li>
            <li>Si tiene al menos una letra mayúscula.</li>
          </ul>
        </li>
        <li>
          Dada una segunda contraseña, el programa debe comprobar si es igual a
          la primera contraseña.
        </li>
        <li>Dada una edad, el programa debe comprobar si es mayor de edad.</li>
      </ul>
      <h3>User stories</h3>
      <p>
        Otra manera de describir los requisitos de un programa son las{" "}
        <strong>User Stories</strong>.
      </p>
      <p>
        Una User Story describe una funcionalidad de un programa desde el punto
        de vista del usuario. Tiene este esquema:
      </p>
      <ul>
        <li>
          <strong>Como</strong> [tipo de usuario]
        </li>
        <li>
          <strong>Quiero</strong> [acción o funcionalidad]
        </li>
        <li>
          <strong>Para</strong> [beneficio o propósito]
        </li>
      </ul>
      <p>Aquí tienes las que corresponden a este programa:</p>
      <ol>
        <li>
          Como usuario, quiero poder introducir mis datos para registrarme.
        </li>
        <li>
          Como usuario, quiero que se me informe con un mensaje de error si mis
          datos no cumplen los requisitos de la aplicación, para corregirlos y
          completar el registro correctamente.
        </li>
        <li>
          Como usuario, quiero que se me informe con un mensaje de éxito si mi
          registro ha sido completado con éxito, para confirmar que mi cuenta ha
          sido creada correctamente.
        </li>
        <li>
          Como usuario, quiero poder introducir mis credenciales para iniciar
          sesión, para acceder a mi cuenta y utilizar la aplicación.
        </li>
        <li>
          Como usuario, quiero que se me informe con un mensaje de error si mis
          credenciales no son las correctas, para saber que debo corregirlas e
          intentar nuevamente.
        </li>
        <li>
          Como usuario, quiero poder acceder a la aplicación si mis credenciales
          son las correctas, para utilizar sus funcionalidades y gestionar mi
          cuenta.
        </li>
      </ol>
      <h2>Tu parte</h2>
      <p>
        Vas a incorporarte al equipo de desarrollo de esta aplicación. Ya se ha
        construido parte de la funcionalidad, pero faltan las validaciones de
        los datos que ingresa el usuario, y ahí entras tú.
      </p>
      <p>
        Clónate el repositorio del proyecto:{" "}
        <Link to="https://github.com/refactor-project-crafting/launch-login-register">
          https://github.com/refactor-project-crafting/launch-login-register
        </Link>
      </p>
      <p>
        Después de clonarlo, abre el proyecto en el VS Code e instala las
        dependencias con el comando <code>npm install</code>.
      </p>
      <p>
        Para poder ver la aplicación, debes ejecutar el comando{" "}
        <code>npm start</code> y abrir tu navegador en la dirección{" "}
        <code>http://localhost:3000</code>.
      </p>
      <h3>Validaciones</h3>
      <p>
        En el proyecto encontrarás un módulo llamado <code>auth</code>, que
        tiene dos archivos, <code>validation.js</code> y <code>login.js</code>.
      </p>
      <p>
        En <code>validation.js</code> encontrarás varias funciones para validar
        cada uno de los datos que se le piden al usuario en el formulario de
        registro. Dentro de cada función encontrarás unos comentarios que
        describen el código que tienes que añadir.
      </p>
      <p>
        Para comprobar si funciona correctamente, abre la página de registro e
        introduce datos erróneos primero, y luego datos correctos. Cuando hay
        error debería mostrarse en rojo un mensaje de error. Y cuando no hay
        error debería redirigirte a una página diciéndote que te has registrado
        correctamente.
      </p>
      <p>
        En <code>login.js</code> tendrás que comprobar si las credenciales
        introducidas son las mismas que las almacenadas. También tienes unos
        comentarios explicándote qué tienes que hacer.
      </p>
      <p>
        Para comprobar si funciona correctamente, abre la página de login e
        introduce unas credenciales diferentes a las que introdujiste al
        registrarte. Debería aparecer un mensaje de error en rojo. Luego
        introduce las credenciales correctas y debería redirigirte a una página
        de bienvenida.
      </p>
      <h3 id="entrega-r1-login-register">
        Entrega <code>R1-login-register</code>
      </h3>
      <p>
        Cuando hayas terminado, sube el proyecto a un repositorio en tu GitHub.
      </p>
    </>
  );
};

export default Challenge1Definitive;
