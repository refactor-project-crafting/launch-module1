import { Link } from "react-router";

const Challenge2Control: React.FC = () => {
  return (
    <>
      <h1>Reto 2-fase 2: Estructuras de control</h1>
      <img
        src="/images/flujo.png"
        alt="Un array con cuatro nombres de persona"
      />
      <p>
        En JavaScript usamos la palabra <em>flujo</em> para referirnos al orden
        en que se ejecutan las instrucciones de un programa. El flujo que hemos
        estado viendo principalmente era el flujo secuencial, que es cuando las
        sentencias (órdenes) se ejecutan una detrás de otra, en el orden en que
        aparecen en el código.
      </p>
      <p>
        Las estructuras de control nos permiten modificar el flujo de ejecución
        de un programa. Es decir, nos permiten decidir cuándo el flujo no va a
        ser secuencial.
      </p>
      <div className="featured">
        <h3>¿JavaScript o TypeScript?</h3>

        <p>
          Te habrás dado cuenta de que, aunque ya estemos trabajando con
          TypeScript, a veces nos referimos a reglas de JavaScript. En estos
          casos estamos hablando de cosas que ocurren{" "}
          <strong>en runtime (tiempo de compilación)</strong>, donde TypeScript
          ya no existe y el único que opera es JavaScript. Por eso es importante
          conocer las reglas de JavaScript, aunque estemos programando en
          TypeScript.
        </p>

        <p>
          En este apartado hablamos del orden que sigue el entorno de ejecución
          para ir de una línea a otra de nuestro código mientras lo está
          interpretando. Es decir, estamos hablando de algo que ocurre en
          runtime, por lo que nos referimos a JavaScript.
        </p>

        <p>
          Es importante que tengas a mano siempre{" "}
          <strong>la Biblia de JavaScript</strong>:{" "}
          <Link
            to="https://developer.mozilla.org/en/docs/Web/JavaScript"
            target="_blank"
          >
            la documentación de MDN
          </Link>
          . Allí encontrarás todas las reglas de JavaScript.
        </p>
      </div>
      <p>
        Vamos con la primera de las estructuras de control que vamos a aprender
        hoy:{" "}
        <Link to="/challenge2/estructuras-de-control/condicionales">
          los condicionales
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2Control;
