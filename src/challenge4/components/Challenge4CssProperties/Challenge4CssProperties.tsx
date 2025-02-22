const Challenge4CssProperties: React.FC = () => {
  return (
    <>
      <h2>Propiedades CSS</h2>
      <p>
        Cada propiedad CSS sirve para modificar un aspecto concreto de un
        elemento HTML. Ejemplos:
      </p>
      <ul>
        <li>
          la propiedad <code>color</code> sirve para cambiar el color del texto
          de un elemento.
        </li>
        <li>
          la propiedad <code>font-size</code> sirve para cambiar el tamaño de
          letra de un elemento.
        </li>
        <li>
          la propiedad <code>background-color</code> sirve para cambiar el color
          de fondo de un elemento.
        </li>
        <li>
          la propiedad <code>border</code> sirve para añadir un borde a un
          elemento.
        </li>
        <li>
          la propiedad <code>border-radius</code> sirve para redondear las
          esquinas de un elemento.
        </li>
        <li>
          la propiedad <code>padding</code> sirve para añadir espaciado interior
          a un elemento.
        </li>
        <li>
          la propiedad <code>margin</code> sirve para añadir espaciado exterior
          a un elemento.
        </li>
      </ul>
      <p>
        Cada propiedad acepta una serie de valores. Por ejemplo, no podemos
        asignarle un valor de color a la propiedad <code>font-size</code>,
        porque daría un error. Ni podemos asignarle un valor de píxeles a la
        propiedad <code>background-color</code>, porque también daría un error.
      </p>
      <h3>Juega</h3>
      <p>
        CSS es un campo muy amplio. Hay multitud de propiedades y lo mejor que
        puedes hacer para aprenderlas, más que tener un listado o una chuleta,
        es ponerte a jugar con el código y aplicar estilos a tu HTML.
      </p>
      <p>
        Dedica un tiempo a experimentar con el HTML y el CSS antes de empezar
        con la entrega siguiente.
      </p>
      <h3 id="entrega-r4-css">
        Entrega <code>R4-css</code>
      </h3>
      <p>
        Abre el proyecto de CodeSandbox de la anterior entrega y haz un{" "}
        <em>fork</em> para iniciar un nuevo proyecto a partir de él.
      </p>
      <p>
        Descomenta la línea que vincula el documento HTML con la hoja de
        estilos. Abre el archivo con la hoja de estilos y borra todo lo que haya
        dentro, para empezar con una hoja de estilos vacía.
      </p>
      <p>
        Añade las reglas CSS necesarias para aplicar los siguientes estilos:
      </p>
      <ul>
        <li>
          El color de fondo de la web debe ser un gris muy claro, con código de
          color <code>#f8f8f8</code>.
        </li>
        <li>
          Todos los textos deben tener la tipografía Arial y un tamaño de letra
          de 17px.
        </li>
        <li>
          La cabecera debe tener un color de fondo azul, con código #007bff, y
          un espaciado interior de 15px (nos referimos a la distancia entre sus
          bordes y su contenido).
        </li>
        <li>
          El encabezado de nivel 1 debe tener un color de texto blanco y un
          tamaño de letra de 32px.
        </li>
        <li>
          La imagen de la gata debe tener las esquinas redondeadas. También debe
          tener un borde de 3 píxeles de grosor y color azul oscuro. Al pasar el
          cursor por encima, debe aplicársele una transparencia del 50%, y el
          cursor debe tomar forma de cruz.
        </li>
        <li>
          Los encabezados de nivel 1 y 2 no deben tener margen por arriba.
        </li>
        <li>
          Las secciones deben tener un espaciado interior de 20px por arriba y
          por abajo.
        </li>
        <li>
          Los encabezados de nivel 2 deben tener un color de texto verde
          (#153315) y un tamaño de letra de 24px.
        </li>
        <li>Los párrafos deben tener un interlineado de 1.4</li>
        <li>
          Los enlaces deben tener el mismo verde de los encabezados de nivel 2 y
          no deben estar subrayados. Al pasar el cursor por encima, deben
          subrayarse y ponerse en negrita.
        </li>
        <li>
          Los textos de la lista no ordenada deben estar separados entre sí una
          distancia de 10 píxeles
        </li>
        <li>
          El pie debe tener el mismo color de fondo y de texto que la cabecera.
          También el mismo espaciado interior. Su altura debe ser de 100px y el
          texto debe estar centrado tanto horizontal como verticalmente.
        </li>
      </ul>
      <p>Entrega la URL de tu proyecto de CodeSandbox.</p>
    </>
  );
};

export default Challenge4CssProperties;
