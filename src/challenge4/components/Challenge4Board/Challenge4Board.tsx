const Challenge4Board: React.FC = () => {
  return (
    <>
      <h2>Tablero del proyecto</h2>
      <p>
        Para este proyecto tendrás que crear un tablero en Trello. El tablero
        tendrá que tener las siguientes columnas:
      </p>
      <ul>
        <li>
          <strong>Backlog</strong>
        </li>
        <li>
          <strong>In progress</strong>
        </li>
        <li>
          <strong>Done</strong>
        </li>
      </ul>

      <p>
        Cuando lo tengas, añade a la columna <code>Backlog</code> las tareas del
        backlog. Cada vez que vayas a ponerte con una tarea, muévela a la
        columna <code>In progress</code>. Cuando termines la tarea, muévela a la
        columna <code>Done</code>.
      </p>
      <p>Esto servirá para llevar una gestión de las tareas del proyecto.</p>
    </>
  );
};

export default Challenge4Board;
