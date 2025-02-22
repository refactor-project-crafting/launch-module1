const Challenge4Backlog: React.FC = () => {
  return (
    <>
      <h2>Backlog</h2>
      <h3>
        Feature 1: Cargar el favicon en la lista de estudiantes y poner el
        título.
      </h3>
      <p>
        La página con el listado de estudiantes está sin favicon. Es importante
        que en las pestañas del navegador se pueda identificar visualmente
        nuestra aplicación. Haz que se aplique el favicon{" "}
        <code>favicon.png</code>.
      </p>
      <p>
        Ponle también el siguiente título al documento HTML: "Classroom -
        Estudiantes"
      </p>
      <h3>Feature 2: Cargar la hoja de estilos en la lista de estudiantes.</h3>
      <p>
        La página con el listado de estudiantes está sin estilos. Carga la hoja
        de estilos <code>styles.css</code> para aplicarle estilos CSS.
      </p>
      <h3>Feature 3: Cargar el JavaScript en la lista de estudiantes.</h3>
      <p>
        La página con el listado de estudiantes está sin JavaScript. Carga el
        módulo principal <code>index.js</code> para que empiece a funcionar.
      </p>
      <h3>Feature 4: Estilos generales.</h3>
      <p>
        Ve a la hoja de estilos y haz que todo el proyecto tenga como tipografía
        la familia <code>system-ui</code>. Utiliza este{" "}
        <strong>font stack</strong>:{" "}
        <code>
          system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif
        </code>
      </p>
      <p>
        Hay un contenedor con la clase <code>container</code>, que ya tiene
        algún estilo CSS. Añádele un ancho máximo de 1000 píxeles, y un
        espaciado interior lateral de 20 píxeles. Con esto deberías ver que los
        contenidos de la web ya no ocupan todo <strong>el viewport</strong>.
      </p>
      <h3>Feature 5: Cabecera y menú de navegación.</h3>
      <p>
        Los links ahora mismo aparecen con el estilo por defecto: en azul y
        subrayados. Para que tengan el mismo color que el resto de textos, haz
        que todos los links de la web hereden el color.
      </p>
      <p>
        Haz también que la cabecera con clase <code>main-header</code> tenga un
        fondo de color <code>#333</code> y los textos de color blanco, y que
        tenga un espaciado interior vertical de 10 píxeles.
      </p>
      <p>
        Ve al HTML de la cabecera (verás que está generado desde JS) y mete el
        título de la aplicación en un encabezado de nivel 1 (ahora está en un
        párrafo). Anúlale los márgenes superior e inferior al encabezado.
      </p>
      <p>
        Verás que ahora mismo el menú de navegación está compuesto por varios
        enlaces sueltos. Haz que los enlaces formen parte de una lista
        desordenada, y que ésta esté dentro de un elemento de navegación con
        clase <code>main-navigation</code>.
      </p>
      <h3>Feature 6: Mejorar la semántica del listado de estudiantes.</h3>
      <p>
        En la lista de estudiantes, el título de la sección ("Estudiantes") no
        debería estar dentro de un párrafo sino de un encabezado de nivel 2.
      </p>
      <p>
        La acción de borrar de cada fila de la tabla ahora mismo es un link,
        pero debería ser un botón con clase <code>button</code>. Este código
        HTML se genera mediante JavaScript.
      </p>
      <h3>Feature 7: Calcular el número de estudiantes.</h3>
      <p>
        Si te fijas en la lista de estudiantes, aunque te muestre cuatro, el
        contador dice que hay 0. Aún no está implementado este conteo.
      </p>
      <p>
        En el archivo <code>studentsService.ts</code> tienes las indicaciones
        para crear la función <code>getStudentsTotal</code>. Cuando la tengas
        lista, descomenta las líneas 3, 6, 7 y 27 del archivo{" "}
        <code>studentsDom.ts</code>.
      </p>
      <h3>Feature 8: Formulario para añadir un estudiante.</h3>
      <p>
        Se ha empezado a construir el formulario para añadir un estudiante,
        ahora mismo están todas las etiquetas pero faltan los campos para que el
        usuario introduzca los datos.
      </p>
      <p>
        Añade estos campos después de cada etiqueta (y dentro del mismo{" "}
        <code>div</code> donde está cada una de ellas):
      </p>
      <ul>
        <li>Un campo para introducir el nombre, obligatorio.</li>
        <li>Un campo para introducir los apellidos, obligatorio.</li>
        <li>Un campo para introducir la edad, obligatorio.</li>
        <li>Un campo para introducir el email, obligatorio.</li>
        <li>Un campo para introducir el número de teléfono, obligatorio.</li>
      </ul>
      <p>
        Añade a todos los campos que has creado la clase{" "}
        <code>form__control</code>.
      </p>
      <p>
        Por último, corrige el atributo <code>type</code> del botón para enviar
        el formulario y ponle el valor correcto.
      </p>
      <h3>Feature 9: Añadir un estudiante.</h3>
      <p>
        En el archivo <code>studentsService.ts</code> tienes las indicaciones
        para crear la función <code>addStudent</code>. Fíjate bien que la
        función no debe recibir un estudiante completo, sino los datos de un
        estudiante sueltos. La id del nuevo estudiante debe ser calculada por
        esta función, no debe pedirse en los parámetros de entrada.
      </p>
      <p>
        Para calcular la id del nuevo estudiante, puedes usar la función{" "}
        <code>generateId()</code>, a la que le tendrás que pasar un array de
        elementos (en este caso, de estudiantes).
      </p>
      <p>
        Cuando tengas la función lista, descomenta las líneas 4 y de la 66 a la
        73 del archivo <code>studentsDom.ts</code>.
      </p>
      <h3>Feature 10: Eliminar un estudiante.</h3>
      <p>
        En el archivo <code>studentsService.ts</code> tienes las indicaciones
        para crear la función <code>deleteStudent</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 5 y 44 del archivo{" "}
        <code>studentsDom.ts</code>.
      </p>
      <h3>Feature 11: Favicon, CSS y JS del listado de cursos</h3>
      <p>
        En el listado de cursos también hay que añadir el favicon y hay que
        cargar la hoja de estilos CSS y el módulo <code>index.js</code>.
      </p>
      <p>
        Ponle también el siguiente título al documento HTML: "Classroom -
        Cursos"
      </p>
      <p>
        El título del listado ("Cursos") debería estar en un encabezado de nivel
        2 y no en un párrafo.
      </p>
      <h3>Feature 12: Calcular el número de cursos</h3>
      <p>
        En el archivo <code>coursesService.ts</code> tienes las indicaciones
        para crear la función <code>getCoursesTotal</code>. Cuando la tengas
        lista, descomenta las líneas 4, 7, 8 y 27 del archivo{" "}
        <code>coursesDom.ts</code>.
      </p>
      <p>
        Para que funcione, en el HTML del listado de cursos debes localizar el 0
        y envolverlo en un elemento HTML sin semántica, que tenga la clase{" "}
        <code>counter</code>.
      </p>
      <h3>Feature 13: Completar el formulario para añadir un curso.</h3>
      <p>
        El formulario tiene una etiqueta para que el usuario introduzca el
        nombre del curso, pero hay que añadirle un campo, obligatorio y con la
        clase <code>form__control</code>.
      </p>
      <p>
        Añade el atributo <code>type</code> correspondiente al botón de envío
        del formulario.
      </p>
      <h3>Feature 14: Añadir un curso.</h3>
      <p>
        En el archivo <code>coursesService.ts</code> tienes las indicaciones
        para crear la función <code>addCourse</code>. Recuerda la función{" "}
        <code>generateId()</code> para calcular la id del nuevo curso.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 5 y 54 del archivo{" "}
        <code>coursesDom.ts</code>.
      </p>
      <h3>Feature 15: Eliminar un curso.</h3>
      <p>
        En el archivo <code>coursesService.ts</code> tienes las indicaciones
        para crear la función <code>deleteCourse</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 6 y 40 del archivo{" "}
        <code>coursesDom.ts</code>.
      </p>
      <h3>Feature 16: Favicon, CSS y JS del listado de notas</h3>
      <p>
        En el listado de notas también hay que añadir el favicon y hay que
        cargar la hoja de estilos CSS y el módulo <code>index.js</code>.
      </p>
      <p>
        Ponle también el siguiente título al documento HTML: "Classroom - Notas"
      </p>
      <p>
        El título del listado ("Notas") debería estar en un encabezado de nivel
        2 y no en un párrafo.
      </p>
      <h3>Feature 17: Calcular el número de notas.</h3>
      <p>
        En el archivo <code>gradesService.ts</code> tienes las indicaciones para
        crear la función <code>getGradesTotal</code>. Cuando la tengas lista,
        descomenta las líneas 5, 9, 10 y 46 del archivo{" "}
        <code>gradesDom.ts</code>.
      </p>
      <p>
        Para que funcione, en el HTML del listado de notas debes localizar el 0
        y envolverlo en un elemento HTML sin semántica, que tenga la clase{" "}
        <code>counter</code>.
      </p>
      <h3>Feature 18: Completar el formulario para crear una nota</h3>
      <p>
        El formulario tiene las etiquetas para que el usuario introduzca los
        datos de una nueva nota, pero faltan los campos.
      </p>
      <p>
        Añade estos campos después de cada etiqueta (y dentro del mismo{" "}
        <code>div</code> donde está cada una de ellas):
      </p>
      <ul>
        <li>
          Un desplegable para introducir el estudiante, obligatorio. Debe tener
          una única opción, con valor vacío, y el siguiente texto: "Selecciona
          un estudiante".
        </li>
        <li>
          Un desplegable para introducir el curso, obligatorio. Debe tener una
          única opción, con valor vacío, y el siguiente texto: "Selecciona un
          curso".
        </li>
        <li>
          Un campo para introducir la nota, obligatorio. Sólo debe permitir
          valores entre 0 y 10.
        </li>
      </ul>
      <p>
        Añade a todos los campos que has creado la clase{" "}
        <code>form__control</code>.
      </p>
      <p>
        Corrige el atributo <code>type</code> del botón de envío del formulario.
      </p>
      <h3>Feature 19: Rellenar el desplegable de estudiantes</h3>
      <p>
        En el formulario para crear una nota acabamos de crear un desplegable de
        estudiantes vacío. Necesitamos una función que lo rellene de opciones,
        una por cada estudiante.
      </p>
      <p>
        En el archivo <code>studentsService.ts</code> tienes las indicaciones
        para crear la función <code>getStudentsOptions</code>. Acuérdate de
        anotar el tipo de salida.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 2 y de la 22 a la 28 del
        archivo <code>gradesDom.ts</code>.
      </p>
      <h3>Feature 20: Rellenar el desplegable de cursos</h3>
      <p>
        En el formulario para crear una nota también hemos creado un desplegable
        de curso vacío. Necesitamos una función que lo rellene de opciones, una
        por cada curso.
      </p>
      <p>
        En el archivo <code>coursesService.ts</code> tienes las indicaciones
        para crear la función <code>getCoursesOptions</code>. Acuérdate de
        anotar el tipo de salida.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 3 y de la 30 a la 37 del
        archivo <code>gradesDom.ts</code>.
      </p>
      <h3>Feature 21: Añadir una nota.</h3>
      <p>
        En el archivo <code>gradesService.ts</code> tienes las indicaciones para
        crear la función <code>addGrade</code>. Recuerda la función{" "}
        <code>generateId()</code> para calcular la id de la nueva nota.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 6 y de la 84 a la 89 del
        archivo <code>gradesDom.ts</code>.
      </p>
      <p>
        Verás que el contador se actualiza pero no aparecen las notas en la
        lista. Lo haremos en la siguiente feature.
      </p>
      <h3>Feature 22: Mostrar las notas.</h3>
      <p>
        En el archivo <code>gradesService.ts</code> tienes las indicaciones para
        crear la función <code>getGradeFullData</code>, que dará la información
        necesaria para crear cada fila de la tabla de notas. Recuerda anotar el
        tipo de la salida.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 8, 50 y de la 53 a la 61
        del archivo <code>gradesDom.ts</code>.
      </p>
      <h3>Feature 23: Eliminar una nota.</h3>
      <p>
        En el archivo <code>gradesService.ts</code> tienes las indicaciones para
        crear la función <code>deleteGrade</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 7 y 64 del archivo{" "}
        <code>gradesDom.ts</code>.
      </p>
      <h3>Feature 24: Obtener el nombre de un estudiante.</h3>
      <p>
        En el archivo <code>studentsService.ts</code> tienes las indicaciones
        para crear la función <code>getStudentNameById</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta la línea 1 del archivo{" "}
        <code>statsDom.ts</code>.
      </p>
      <p>No podrás comprobar esta feature hasta finalizar la siguiente.</p>
      <h3>Feature 25: Favicon, CSS y JS de las estadísticas</h3>
      <p>
        En las estadísticas también hay que añadir el favicon y hay que cargar
        la hoja de estilos CSS y el módulo <code>index.js</code>.
      </p>
      <p>
        Ponle también el siguiente título al documento HTML: "Classroom -
        Estadísticas"
      </p>
      <p>
        El título del listado ("Estadísticas") debería estar en un encabezado de
        nivel 2 y no en un párrafo.
      </p>
      <h3>Feature 26: Calcular las estadísticas.</h3>
      <p>
        En el archivo <code>statsService.ts</code> tienes las indicaciones para
        crear la función <code>getCourseStats</code>. Recuerda anotar el tipo de
        salida.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 3, 15, 16 y de la 28 a la
        46 del archivo <code>statsDom.ts</code>.
      </p>
    </>
  );
};

export default Challenge4Backlog;
