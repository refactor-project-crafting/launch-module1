const Challenge4Specs: React.FC = () => {
  return (
    <>
      <h2>Especificaciones de la aplicación</h2>
      <p>
        La aplicación <code>Classroom</code> se compone de las siguientes{" "}
        <strong>entidades principales de dominio</strong>:
      </p>
      <ul>
        <li>
          <strong>Cursos</strong>: Un curso tiene un nombre.
        </li>
        <li>
          <strong>Alumnos</strong>: Un alumno tiene un nombre, un apellido, un
          email y un teléfono.
        </li>
        <li>
          <strong>Notas</strong>: Una nota tiene un valor numérico y está
          asociada a un alumno y a un curso.
        </li>
      </ul>
      <p>
        Además, cada entidad tiene una id numérica que la identifica de las
        demás. Por ejemplo, un curso con id 1 no es lo mismo que un curso con id
        2.
      </p>
      <p>
        Los datos se almacenarán en el browser (esta parte ya está
        implementada). Se debe poder gestionar:
      </p>
      <ul>
        <li>un listado de cursos</li>
        <li>un listado de estudiantes</li>
        <li>un listado de notas</li>
        <li>unas estadísticas con informes sobre los cursos y los alumnos</li>
      </ul>
    </>
  );
};

export default Challenge4Specs;
