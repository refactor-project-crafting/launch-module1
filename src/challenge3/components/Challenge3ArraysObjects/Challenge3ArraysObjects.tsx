import { Link } from "react-router";
import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3ArraysObjects: React.FC = () => {
  return (
    <>
      <h1>Reto 3-fase 3: Trabajando con arrays y objetos</h1>
      <img
        src="/images/arrays-objects.png"
        alt="Símbolos de corchetes y llaves"
      />
      <p>
        Como ya sabes, los arrays y los objetos son dos estructuras de datos muy
        importantes en JavaScript. Primero hagamos un pequeño recordatorio de
        qué tienes que tener en cuenta para declararlos en TypeScript:
      </p>
      <h3>Declarar objetos</h3>
      <p>
        Los objetos en TypeScript siempre hay que tiparlos con un tipo creado
        previamente por nosotros. Por ejemplo:
      </p>
      <CodeTs>{`type Person = {
  name: string;
  age: number;
  isMarried: boolean;
};

const luis: Person = {
  name: "Luis",
  age: 35,
  isMarried: true,
};`}</CodeTs>
      <CodeTs>{`type Car = {
  brand: string;
  model: string;
  year: number;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2019,
};`}</CodeTs>
      <p>
        Siempre que declares una variable que apunta a un objeto, tendrás que
        escribir la anotación de tipo.
      </p>
      <h3>Declarar arrays</h3>
      <p>
        Si declaras una variable que apunta a un array y ese array contiene
        valores primitivos, TypeScript inferirá el tipo del array y no tendrás
        que escribir la anotación de tipo.
      </p>
      <CodeTs>{`const ages = [25, 30, 35, 40]; // Infiere el tipo number[]
const songTitles = ["Chop Suey", "La Macarena", "Bohemian Rhapsody"]; // Infiere el tipo string[]`}</CodeTs>
      <p>
        Si declaras un array vacío, TypeScript no puede saber de qué tipo serán
        los elementos, por lo que tendrás que escribir la anotación de tipo. Y
        en el caso de que el array tenga elementos de tipo objeto, también
        tendrás que decirle de qué tipo son los objetos.
      </p>
      <CodeTs>{`const studentsGrades: number[] = [];
const users: Person[] = [
  {
    name: "Luis",
    age: 35,
    isMarried: true,
  },
  {
    name: "Marta",
    age: 28,
    isMarried: false,
  },
];`}</CodeTs>
      <p>
        Vamos a ver ahora algunos métodos importantes para trabajar con{" "}
        <Link to="/challenge3/arrays-objetos/metodos-arrays/">
          arrays de datos
        </Link>
        .
      </p>
    </>
  );
};

export default Challenge3ArraysObjects;
