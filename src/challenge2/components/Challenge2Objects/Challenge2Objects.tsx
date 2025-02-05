import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge2Objects: React.FC = () => {
  return (
    <>
      <h1>Reto 2-fase 4: Objetos</h1>
      <img
        src="/images/objeto.png"
        alt="Un objeto de JavaScript llamado person"
      />
      <p>
        Vamos con uno de los tipos de datos más importantes de JavaScript: los{" "}
        <strong>objetos</strong>. Los objetos nos sirven para agrupar datos
        relacionados. Así como con un string podemos representar el nombre de
        una persona, con un objeto podemos representar varios datos de una
        persona, como su nombre, su edad, su altura, etc.
      </p>
      <CodeTs>{`const person = {
  name: "María",
  age: 34,
  height: 1.67,
  isMarried: false,
  childrenNames: ["Pablito", "Juanita", "Antoñito", "Pepita"],
  address: {
    street: "Calle Pinto",
    number: 3,
    city: "Zaragoza",
  },
};`}</CodeTs>
      <p>
        En el código anterior hemos declarado una variable llamada{" "}
        <code>person</code> y le hemos asignado <strong>un solo valor</strong>{" "}
        de tipo objeto. Este objeto tiene varias propiedades, como{" "}
        <code>name</code>, <code>age</code>, <code>height</code>,{" "}
        <code>isMarried</code>, <code>childrenNames</code> y{" "}
        <code>address</code>. Algunas de estas propiedades apuntan a valores de
        tipo string, otras a valores de tipo number, otras a valores de tipo
        boolean. Pero fíjate que otras apuntan a valores de tipo array (
        <code>childrenNames</code>) u objeto (<code>address</code>).
      </p>
      <p>
        Los objetos también nos permiten añadir funcionalidad en forma de
        métodos, ya los veremos más adelante.
      </p>
      <h2>Partes de un objeto</h2>
      <p>
        Un objeto en JavaScript está formado por un conjunto de propiedades y
        métodos. Cada propiedad/método tiene un nombre, al que también llamamos{" "}
        <em>key</em>, y un valor. El valor puede ser de cualquier tipo de dato.
      </p>
      <p>
        Por tanto, decimos que un objeto está formado por pares{" "}
        <em>key-value</em>.
      </p>
      <p>
        <strong>Nota</strong>: Las keys las vamos a escribir siempre con camel
        case y empezando en minúscula.
      </p>
      <div className="featured">
        <h3 id="tipos-primitivos">Tipos primitivos</h3>
        <p>
          Hasta ahora habíamos trabajado con tipos de datos string, number y
          boolean. A estos tipos se les llama <strong>tipos primitivos</strong>.
        </p>
        <p>
          Un tipo de dato primitivo <strong>no se puede mutar</strong>. La única
          manera que tenemos para modificar un valor de un tipo primitivo es
          reasignando un nuevo valor:
        </p>
        <CodeTs>{`let name = "María";
name = "María José";

let age = 34;
age = 35;`}</CodeTs>
        <p>
          Los objetos y las funciones (que veremos más adelante) son{" "}
          <strong>tipos de datos no primitivos</strong>. Los tipos de datos no
          primitivos sí se pueden mutar:
        </p>
        <CodeTs>{`const person = {
  name: "María",
  age: 34,
};

person.name = "María José";
person.age = 35;`}</CodeTs>
        <p>
          Fíjate que no hemos reasignado un objeto nuevo a <code>person</code>{" "}
          (no podríamos al haberla declarado con <code>const</code>), sino que
          hemos modificado el valor de sus propiedades. Se trata del mismo
          objeto, pero modificado. Es decir, hemos mutado el objeto.
        </p>
        <p>
          Lo vimos con los arrays, y esto es porque como ya sabes no existe el
          tipo array: <strong>los arrays son objetos</strong>, pero JS nos
          ofrece una sintaxis para trabajar con ellos de manera diferente a los
          objetos normales.
        </p>
      </div>
      <h2>Tipar los objetos</h2>
      <p>
        Hemos dicho anteriormente que cuando declaras una variable y la
        inicializas en la misma línea (inicializar es asignarle un valor por
        primera vez), no se pone la anotación de tipo porque TypeScript infiere
        su tipo. Esto lo podemos comprobar poniendo el cursor encima del
        identificador de la variable.
      </p>
      <p>
        ¿Y qué pasa con los objetos? Ponte encima del identificador y fíjate en
        el tipo que infiere:
      </p>
      <CodeTs>{`const person = {
  name: "María",
  age: 34,
};`}</CodeTs>
      <p>
        Ese tipo que ves es un <strong>tipo de objeto</strong>. Con los objetos
        no vamos a dejar nunca que TS infiera el tipo, sino que{" "}
        <strong>siempre vamos a anotarlo</strong>.
      </p>
      <p>De modo que el código anterior lo deberíamos escribir así:</p>
      <CodeTs>{`const person: { name: string; age: number } = {
  name: "María",
  age: 34,
};`}</CodeTs>
      <p>
        Pero en vez de escribirlo ahí directamente, vamos a darle un alias a ese
        tipo de objeto:
      </p>
      <CodeTs>{`type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "María",
  age: 34,
};`}</CodeTs>
      <p>
        La palabra reservada <code>type</code> (que es exclusiva de TS) nos
        permite crear un tipo a partir de otro. Hasta ahora hemos trabajado con
        tipos que ya venían con TS (number, string, string[], boolean[], etc...)
        pero con <code>type</code> podemos crear nuestros propios tipos.
      </p>
      <p>
        Vamos a explicar en este vídeo cómo tipar los objetos con{" "}
        <code>type</code>:
      </p>
      <div className="picture">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gjKtAvym0Yw?si=hYYmXgmg5eyYCHvB"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        Ahora ya puedes aprender cómo{" "}
        <Link to="/challenge2/objetos/acceder-propiedades-objeto/">
          acceder a las propiedades de un objeto
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2Objects;
