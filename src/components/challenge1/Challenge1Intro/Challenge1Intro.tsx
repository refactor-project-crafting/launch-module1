import { Link } from "react-router";

const Challenge1Intro: React.FC = () => {
  return (
    <>
      <h1>Módulo 1: Introducción al Desarrollo Web (Launch)</h1>
      <h2>Reto número 1: Acceso restringido</h2>
      <img
        src="/images/password.webp"
        alt="Palabra 'password' formada con fichas del Scrabble"
      />
      <p>
        Hola, pequeño embrión de developer. Te damos la bienvenida a este viaje
        que comienza hoy y que te lanzará a una carrera profesional en el mundo
        del desarrollo de software.
      </p>
      <p>
        Como sabes, tienes que superar primero cuatro retos. El primero de ellos
        es el que te presentamos a continuación.
      </p>
      <h3>Descripción del reto</h3>
      <p>
        Tenemos una página web con acceso restringido mediante login de usuario.
        Los usuarios tienen primero que registrarse con sus datos, y luego
        podrán acceder a la página con su usuario y contraseña.
      </p>
      <p>
        Necesitamos tu ayuda para una serie de pasos que han quedado
        incompletos. Tenemos la página de <strong>register</strong> y la de{" "}
        <strong>login</strong>, pero necesitamos validar los datos que introduce
        el usuario. Esa parte no está implementada aún.
      </p>
      <p>
        Para ello te vamos a pedir unas líneas de código en{" "}
        <strong>JavaScript</strong>, que es el lenguaje que estamos utilizando
        en este proyecto. Además necesitamos que adquieras cierta soltura con el{" "}
        <strong>Sistema Operativo</strong> de tu ordenador, ya que vamos a
        trabajar con la <strong>terminal</strong>. Recuerda que necesitamos
        developers, no aprendices de informática.
      </p>
      <p>
        Durante estos primeros días tendrás que hacerte con tu entorno de
        desarrollo, así que vamos a practicar diferentes áreas que te permitirán
        moverte con soltura en tu ordenador. Nos han dicho que hasta ahora has
        estado programando con tutoriales de internet, así que tendremos que
        enseñarte a trabajar con un entorno de desarrollo más real.
      </p>
      <p>Como es tu primer día, vamos a guiarte en todo el proceso.</p>
      <h3>Entregas</h3>
      <p>
        Aquí tienes un resumen de todo lo que tendrás que entregar en este reto:{" "}
        <Link to="/challenge1/entregas">Entregas del reto 1</Link>
      </p>
      <p>
        Comencemos con <Link to="/challenge1/os">la fase 1</Link>.
      </p>
    </>
  );
};

export default Challenge1Intro;
