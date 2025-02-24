import { Link } from "react-router";
import CodeHtml from "../../../components/CodeHtml/CodeHtml";

const Challenge4Html: React.FC = () => {
  return (
    <>
      <h2>
        HTML (<em>HyperText Markup Language</em>)
      </h2>
      <p>
        Como decíamos en la introducción, la información en una web app se
        muestra al usuario a través del HTML. En el HTML vamos a definir qué
        información se tiene que mostrar.
      </p>
      <div className="featured">
        <h3>HTML vs CSS</h3>
        <p>
          HTML ➡️ <strong>QUÉ</strong> se muestra
        </p>
        <p>
          CSS ➡️ <strong>CÓMO</strong> se muestra
        </p>
      </div>
      <p>
        HTML es un <strong>lenguaje de marcas</strong>, nos ofrece ciertas
        marcas (más conocidas como <strong>etiquetas</strong>) para estructurar
        la información. Por ejemplo, para crear un párrafo usamos las marcas{" "}
        <code>{`<p>...</p>`}</code> (p de <em>paragraph</em>), para crear un
        encabezado usamos la marca <code>{`<h1>...</h1>`}</code> (h de{" "}
        <em>heading</em>), y así sucesivamente.
      </p>
      <CodeHtml>
        {`<h1>Playlist Dreams App</h1>
<p>Please choose a song from your list, and I will start playing it.</p>`}
      </CodeHtml>
      <h3>Jerarquía de etiquetas</h3>
      <p>
        Las etiquetas HTML se pueden anidar unas dentro de otras. La etiqueta
        que contiene a otra se llama <strong>madre</strong> y la etiqueta que
        está dentro se llama <strong>hija</strong>. Por ejemplo, en el siguiente
        HTML tenemos que la etiqueta <code>{`<header>`}</code> es la madre de
        las etiquetas <code>{`<h1>`}</code> y <code>{`<p>`}</code>, o lo que es
        lo mismo, que las etiquetas <code>{`<h1>`}</code> y <code>{`<p>`}</code>{" "}
        son hijas de la etiqueta <code>{`<header>`}</code>.
      </p>
      <CodeHtml>
        {`<header>
  <h1>Playlist Dreams App</h1>
  <p>Please choose a song from your list, and I will start playing it.</p>
</header>`}
      </CodeHtml>
      <p>
        Además, en ese código HTML las etiquetas <code>{`<h1>`}</code> y{" "}
        <code>{`<p>`}</code> no tienen ninguna etiqueta hija. Este código daría
        lugar a esta jerarquía:
      </p>
      <figure style={{ margin: "0 auto", width: 500, textAlign: "center" }}>
        <img src="/images/html-hierarchy.png" alt="Jerarquía HTML" />
      </figure>
      <p>
        Hay algunas etiquetas que no pueden contener nada dentro. Son conocidas
        como <strong>etiquetas vacías</strong>. Por ejemplo, la etiqueta{" "}
        <code>{`<img>`}</code> que se usa para insertar una imagen en el
        documento HTML.
      </p>
      <CodeHtml>
        {`<img src="https://placekitten.com/200/300" alt="Un gatito" />`}
      </CodeHtml>
      <p>
        En este caso fíjate que en vez de haber una etiqueta de apertura y una
        de cierre, sólo hay una etiqueta que se cierra a sí misma, y no tiene
        etiquetas hijas. También se pueden escribir sin la barra final:
      </p>
      <CodeHtml>
        {`<img src="https://placekitten.com/200/300" alt="Un gatito">`}
      </CodeHtml>
      <p>
        Lo importante es que veas que no tienen una etiqueta de apertura y una
        de cierre.
      </p>
      <h3>HTML base</h3>
      <p>
        Un documento HTML siempre tiene una etiqueta <code>{`<html>`}</code> que
        contiene dos etiquetas hijas: <code>{`<head>`}</code> y{" "}
        <code>{`<body>`}</code>. Además, empieza siempre con esta declaración:{" "}
        <code>{`<!DOCTYPE html>`}</code>.
      </p>
      <p id="html-base"></p>
      <CodeHtml>
        {`<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil amet provident
      est sed totam sapiente voluptates perspiciatis cupiditate error ducimus. Error debitis
      minima placeat corporis nisi iste ipsum eaque illo.</p>
  </body>
</html>`}
      </CodeHtml>
      <h3 id="entrega-r4-jerarquia-html-1">
        Entrega <code>R4-jerarquia-html-1</code>
      </h3>
      <p>
        Ve a Excalidraw y crea un diagrama como el que hemos visto antes, que
        refleje toda la jerarquía de etiquetas del{" "}
        <Link to="#html-base">anterior documento HTML</Link> (pista: lo que ves
        en la primera línea, <code>&lt;!DOCTYPE html&gt;</code>, no es una
        etiqueta). Entrega el link a tu diagrama para verlo directamente en
        Excalidraw.
      </p>
      <p>
        En el diagrama sólo debe aparecer un rectángulo por cada etiqueta, y el
        rectángulo sólo debe contener su nombre.
      </p>
      <h3 id="entrega-r4-jerarquia-html-2">
        Entrega <code>R4-jerarquia-html-2</code>
      </h3>
      <p>
        Aquí tienes un documento HTML completo:{" "}
        <a href="/files/launch.html" download>
          launch.html
        </a>
      </p>
      <p>
        Cuando lo descargues, ábrelo con el VSCode. Podrás comprobar que tiene
        muchas etiquetas HTML. Ve buscando las etiquetas de apertura y de cierre
        y ve identificando la jerarquía de etiquetas de este documento.
      </p>
      <p>
        Verás que las etiquetas tienen más información que las que acabamos de
        poner de ejemplo. Intenta identificar etiquetas de apertura y de cierre
        para ver dónde empieza y acaba cada una, y así ver qué otras etiquetas
        tiene dentro (si es que las tiene).
      </p>
    </>
  );
};

export default Challenge4Html;
