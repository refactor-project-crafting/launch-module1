import { Link } from "react-router";

const Challenge1Deliveries: React.FC = () => {
  return (
    <>
      <h2>Entregas del reto 1</h2>
      <p>
        Aquí tienes el resumen de todas las entregas que te pedimos en el reto
        1. Cada vez que quieras hacer una entrega, ve a este formulario y
        entrega el ejercicio que desees:{" "}
        <Link to="https://forms.gle/JfS3rSYyWbVwxih68" target="_blank">
          Formulario de entregas
        </Link>
        .
      </p>
      <p>
        Puedes rellenar el formulario tantas veces como quieras. Puedes
        rellenarlo una vez por cada ejercicio que quieras entregar, puedes
        rellenarlo para entregar dos o tres a la vez, y puedes rellenarlo para
        entregar el mismo ejercicio más de una vez por si quieres corregirlo.
      </p>
      <h3>
        <Link to="/challenge1/os#entrega-r1-cli">Entrega R1-CLI</Link>
      </h3>
      <p>
        Tienes que entregar un zip con una captura de pantalla de cada uno de
        los pasos solicitados. Cada captura tiene que corresponderse{" "}
        <strong>a un paso</strong> y estar en formato imagen (no envíes un
        documento con todas las imágenes pegadas dentro).
      </p>
      <p>
        Ponle el número del paso al nombre del archivo para poder identificar
        cada captura.
      </p>
      <h3>
        <Link to="/challenge1/herramientas/configuracion-vs-code#entrega-r1-vscode">
          Entrega R1-VSCode
        </Link>
      </h3>
      <p>
        Tienes que entregar una captura de pantalla de los settings del VS Code.
      </p>
      <h3>
        <Link to="/challenge1/herramientas/configuracion-git#entrega-r1-git">
          Entrega R1-git
        </Link>
      </h3>
      <p>
        Tienes que entregar la captura de pantalla solicitada, mostrando tanto
        el comando como la salida de la terminal después de lanzar el comando.
      </p>
      <h3>
        <Link to="/challenge1/calentando-motores-js/variables#entrega-r1-variables">
          Entrega R1-variables
        </Link>
      </h3>
      <p>En el ejercicio 1 tendrás que entregar la respuesta en texto.</p>
      <p>En el ejercicio 2 tendrás que entregar un código JS (en zip).</p>
      <h3>
        <Link to="/challenge1/calentando-motores-js/expresiones#entrega-r1-expresiones">
          Entrega R1-expresiones
        </Link>
      </h3>
      <p>En los ejercicios 1 y 2 tendrás que entregar código JS (en zip).</p>
      <p>En el ejercicio 3 tendrás que entregar la respuesta en texto.</p>
      <h3>
        <Link to="/challenge1/calentando-motores-js/finaliza-tu-primer-programa#entrega-r1-school-report">
          Entrega R1-school-report
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL de tu repositorio de GitHub con el programa.
      </p>
      <h3>
        <Link to="/challenge1/entorno-de-desarrollo/tu-segundo-programa#entrega-r1-user-validation">
          Entrega R1-user-validation
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL de tu repositorio de GitHub con el programa.
      </p>
      <h3>
        <Link to="/challenge1/entorno-de-desarrollo/operaciones-con-strings#entrega-r1-initial">
          Entrega R1-initial
        </Link>
      </h3>
      <p>Tendrás que entregar código JS (en zip).</p>
      <h3>
        <Link to="/challenge1/el-programa-definitivo#entrega-r1-login-register">
          Entrega R1-login-register
        </Link>
      </h3>
      <p>
        Tienes que entregar la URL de tu repositorio de GitHub con el programa.
      </p>
    </>
  );
};

export default Challenge1Deliveries;
