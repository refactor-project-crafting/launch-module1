import { Link } from "react-router";

const Challenge4A11y: React.FC = () => {
  return (
    <>
      <h2>
        Accesibilidad (<em>a11y</em>)
      </h2>
      <p>
        Cuando desarrollamos la capa de presentación de una web app, es muy
        importante tener en cuenta a todo el mundo. No todas las personas van a
        utilizar nuestra aplicación de la misma manera ni todas las personas
        tienen las mismas capacidades a la hora de enfrentarse a la tecnología.
      </p>
      <p>
        Cuando estamos probando nuestras aplicaciones, tendemos a pensar que se
        van a usar tal y como nosotros/as las estamos usando. Pero no todo el
        mundo tiene la misma capacidad de visión. Hay gente que ve peor, hay
        gente que necesita poner la letra más grande, hay gente que confunde los
        colores, hay gente que tiene problemas con los efectos visuales en
        movimiento, y hay gente que no ve en absoluto.
      </p>
      <p>
        También hay gente que no puede utilizar un ratón y manejará nuestras
        aplicaciones con el teclado.
      </p>
      <p>
        Y también hay gente que tiene mal pulso y no puede pulsar un botón
        pequeño sin pulsar varios a la vez, o que no es capaz de hacer click en
        el pequeño checkbox que hemos puesto en nuestro formulario.
      </p>
      <p>
        La accesibilidad, también conocida como{" "}
        <strong>
          <em>a11y</em>
        </strong>{" "}
        (de <em>accesibility</em>) es la disciplina que se encarga de buscar que
        nuestras aplicaciones sean accesibles a todo el mundo.
      </p>
      <p>
        A lo largo del curso iremos trabajando todos los criterios que tenemos
        que tener en cuenta para que nuestras interfaces de usuario sean
        accesibles.
      </p>
      <h3 id="entrega-r4-a11y-informe">
        Entrega <code>R4-a11y-informe</code>
      </h3>
      <p>
        <Link to="https://codesandbox.io/p/sandbox/4f7rx2" target="_blank">
          Aquí
        </Link>{" "}
        tienes una web a la que debes realizar un análisis de accesibilidad.
      </p>
      <p>
        Instálate en tu navegador la extensión WAVE para realizar el análisis.
      </p>
      <p>
        Entrega una lista de puntos que incumpla esta web respecto a
        accesibilidad. Cuidado, que hay alguno más de los que te indicará WAVE.
      </p>
      <h3 id="entrega-r4-a11y-mejoras">
        Entrega <code>R4-a11y-mejoras</code>
      </h3>
      <p>
        Arregla los puntos que has listado y entrega la URL con la versión
        mejorada en accesibilidad.
      </p>
    </>
  );
};

export default Challenge4A11y;
