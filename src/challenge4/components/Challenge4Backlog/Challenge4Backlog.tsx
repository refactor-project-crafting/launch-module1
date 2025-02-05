const Challenge4Backlog: React.FC = () => {
  return (
    <>
      <h2>Backlog</h2>
      <h3>Feature 1: Calcular el número de estudiantes.</h3>
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
      <h3>Feature 2: Añadir un estudiante.</h3>
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
      <h3>Feature 3: Eliminar un estudiante.</h3>
      <p>
        En el archivo <code>studentsService.ts</code> tienes las indicaciones
        para crear la función <code>deleteStudent</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 5 y 44 del archivo{" "}
        <code>studentsDom.ts</code>.
      </p>
      <h3>Feature 4: Calcular el número de cursos</h3>
      <p>
        En el archivo <code>coursesService.ts</code> tienes las indicaciones
        para crear la función <code>getCoursesTotal</code>. Cuando la tengas
        lista, descomenta las líneas 4, 7, 8 y 27 del archivo{" "}
        <code>coursesDom.ts</code>.
      </p>
      <h3>Feature 5: Añadir un curso.</h3>
      <p>
        En el archivo <code>coursesService.ts</code> tienes las indicaciones
        para crear la función <code>addCourse</code>. Recuerda la función{" "}
        <code>generateId()</code> para calcular la id del nuevo curso.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 5 y 54 del archivo{" "}
        <code>coursesDom.ts</code>.
      </p>
      <h3>Feature 6: Eliminar un curso.</h3>
      <p>
        En el archivo <code>coursesService.ts</code> tienes las indicaciones
        para crear la función <code>deleteCourse</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 6 y 40 del archivo{" "}
        <code>coursesDom.ts</code>.
      </p>
      <h3>Feature 7: Calcular el número de notas.</h3>
      <p>
        En el archivo <code>gradesService.ts</code> tienes las indicaciones para
        crear la función <code>getGradesTotal</code>. Cuando la tengas lista,
        descomenta las líneas 5, 9, 10 y 46 del archivo{" "}
        <code>gradesDom.ts</code>.
      </p>
      <h3>Feature 8: Rellenar el desplegable de estudiantes</h3>
      <p>
        En el formulario para crear una nota, verás que el desplegable de
        estudiantes está vacío. Necesitamos una función que lo rellene de
        opciones, una por cada estudiante.
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
      <h3>Feature 9: Rellenar el desplegable de cursos</h3>
      <p>
        En el formulario para crear una nota, verás que el desplegable de cursos
        también está vacío. Necesitamos una función que lo rellene de opciones,
        una por cada curso.
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
      <h3>Feature 10: Añadir una nota.</h3>
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
      <h3>Feature 11: Mostrar las notas.</h3>
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
      <h3>Feature 12: Eliminar una nota.</h3>
      <p>
        En el archivo <code>gradesService.ts</code> tienes las indicaciones para
        crear la función <code>deleteGrade</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta las líneas 7 y 64 del archivo{" "}
        <code>gradesDom.ts</code>.
      </p>
      <h3>Feature 13: Obtener el nombre de un estudiante.</h3>
      <p>
        En el archivo <code>studentsService.ts</code> tienes las indicaciones
        para crear la función <code>getStudentNameById</code>.
      </p>
      <p>
        Cuando la tengas lista, descomenta la línea 1 del archivo{" "}
        <code>statsDom.ts</code>.
      </p>
      <p>No podrás comprobar esta feature hasta finalizar la siguiente.</p>
      <h3>Feature 14: Calcular las estadísticas.</h3>
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
