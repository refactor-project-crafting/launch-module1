import { Link } from "react-router";
import CodeHtml from "../../../components/CodeHtml/CodeHtml";

const Challenge4TagsAttributes: React.FC = () => {
  return (
    <>
      <h2>Etiquetas y atributos</h2>
      <p>
        Ya hemos hablado de qué son las etiquetas. Son marcas que sirven para
        delimitar contenido y decir qué es cada cosa. Una marca sirve para decir
        "aquí empieza un párrafo, y aquí acaba".
      </p>
      <CodeHtml>{`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil amet provident 
est sed totam sapiente voluptates perspiciatis cupiditate error ducimus. Error debitis 
minima placeat corporis nisi iste ipsum eaque illo.</p>`}</CodeHtml>
      <p>
        Las etiquetas pueden tener <strong>atributos</strong>. Un atributo es
        una característica que se le da a la etiqueta. Por ejemplo, la etiqueta{" "}
        <code>{`<a>`}</code> (un enlace) tiene un atributo <code>href</code> que
        sirve para decir a qué URL tiene que llevar el enlace.
      </p>
      <CodeHtml>
        {`<a href="https://the-refactor-project.com">The Refactor Project</a>`}
      </CodeHtml>
      <p>
        Otro ejemplo es la etiqueta <code>{`<img>`}</code> (una imagen). Tiene
        un atributo <code>src</code> que sirve para decir qué imagen tiene que
        mostrar. También tiene un atributo <code>alt</code> que sirve para decir
        qué texto tiene que mostrar si la imagen no se puede ver.
      </p>
      <CodeHtml>
        {`<img src="https://placekitten.com/200/300" alt="Un gatito" />`}
      </CodeHtml>
      <p>
        Los atributos se escriben dentro de la etiqueta de apertura, separados
        por un espacio. Cada atributo tiene un nombre, seguido de un signo igual
        y un valor entre comillas dobles.
      </p>
      <h3 id="atributo-class">
        El atributo <code>class</code>
      </h3>
      <p>
        Un atributo muy importante es el atributo <code>class</code>. Se utiliza
        para darle una clase a una etiqueta, y nos sirve para categorizar cada
        parte del contenido de nuestro HTML. Una clase puede estar compartida
        por varias etiquetas, es decir, varias etiquetas pueden tener la misma
        clase porque pertenecen a la misma categoría.
      </p>
      <CodeHtml>
        {`<p class="featured">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p>Minus, autem! Ipsa culpa, eligendi voluptate error placeat omnis hic porro at deleniti repellat.</p>
<p class="featured">Necessitatibus itaque aliquid odit pariatur tempora adipisci mollitia.</p>`}
      </CodeHtml>
      <p>
        En el ejemplo anterior hemos creado tres párrafos, y hemos dicho que el
        primero y el tercero son destacados.
      </p>
      <p>
        ¿Y para qué vamos a usar esta categorización? Para poder referirnos a
        estas etiquetas desde CSS o desde JS.
      </p>
      <p>
        Cuando queramos aplicarle un estilo concreto a todos los destacados,
        desde la hoja de estilos CSS diremos, por ejemplo: "todas las etiquetas
        con clase <code>featured</code> tienen que tener un fondo amarillo".
      </p>
      <p>
        Cuando queramos manipular los destacados desde JavaScript, diremos, por
        ejemplo: "elimina todos los elementos con clase <code>featured</code>".
      </p>
      <p>
        Resumiendo: las clases nos sirven para categorizar nuestro contenido y
        se utilizan desde CSS o JS para poder referirnos a partes de nuestro
        HTML.
      </p>
      <h3>
        El atributo <code>id</code>
      </h3>
      <p>
        El atributo <code>id</code> se utiliza para identificar una etiqueta de
        forma única. Es decir, no puede haber dos etiquetas con el mismo{" "}
        <code>id</code> en un mismo documento HTML.
      </p>
      <p>
        La utilizaremos en los formularios, cuando queramos vincular una
        etiqueta (no nos referimos a una <em>etiqueta HTML</em>, sino
        concretamente a la etiqueta <code>label</code>) con un campo de
        formulario.
      </p>
      <CodeHtml>
        {`<label for="username">Nombre de usuario:</label>
<input type="text" id="username" />`}
      </CodeHtml>
      <p>
        En el ejemplo anterior hemos vinculado el campo de texto con el id{" "}
        "username" con la etiqueta <code>label</code> que dice "Nombre de
        usuario". Y lo hemos hecho haciendo coincidir el valor del atributo{" "}
        <code>for</code> del <code>label</code> con el valor del atributo{" "}
        <code>id</code> del <code>input</code>.
      </p>
      <p>
        Además, el atributo <code>id</code> también se utiliza para crear
        enlaces internos en un documento HTML. Por ejemplo, si queremos que un
        enlace nos lleve a una parte concreta de la página, le ponemos un{" "}
        <code>id</code> a la etiqueta que queremos que sea el destino, y en la
        URL del enlace ponemos una almohadilla (<code>#</code>) y el id.
      </p>
      <CodeHtml>{`<h3 id="atributo-class">El atributo class</h3>
<p>bla bla bla</p>
...
<a href="#atributo-class">Ir a la explicación sobre el atributo class</a>`}</CodeHtml>
      <p>
        Puedes probarlo haciendo clic en este enlace:{" "}
        <a href="#atributo-class">
          Ir a la explicación sobre el atributo class
        </a>
      </p>
      <div className="featured">
        <h3>¿Sólo para estas dos cosas?</h3>
        <p>Sí, sólo para estas dos cosas.</p>
        <p>
          No importa si ahí fuera has aprendido otros usos del atributo{" "}
          <code>id</code>. Como veremos durante el curso, es un atributo muy
          peligroso para la mantenibilidad del código, y restringiremos su uso a
          estos dos casos.
        </p>
      </div>
      <h3 id="entrega-r4-html">
        Entrega <code>R4-html</code>
      </h3>
      <p>
        Ve a CodeSandbox y crea un proyecto con un template de HTML + CSS. En
        esta entrega sólo vamos a trabajar HTML, así que:
      </p>
      <ul>
        <li>
          en el archivo <code>index.html</code>, comenta la línea que se parezca
          a esto:
          <CodeHtml>{`<link rel="stylesheet" href="styles.css" />`}</CodeHtml>
        </li>
        <li>
          elimina todo el contenido de la etiqueta <code>&lt;body&gt;</code> y
          déjala sin hijos.
        </li>
        <li>
          no te preocupes por cómo se ven los contenidos: eso es tarea de CSS y
          en esta entrega no lo vamos a trabajar
        </li>
      </ul>
      <p>
        A continuación, añade el siguiente contenido a la etiqueta{" "}
        <code>body</code>:
      </p>
      <ul>
        <li>
          Una <strong>cabecera</strong> que contenga:
          <ul>
            <li>
              Un <strong>encabezado de nivel 1</strong> con el texto "La primera
              web sobre gatos"
            </li>
            <li>
              Esta <strong>imagen</strong> de una gata:{" "}
              <Link to="https://placecats.com/bella/300/200" target="_blank">
                https://placecats.com/bella/300/200
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Una <strong>sección</strong> que contenga:
          <ul>
            <li>
              Un <strong>encabezado de nivel 2</strong> con el texto "¿Qué onda
              con estos animales?"
            </li>
            <li>
              Dos <strong>párrafos</strong> con textos sobre gatos.
            </li>
            <li>
              Un <strong>enlace</strong> que diga "Más información sobre gatos"
              y que lleve a un artículo de Wikipedia sobre gatos.
            </li>
          </ul>
        </li>
        <li>
          Otra <strong>sección</strong> que contenga:
          <ul>
            <li>
              Un <strong>encabezado de nivel 2</strong> con el texto "Gatos
              famosos"
            </li>
            <li>
              Una <strong>lista desordenada</strong> con los nombres de tres
              gatos famosos.
            </li>
          </ul>
        </li>
        <li>
          Un <strong>pie</strong> con tu nombre y la fecha de hoy.
        </li>
      </ul>
      <p>Entrega la URL de tu proyecto en CodeSandbox.</p>
    </>
  );
};

export default Challenge4TagsAttributes;
