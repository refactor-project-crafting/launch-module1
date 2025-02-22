import CodeCss from "../../../components/CodeCss/CodeCss";
import CodeHtml from "../../../components/CodeHtml/CodeHtml";

const Challenge4Css: React.FC = () => {
  return (
    <>
      <h2>
        CSS (<em>Cascading Style Sheets</em>)
      </h2>
      <p>
        Como hemos visto, HTML sirve para definir qué información se muestra en
        una web app. HTML no dice nada sobre cómo se ven los contenidos. Para
        eso tenemos CSS.
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
        CSS es un <strong>lenguaje de estilos</strong>. Nos permite definir
        reglas sobre cómo se deben mostrar los contenidos del documento HTML.
        Desde el CSS nos vamos a referir a las etiquetas del HTML como{" "}
        <strong>elementos</strong>.
      </p>
      <p>
        Por ejemplo, si queremos que todos los párrafos de nuestro documento
        tengan un fondo amarillo, en el CSS escribiremos esta regla:
      </p>
      <CodeCss>{`p {
  background-color: #ff0;
}`}</CodeCss>
      <p>
        Y si queremos que los encabezados de nivel 1 tengan un tamaño de fuente
        de 24px y cursiva, escribiremos esta regla:
      </p>
      <CodeCss>{`h1 {
  font-size: 24px;
  font-style: italic;
}`}</CodeCss>
      <p>
        (Estamos usando píxeles como medida para los textos, pero cuando
        entremos más a fondo dejaremos de usarla)
      </p>
      <h3>Reglas, declaraciones y propiedades</h3>
      <p>
        En CSS, una <strong>regla</strong> está formada por un{" "}
        <strong>selector</strong> y un <strong>bloque de declaraciones</strong>{" "}
        delimitado por llaves.
      </p>
      <p>Cada declaración está formada por una propiedad y un valor:</p>
      <CodeCss>{`selector {
  propiedad1: valor1;
  propiedad2: valor2;
  ...
}`}</CodeCss>
      <p>
        El selector sirve para seleccionar los elementos a los que aplicar la
        regla.
      </p>
      <p>
        Aquí tienes varias reglas con sus declaraciones, busca información para
        ver qué haría este código CSS y pruébalo.
      </p>
      <CodeCss>{`p {
  color: #333;
  font-size: 16px;
}
  
h3 {
  color: #111;
  font-size: 20px;
}

img {
  border: 1px solid #000;      
}

.featured {
  background-color: #ff0;
}`}</CodeCss>
      <h3>Hojas de estilos</h3>
      <p>
        A un mismo documento HTML se le pueden aplicar varias hojas de estilos.
        Por ahora vamos a crear una sola, en un archivo con extensión{" "}
        <code>.css</code>, y vamos a vincularla con el documento HTML a través
        de la etiqueta <code>&lt;link&gt;</code>, que tiene que estar dentro de
        la etiqueta <code>&lt;head&gt;</code>.
      </p>
      <CodeHtml>
        {`<link rel="stylesheet" href="<ruta-a-tu-hoja-de-estilos>" />`}
      </CodeHtml>
    </>
  );
};

export default Challenge4Css;
