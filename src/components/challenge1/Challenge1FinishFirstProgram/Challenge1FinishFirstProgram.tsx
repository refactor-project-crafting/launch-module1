import { Link } from "react-router";
import CodeText from "../../CodeText/CodeText";

const Challenge1FinishFirstProgram: React.FC = () => {
  return (
    <>
      <h2>Finaliza tu primer programa: School Report</h2>
      <p>
        Ahora sí estás preparado/a para escribir tu primer programa completo,
        siendo consciente de todas las piezas que lo componen. El programa se
        llamará School Report (crea una carpeta con un nombre apropiado,
        siguiendo los consejos que has visto en estos materiales).
      </p>
      <p>
        Es importante que tu proyecto no contenga nada que no sea del programa.
        Es decir, en este proyecto no debería haber ningún archivo, carpeta o
        línea de código que no esté ahí para conseguir el objetivo solicitado.
      </p>
      <p>
        La lista de <strong>requisitos</strong> es un texto que describe las
        funcionalidades que debe tener tu programa. Es una guía que te ayudará a
        saber cuándo has terminado.
      </p>
      <h2>Requirements</h2>
      <ul>
        <li>
          El programa debe almacenar los siguientes datos de dos estudiantes
          (invéntate los datos):
          <ul>
            <li>Nombre</li>
            <li>Apellidos</li>
            <li>Edad</li>
          </ul>
        </li>
        <li>
          También debe almacenar los siguientes datos de tres cursos (invéntate
          los datos):
          <ul>
            <li>Nombre</li>
            <li>
              Dificultad (&quot;básico&quot;, &quot;intermedio&quot; o
              &quot;avanzado&quot;)
            </li>
            <li>Duración (en horas)</li>
          </ul>
        </li>
        <li>El programa debe calcular la edad media de los estudiantes.</li>
        <li>
          El programa debe mostrar en consola el siguiente texto (los datos son
          de ejemplo):
        </li>
      </ul>
      <CodeText>
        {`INFORME DE LA ESCUELA

  Cursos:
  - Introducción a la programación (nivel básico, 20 horas)
  - TypeScript Avanzado (nivel avanzado, 12 horas)
  - Gestión del estado en React (nivel intermedio, 15 horas)

  Alumnos:
  - Luis García, 32 años
  - Marta López, 28 años

  Edad media de los alumnos: 30 años`}
      </CodeText>
      <div className="featured">
        <h3>Los requisitos</h3>

        <p>
          Si te dan una lista de requisitos, tu programa no puede hacer lo que a
          ti te apetezca o lo que te parezca mejor. Tu programa tiene que hacer
          exactamente lo que te piden. Tu libertad de decisión y donde podrás
          aplicar tus criterios será en el <strong>cómo</strong> hace tu
          programa lo que te piden.
        </p>

        <p>
          El texto se tiene que mostrar tal cual, con los mismos saltos de
          línea, espacios, mayúsculas, etc. Sólo tiene que variar en los datos
          que se muestran, que serán los que tú hayas inventado.
        </p>
      </div>
      <h2 id="entrega-r1-school-report">
        Entrega <code>R1-school-report</code>
      </h2>
      <p>
        Tu programa está en una carpeta de tu disco duro. Para que pueda vivir
        fuera de tu ordenador, tienes que subirlo a un repositorio de tu cuenta
        de GitHub.
      </p>
      <p>
        Estamos seguros de que eres capaz de hacerlo sin explicaciones, así que
        sólo te vamos a dar un par de pistas iniciales:
      </p>
      <ul>
        <li>
          Para poder subir tu código a un repositorio de GitHub, primero tienes
          que tener un repositorio en <strong>local</strong>, es decir, en tu
          máquina. Inicializa mediante un comando de Git un repositorio en la
          carpeta de tu proyecto.
        </li>
        <li>
          Una vez que tienes un repositorio en local, tendrás que crear un
          repositorio vacío en tu cuenta de GitHub.
        </li>
        <li>
          Para poder subir tu código, primero tendrás que realizar un{" "}
          <strong>commit</strong> con él.
        </li>
        <li>Una vez que tienes un commit, podrás subir tu código a GitHub.</li>
      </ul>
      <p>
        Cuando finalices este programa, puedes continuar con la{" "}
        <Link to="/challenge1/entorno-de-desarrollo">fase 4</Link>.
      </p>
    </>
  );
};

export default Challenge1FinishFirstProgram;
