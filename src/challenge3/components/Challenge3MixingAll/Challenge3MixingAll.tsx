import CodeTs from "../../../components/CodeTs/CodeTs";

const Challenge3MixingAll: React.FC = () => {
  return (
    <>
      <h2>Mezclando todo</h2>
      <p>
        Algo que harás mucho en TypeScript es mezclar arrays y objetos. Casi
        todos los ejemplos de arrays que hemos visto hasta ahora eran con tipos
        primitivos, pero también puedes tener arrays de objetos.
      </p>
      <CodeTs>{`type Dog = {
  name: string;
  age: number;
  isCute: boolean;
};

const dogs: Dog[] = [
  {
    name: "Luna",
    age: 3,
    isCute: true,
  },
  {
    name: "Toby",
    age: 5,
    isCute: false,
  },
  {
    name: "Bella",
    age: 2,
    isCute: true,
  },
];`}</CodeTs>
      <p>
        A partir de este array puedes hacer todo lo que ya sabes hacer con, por
        ejemplo, arrays de números o de strings. Puedes recorrerlo, modificarlo,
        filtrarlo, etc.
      </p>
      <CodeTs>{`// Añado un nuevo perro al array
dogs.push({
  name: "Max",
  age: 4,
  isCute: true,
});`}</CodeTs>
      <CodeTs>{`// Filtro los perros que son cute
const cuteDogs = dogs.filter((dog) => dog.isCute);`}</CodeTs>
      <CodeTs>{`// Recorro el array y muestro un saludo a cada perro
dogs.forEach((dog) => {
  console.log(\`¡Hola, \${dog.name}!\`);
});`}</CodeTs>
      <CodeTs>{`// Ordeno los perros por edad
dogs.sort((dogA, dogB) => dogA.age - dogB.age);`}</CodeTs>
      <CodeTs>{`// Busco un perro que se llame Juancho
const juancho = dogs.find((dog) => dog.name === "Juancho");`}</CodeTs>
      <h3>Ejercicios</h3>
      <p>
        (Puedes utilizar <code>console.log</code> en cada paso para comprobar
        que estás haciendo lo correcto, pero no dejes los{" "}
        <code>console.log</code> en el código final)
      </p>
      <ol>
        <li>
          Crea un array de objetos con tus canciones favoritas. Cada canción
          tendrá un título y un artista.
        </li>
        <li>
          Añade dos nuevas canciones al array, y que una de ellas sea
          &quot;Bohemian Rhapsody&quot;, de Queen.
        </li>
        <li>Elimina la segunda canción del array.</li>
        <li>
          Recorre el array y muestra por consola el título y el artista de cada
          canción.
        </li>
        <li>Ordena el array por artista.</li>
        <li>
          Busca una canción que se llame &quot;Bohemian Rhapsody&quot; y
          guárdala en una variable.
        </li>
        <li>Añade a la lista la canción &quot;Radio Ga Ga&quot;, de Queen.</li>
        <li>
          Obtén un nuevo array con las canciones de Queen y guárdalo en una
          variable.
        </li>
        <li>
          Crea una variable llamada <code>hasFarySongs</code> que sea{" "}
          <code>true</code> si alguna de las canciones del array es del Fary.
        </li>
        <li>
          Crea una variable llamada <code>allSongsAreFromQueen</code> que sea{" "}
          <code>true</code> si todas las canciones del array son de Queen.
        </li>
      </ol>
      <h3 id="entrega-r3-arrays-objetos-">
        Entrega <code>R3-arrays-objetos</code>
      </h3>
      <p>
        Entrega un archivo <code>.ts</code> con el código de los ejercicios.
      </p>
    </>
  );
};

export default Challenge3MixingAll;
