import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge2CreateArray: React.FC = () => {
  return (
    <>
      <h2>Crear y modificar arrays</h2>
      <h3>Crear un array</h3>
      <p>
        Para crear un array, simplemente tienes que poner corchetes y dentro los
        valores que quieras que tenga el array. Si quieres que el array esté
        vacío, simplemente pon corchetes sin nada dentro.
      </p>
      <CodeTs>{`const petNames = ["Luna", "Toby", "Bella"]; // Array con tres nombres de mascotas
const ownerNames: string[] = []; // Array vacío`}</CodeTs>
      <div className="featured">
        <h3>Singular y plural</h3>

        <p>
          A la hora de nombrar variables, el uso del singular y el plural me va
          a dar información sobre el tipo de dato que almacena la variable. Si
          la variable se llama <code>petName</code>, sabré que almacena un solo
          nombre de mascota. Si la variable se llama <code>petNames</code>,
          sabré que almacena varios nombres de mascotas.
        </p>

        <p>
          Por norma general, si una variable almacena un array, su nombre será
          en plural.
        </p>
      </div>
      <p>
        Hay otra manera de crear un array, no es muy común pero es útil en
        ciertas situaciones:
      </p>
      <CodeTs>{`const petNames = Array("Luna", "Toby", "Bella"); // Array con tres nombres de mascotas
`}</CodeTs>
      <h3>Modificar un array</h3>
      <p>
        En una sección posterior trabajaremos los métodos de los arrays, donde
        podrás ver que algunos de ellos modifican el array. Por ejemplo, el
        método <code>push()</code> añade elementos al final de un array.
      </p>
      <CodeTs>{`const petNames = ["Luna", "Toby", "Bella"];

petNames.push("Max"); // petNames quedaría así: ["Luna", "Toby", "Bella", "Max"]`}</CodeTs>
      <div className="featured">
        <h3>
          ¿Modificar un array declarado con <code>const</code>?
        </h3>
        <p>
          En el código anterior vemos que la variable <code>petNames</code> está
          declarada con <code>const</code>, pero aún así podemos modificarla.
          ¿Por qué?
        </p>
        <p>
          La razón es que <code>const</code> evita que a una variable{" "}
          <strong>se le pueda reasignar</strong> un nuevo valor. Ya sabes que el
          operador de asignación es <code>=</code>, así que <code>const</code>{" "}
          evita que hagamos algo como esto:
        </p>
        <CodeTs>
          {`const petNames = ["Luna", "Toby", "Bella"];

petNames = ["Luna", "Toby", "Bella", "Max"]; // Esto daría un error porque es una reasignación`}
        </CodeTs>
        <p>
          Es decir, va a evitar que sustituyamos el array anterior por otro
          nuevo. Pero no va a evitar que modifiquemos el array y que cambie su
          forma. A esto lo llamamos <strong>mutar</strong> el array. Sigue
          siendo el mismo, pero tiene otra forma:
        </p>
        <CodeTs>{`const petNames = ["Luna", "Toby", "Bella"];

petNames.push("Max"); // petNames quedaría así: ["Luna", "Toby", "Bella", "Max"]`}</CodeTs>
      </div>
      <p>
        Vamos a ver ahora diferentes maneras de{" "}
        <Link to="/challenge2/arrays/recorrer-un-array/">
          recorrer un array
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge2CreateArray;
