import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge2TypeChecking: React.FC = () => {
  return (
    <>
      <h2>Type-checking</h2>
      <p>
        El <strong>type-checking</strong> es una de las características más
        importantes de TypeScript. Es el proceso que realiza el compilador de
        TypeScript para comprobar que el código que has escrito cumple con las
        reglas de tipos que has definido.
      </p>
      <p>
        Fíjate en la última frase del párrafo anterior: &quot;cumple con las
        reglas de tipos que has definido&quot;. Esto significa que en TypeScript{" "}
        <strong>tú</strong> defines las reglas de tipos, y el compilador se
        encarga de comprobar que tu código las siga.
      </p>
      <p>
        En el momento que declaras una variable <code>studentName</code> y le
        asignas el valor <code>&quot;Luis&quot;</code>, estás decidiendo que{" "}
        <code>studentName</code> será de tipo <code>string</code>. En base a esa
        regla que has decidido, TypeScript se encargará, mediante su
        type-checking, de comprobar que <code>studentName</code> siempre sea de
        tipo <code>string</code>.
      </p>
      <CodeTs>{`let studentName = "Luis";

studentName = studentName.toUpperCase();`}</CodeTs>
      <p>
        El compilador de TS, al llegar al método <code>toUpperCase</code>,
        comprobará el tipo de <code>studentName</code>. Al ver que es un string,
        no lanzará ningún error, porque sabe que los strings tienen un método{" "}
        <code>toUpperCase</code>.
      </p>
      <p>
        Si pruebas a cambiar <code>&quot;Luis&quot;</code> por un{" "}
        <code>30</code>, TypeScript te dará un error si intentas compilar el
        código, porque la variable <code>studentName</code> es de tipo number, y
        los números no tienen un método <code>toUpperCase</code>.
      </p>
      <div className="featured">
        <h3>Integrado en el editor</h3>

        <p>
          Visual Studio Code tiene integrado el compilador de TypeScript. Es por
          esto que los errores de compilación los puedes ver incluso antes de
          compilar el código. El propio editor te los marca en rojo antes de que
          compiles.
        </p>
      </div>
      <h3>Tipos literales</h3>
      <p>
        ¿Recuerdas las expresiones literales? Eran las expresiones donde
        literalmente escribíamos el valor al que resolvían. En TypeScript, los{" "}
        <strong>tipos literales</strong> son tipos donde literalmente escribimos
        el único valor que pueden tener.
      </p>
      <p>
        Por ejemplo, si digo que una variable <code>name</code> es de tipo
        string, en esa variable puede ir cualquier cadena. Pero si digo que{" "}
        <code>name</code> es de tipo <code>&quot;Luis&quot;</code>, entonces{" "}
        <code>name</code> solo puede tener el valor{" "}
        <code>&quot;Luis&quot;</code>.
      </p>
      <p>
        Cuando declaramos una variable con <code>let</code> y le asignamos un
        string, entonces TypeScript <strong>infiere</strong> que esa variable es
        de tipo string. Pero si la declaramos con <code>const</code>, el tipo no
        va a ser string sino un tipo literal igual a la cadena que le hemos
        asignado.
      </p>
      <p>
        Haz la prueba. Para saber qué tipo tiene una variable, pon el cursor
        sobre ella y espera a que te muestre su tipo. Comprueba la diferencia de
        tipos entre <code>studentName</code> y <code>workerName</code>:
      </p>
      <CodeTs>{`let studentName = "Luis"; // El tipo es string, porque más tarde podrá tener otro valor string
const workerName = "Luis"; // El tipo es "Luis", porque nunca podrá tener otro valor`}</CodeTs>
      <h3>Anotaciones de tipo</h3>
      <p>
        Una de las principales diferencias entre JavaScript y TypeScript son las{" "}
        <strong>anotaciones de tipo</strong>. En TypeScript puedes anotar el
        tipo de una variable, poniendo dos puntos y el tipo detrás del
        identificador de la variable.
      </p>
      <CodeTs>{`let studentName: string;

studentName = "Luis";`}</CodeTs>
      <p>
        ¿Por qué en los ejemplos anteriores no aparecía ninguna anotación de
        tipo? Porque TypeScript es capaz de <strong>inferir</strong> el tipo de
        una variable si le asignas un valor en la misma línea en la que la
        declaras.
      </p>
      <CodeTs>{`let studentName = "Luis"; // TypeScript infiere que studentName es de tipo string

let workerName; // TypeScript no puede inferir el tipo, porque no le hemos asignado un valor`}</CodeTs>
      <div className="featured">
        <h3>¿Las anotaciones de tipo son obligatorias?</h3>

        <p>
          Si le estás dando el valor a la variable en la misma línea en la que
          la declaras, no es necesario que anotes el tipo. Pero si no le das
          valor, o si le das un valor en otra línea, entonces sí es necesario
          que anotes el tipo. Si no lo haces, TypeScript inferirá un tipo
          llamado <code>any</code>, que es un tipo muy problemático y que
          debemos evitar, como aprenderemos más adelante.
        </p>
      </div>
      <p>Aquí tienes un resumen de esta sección en vídeo:</p>
      <div className="picture">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U8_hHkccJ3w?si=GnDdalokeiqRnTwk"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Challenge2TypeChecking;
