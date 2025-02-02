import { Link } from "react-router";
import CodeText from "../../CodeText/CodeText";

const Challenge1SecondProgram: React.FC = () => {
  return (
    <>
      <h2>Tu segundo programa</h2>
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
      <h3>Operando con strings</h3>
      <p>
        Para desarrollar este programa, tendrás que aprender primero a{" "}
        <Link to="/challenge1/entorno-de-desarrollo/operaciones-con-strings">
          operar con strings
        </Link>
        .
      </p>
      <h3>Operando con numbers</h3>
      <p>
        Ahora revisa cómo{" "}
        <Link to="/challenge1/entorno-de-desarrollo/operaciones-con-numbers">
          operar con numbers
        </Link>{" "}
        antes de continuar.
      </p>
      <h3 id="entrega-r1-user-validation">
        Entrega <code>R1-user-validation</code>
      </h3>
      <p>
        Usando el starter proporcionado, crea un programa que declare cuatro
        variables:
      </p>
      <ul>
        <li>una para el nombre de usuario</li>
        <li>una para la contraseña</li>
        <li>una para la repetición de la contraseña</li>
        <li>una para la edad</li>
      </ul>
      <p>
        El programa debe realizar las comprobaciones descritas en los requisitos
        e imprimir por consola el resultado de dichas comprobaciones.
      </p>
      <p>
        A continuación te presentamos los{" "}
        <strong>criterios de aceptación</strong>, un listado de checks que te
        permitirán comprobar si has completado el reto con éxito. Hay que
        tenerlos en cuenta desde el principio, pero sobre todo tienes que
        comprobarlos al final, cuando hayas terminado el programa.
      </p>
      <h3>Acceptance Criteria</h3>
      <ul>
        <li>
          El programa debe imprimir por consola el siguiente resultado:
          <CodeText>{`El nombre de usuario es válido: true
La contraseña es válida: true
La repetición de la contraseña es válida: true
Es mayor de edad: true`}</CodeText>
          (Mostrando <code>true</code> o <code>false</code> según corresponda)
        </li>
      </ul>
      <p>
        <strong>Nota</strong>: aunque conozcas algunas cosas de JavaScript que
        no hemos visto, no las uses para este programa. Debes desarrollar las
        funcionalidades sin <code>if</code>, bucles, funciones, etc. Sólo con lo
        que hemos visto hasta ahora en los materiales.
      </p>
      <p>
        Cuando finalices, ya sólo te queda ir al{" "}
        <Link to="/challenge1/el-programa-definitivo">
          programa definitivo del reto
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge1SecondProgram;
