const Challenge4Presentation: React.FC = () => {
  return (
    <>
      <h1>Reto 4-fase 1: La capa de presentación</h1>
      <figure style={{ textAlign: "center" }}>
        <img src="/images/dashboard-realtime.png" alt="Dashboard de gráficas" />
      </figure>
      <p>
        Todos los programas tienen una entrada y una salida de datos. Algunos
        programas son consumidos por personas y otros son consumidos por otros
        programas. Cuando un programa es consumido por personas, tras procesar
        la información que sea necesaria, hay que presentar la salida de datos
        de una forma que sea fácil de entender y de manipular. A la parte del
        código de un programa que se encarga de presentar la información se le
        llama <strong>capa de presentación</strong>.
      </p>
      <p>
        En el código, nosotras/os siempre debemos intentar que la capa de
        presentación no se mezcle con los cálculos de procesamiento de datos,
        también conocidos como <strong>lógica de negocio</strong>.
      </p>
      <p>
        Previamente hemos trabajado en aplicaciones que eran consumidas por
        personas. Algunas se ejecutaban en el navegador y otras en la terminal,
        con Node.js.
      </p>
      <p>
        En las aplicaciones para Node.js, nuestra salida de datos ha sido la
        consola. Cuando hemos querido mostrar algo al usuario, lo hemos hecho
        imprimiéndolo por la consola.
      </p>
      <p>
        En las aplicaciones para navegador, también conocidas como{" "}
        <strong>
          <em>web apps</em>
        </strong>
        , no imprimimos en la consola la información que queremos mostrar al
        usuario. En su lugar, creamos un <strong>documento HTML</strong> que
        contiene la información. Esa información puede estar escrita
        directamente en documento, o podemos insertarla desde nuestro código
        JavaScript.
      </p>
      <p>
        Y para que ese documento HTML muestre la información con unos estilos
        determinados (colores, tamaños, espaciados, tipografías), utilizamos{" "}
        <strong>hojas de estilo CSS</strong>.
      </p>
      <div className="featured">
        <h3>Importante</h3>
        <p>
          El <strong>HTML</strong> sirve para decir qué información se tiene que
          mostrar.
        </p>
        <p>
          El <strong>CSS</strong> sirve para decir cómo se tiene que ver esa
          información.
        </p>
      </div>
    </>
  );
};

export default Challenge4Presentation;
