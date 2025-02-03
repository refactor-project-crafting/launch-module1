import { Link } from "react-router";
import CodeJs from "../../../components/CodeJs/CodeJs";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge2TypeScript: React.FC = () => {
  return (
    <>
      <h1>Reto 2-fase 1: TypeScript</h1>
      <img src="/images/typescript.png" alt="Logotipo de TypeScript" />
      <p>
        Ya has empezado a usar JavaScript, pero el lenguaje de programación que
        usamos en el proyecto es <strong>TypeScript</strong>. No te preocupes,
        TypeScript se construye sobre JavaScript, por tanto todo lo que ya sabes
        de JavaScript va a seguir funcionando igual.
      </p>
      <p>
        Hasta ahora no tenías que compilar tu código porque Node.js y el browser
        son capaces de ejecutar directamente el JS que escribes. Al usar
        TypeScript necesitamos meter un paso de compilación. Párate un momento a
        repasar la parte del reto 1 donde hablábamos de esta diferencia:{" "}
        <Link to="/challenge1/calentando-motores-js#lenguajes-interpretados-vs-lenguajes-compilados">
          Lenguajes interpretados vs lenguajes compilados
        </Link>
        .
      </p>
      <p>Y aquí tienes una explicación en vídeo:</p>
      <div className="picture">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sBdWFzmiXN8?si=vfE2JuytK-WzZICZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Tipado fuerte</h2>
      <p>
        Has aprendido que en JavaScript los valores tienen un{" "}
        <strong>tipo</strong>. Hemos visto el tipo <strong>number</strong>, el
        tipo <strong>string</strong>, el tipo <strong>boolean</strong>. Si has
        investigado un poco, habrás visto que hay otros tipos, como{" "}
        <strong>object</strong> y <strong>function</strong>. Y hay más 😉.
      </p>
      <p>
        JavaScript es un lenguaje <strong>de tipado débil</strong>, esto quiere
        decir que la misma variable puede apuntar a un tipo de valor en un
        momento y luego a otro tipo de valor en otro momento. Esto es una
        característica de JS que lo hace un lenguaje muy flexible, pero que
        puede llevar a muchos errores difíciles de encontrar.
      </p>
      <p>Por ejemplo:</p>
      <CodeJs>{`// JS permite hacer esto
let x = 5; // x es de tipo number
x = "hola"; // ahora x es de tipo string`}</CodeJs>
      <div className="featured">
        <h3>Predictibilidad del código</h3>
        <p>
          Una de las características del buen código es su{" "}
          <strong>predictibilidad</strong>. Se debe poder predecir cómo se va a
          comportar el código en cada momento. Si yo declaro una variable con un
          valor de tipo string, y JavaScript permite reasignarle un valor de
          otro tipo, yo no puedo predecir que esa variable vaya a contener un
          string. Por tanto, llamar al método <code>toUpperCase</code> de esa
          variable me podría dar un error cuando después ejecute mi programa, y
          no lo puedo predecir con antelación.
        </p>
        <CodeJs>{`let greeting = "hola";
greeting.toUpperCase(); // Esto funciona

greeting = 5;
greeting.toUpperCase(); // Esto dará un error, y TypeScript me va a avisar con antelación`}</CodeJs>
        <p>
          El código tiene que ser <strong>predecible</strong>.
        </p>
      </div>
      <p>
        TypeScript, por contra, <strong>es un lenguaje de tipado fuerte</strong>
        . Esto quiere decir que una vez que una variable ha sido declarada con
        un tipo, no se le puede asignar un valor de otro tipo. Esto hace que el
        código sea mucho más predecible, y por tanto, más fácil de mantener y
        menos propenso a errores.
      </p>
      <CodeTs>{`let x = 5;
x = "hola"; // TypeScript no permite hacer esto`}</CodeTs>
      <p>
        <Link
          to="https://www.typescriptlang.org/play/?#code/DYUwLgBAHhC8EFYDcAoA9GiBRAzgYwCcBLAIxAmAEMIciBzAVyJADsxzgBblkagEw4B7HBEoAHBmxAiAnhEEkcIAgDdqeAM8BbQRAAqMsSADKhImMhbKBPNRDAIygoIKOWEZwCtBQA"
          target="_blank"
        >
          ⌨️⬆️ prueba este código ⬆️⌨️
        </Link>
      </p>
      <p>
        TypeScript nos va a ayudar a que nuestro código sea más predecible.
        Volviendo al ejemplo de la variable <code>greeting</code>:
      </p>
      <CodeTs>{`let greeting = "hola"; // Siempre va a ser tipo string
greeting.toUpperCase(); // Esto funciona

greeting = 5; // TypeScript no permite hacer esto
greeting.toUpperCase(); // Nunca se llegaría a ejecutar esta línea`}</CodeTs>
      <p>
        <Link
          to="https://www.typescriptlang.org/play/?#code/DYUwLgBA5gTi4EsB2UIF4ICIAWB7YAhpgNwQD0ZEAygiALYAOcEAbgROwM4gwRgINcETmBjIoAKFjx+KAHRhcAVQYMeAYQLcAFAEpSFCAFERQgGYBXJAGMEuJAQkTDJ62IBGICIU7CEUC1okMBBfYABbpBAtCAATL2BcXwIGKxDfAE8IXHduGDYIawBnuiEAFQy1KjcBSDoCGGt2EGAIHhhcXhAkCA6AK1wJIA"
          target="_blank"
        >
          ⌨️⬆️ prueba este código ⬆️⌨️
        </Link>
      </p>
      <p>
        ¿Quieres empezar? Pues venga, escribe{" "}
        <Link to="/challenge2/typescript/tu-primer-programa-en-typescript">
          tu primer programa en TypeScript
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2TypeScript;
