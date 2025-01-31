import { useLocation } from "react-router";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const publishedChallengeNumber = 10;

  console.log("flag: published challenge number -> ", publishedChallengeNumber);

  const location = useLocation();

  const currentPath = location.pathname.replace(/\/$/, "");

  if (currentPath === "") {
    return;
  }

  const currentChallengeNumber = +currentPath
    .split("/")[1]
    .replace("challenge", "");

  const checkSection = (section: string) => {
    return currentPath.endsWith(section);
  };

  return (
    <aside className="main-sidebar">
      <strong>Módulo 1: Launch</strong>
      <nav className="main-navigation">
        <ul className={`${publishedChallengeNumber > 1 ? "passed" : ""}`}>
          <li>
            <a
              href="/challenge1"
              className={checkSection("/challenge1") ? "current" : ""}
            >
              Reto 1: Acceso restringido
            </a>
          </li>
          <li>
            <a
              href="/challenge1/entregas"
              className={checkSection("/challenge1/entregas") ? "current" : ""}
            >
              Resumen de entregas
            </a>
            <ul className={currentChallengeNumber === 1 ? "open" : ""}>
              <li>
                <a
                  href="/challenge1/os"
                  className={checkSection("/os") ? "current" : ""}
                >
                  <strong>Fase 1:</strong> Tu Sistema Operativo y su terminal
                </a>
                <ul>
                  <li>
                    <a
                      href="/challenge1/os/moviendote-por-tu-disco-duro"
                      className={
                        checkSection("/moviendote-por-tu-disco-duro")
                          ? "current"
                          : ""
                      }
                    >
                      Moviéndote por tu disco duro
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/challenge1/herramientas"
                  className={checkSection("/herramientas") ? "current" : ""}
                >
                  <strong>Fase 2:</strong> Las herramientas del developer
                </a>
                <ul>
                  <li>
                    <a
                      href="/challenge1/herramientas/configuracion-vs-code"
                      className={
                        checkSection("/configuracion-vs-code") ? "current" : ""
                      }
                    >
                      Configuración del VS Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="/challenge1/herramientas/configuracion-git"
                      className={
                        checkSection("/configuracion-git") ? "current" : ""
                      }
                    >
                      Configuración de Git
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/challenge1/calentando-motores-js"
                  className={
                    checkSection("/calentando-motores-js") ? "current" : ""
                  }
                >
                  <strong>Fase 3:</strong> Calentando motores con JS
                </a>
                <ul>
                  <li>
                    <a
                      href="/challenge1/calentando-motores-js/tu-primer-programa"
                      className={
                        checkSection("/tu-primer-programa") ? "current" : ""
                      }
                    >
                      Tu primer programa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/challenge1/calentando-motores-js/variables"
                      className={checkSection("/variables") ? "current" : ""}
                    >
                      Variables
                    </a>
                  </li>
                  <li>
                    <a
                      href="/challenge1/calentando-motores-js/expresiones"
                      className={checkSection("/expresiones") ? "current" : ""}
                    >
                      Expresiones
                    </a>
                  </li>
                  <li>
                    <a
                      href="/challenge1/calentando-motores-js/finaliza-tu-primer-programa"
                      className={
                        checkSection("/finaliza-tu-primer-programa")
                          ? "current"
                          : ""
                      }
                    >
                      Finaliza tu primer programa
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/challenge1/entorno-de-desarrollo"
                  className={
                    checkSection("/entorno-de-desarrollo") ? "current" : ""
                  }
                >
                  <strong>Fase 4:</strong> Un entorno de desarrollo
                </a>
                <ul>
                  <li>
                    <a
                      href="/challenge1/entorno-de-desarrollo/tu-segundo-programa"
                      className={
                        checkSection("/tu-segundo-programa") ? "current" : ""
                      }
                    >
                      Tu segundo programa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/challenge1/entorno-de-desarrollo/operaciones-con-strings"
                      className={
                        checkSection("/operaciones-con-strings")
                          ? "current"
                          : ""
                      }
                    >
                      Operaciones con strings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/challenge1/entorno-de-desarrollo/operaciones-con-numbers"
                      className={
                        checkSection("/operaciones-con-numbers")
                          ? "current"
                          : ""
                      }
                    >
                      Operaciones con numbers
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/challenge1/el-programa-definitivo"
                  className={
                    checkSection("/el-programa-definitivo") ? "current" : ""
                  }
                >
                  <strong>Fase 5</strong>: El programa definitivo del reto
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {publishedChallengeNumber > 1 && (
          <ul className={`${publishedChallengeNumber > 2 ? "passed" : ""}`}>
            <li>
              <a
                href="/challenge2"
                className={checkSection("/challenge2") ? "current" : ""}
              >
                Reto 2: Un poco de música
              </a>
            </li>
            <li>
              <a
                href="/challenge2/entregas"
                className={
                  checkSection("/challenge2/entregas") ? "current" : ""
                }
              >
                Resumen de entregas
              </a>
              <ul className={currentChallengeNumber === 2 ? "open" : ""}>
                <li>
                  <a
                    href="/challenge2/typescript"
                    className={checkSection("/typescript") ? "current" : ""}
                  >
                    <strong>Fase 1:</strong> TypeScript
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge2/typescript/tu-primer-programa-en-typescript"
                        className={
                          checkSection("/tu-primer-programa-en-typescript")
                            ? "current"
                            : ""
                        }
                      >
                        Tu primer programa en TypeScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge2/typescript/type-checking"
                        className={
                          checkSection("/type-checking") ? "current" : ""
                        }
                      >
                        Type-checking
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/challenge2/estructuras-de-control"
                    className={
                      checkSection("/estructuras-de-control") ? "current" : ""
                    }
                  >
                    <strong>Fase 2:</strong> Estructuras de control
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge2/estructuras-de-control/condicionales"
                        className={
                          checkSection("/condicionales") ? "current" : ""
                        }
                      >
                        Condicionales
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge2/estructuras-de-control/expresiones-ternarias"
                        className={
                          checkSection("/expresiones-ternarias")
                            ? "current"
                            : ""
                        }
                      >
                        Expresiones ternarias
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge2/estructuras-de-control/bucles"
                        className={checkSection("/bucles") ? "current" : ""}
                      >
                        Bucles
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/challenge2/arrays"
                    className={checkSection("/arrays") ? "current" : ""}
                  >
                    <strong>Fase 3:</strong> Arrays
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge2/arrays/crear-y-modificar-un-array"
                        className={
                          checkSection("/crear-y-modificar-un-array")
                            ? "current"
                            : ""
                        }
                      >
                        Crear y modificar un array
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge2/arrays/recorrer-un-array"
                        className={
                          checkSection("/recorrer-un-array") ? "current" : ""
                        }
                      >
                        Recorrer un array
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge2/arrays/metodos-de-arrays"
                        className={
                          checkSection("/metodos-de-arrays") ? "current" : ""
                        }
                      >
                        Métodos de arrays
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge2/arrays/mejorando-la-lista-de-canciones"
                        className={
                          checkSection("/mejorando-la-lista-de-canciones")
                            ? "current"
                            : ""
                        }
                      >
                        Mejorando la lista de canciones
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/challenge2/objetos"
                    className={checkSection("/objetos") ? "current" : ""}
                  >
                    <strong>Fase 4:</strong> Objetos
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge2/objetos/acceder-propiedades-objeto"
                        className={
                          checkSection("/acceder-propiedades-objeto")
                            ? "current"
                            : ""
                        }
                      >
                        Acceder a las propiedades de un objeto
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/challenge2/reproductor-de-musica"
                    className={
                      checkSection("/reproductor-de-musica") ? "current" : ""
                    }
                  >
                    <strong>Fase 5:</strong> El reproductor de música
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        )}
        {publishedChallengeNumber > 2 && (
          <ul className={`${publishedChallengeNumber > 3 ? "passed" : ""}`}>
            <li>
              <a
                href="/challenge3"
                className={checkSection("/challenge3") ? "current" : ""}
              >
                Reto 3: La aplicación de sorteos
              </a>
            </li>
            <li>
              <a
                href="/challenge3/entregas"
                className={
                  checkSection("/challenge3/entregas") ? "current" : ""
                }
              >
                Resumen de entregas
              </a>
              <ul className={currentChallengeNumber === 3 ? "open" : ""}>
                <li>
                  <a
                    href="/challenge3/git"
                    className={checkSection("/git") ? "current" : ""}
                  >
                    <strong>Fase 1:</strong> Git
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge3/git/repositorios"
                        className={
                          checkSection("/repositorios") ? "current" : ""
                        }
                      >
                        Repositorios
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge3/git/jugando-con-git"
                        className={
                          checkSection("/jugando-con-git") ? "current" : ""
                        }
                      >
                        Jugando con Git
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/challenge3/funciones"
                    className={checkSection("/funciones") ? "current" : ""}
                  >
                    <strong>Fase 2:</strong> Funciones
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge3/funciones/caja-negra"
                        className={checkSection("/caja-negra") ? "current" : ""}
                      >
                        Caja negra
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge3/funciones/entrada-salida"
                        className={
                          checkSection("/entrada-salida") ? "current" : ""
                        }
                      >
                        Entrada y salida
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge3/funciones/expresiones"
                        className={
                          checkSection("/expresiones") ? "current" : ""
                        }
                      >
                        Expresiones
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/challenge3/arrays-objetos"
                    className={checkSection("/arrays-objetos") ? "current" : ""}
                  >
                    <strong>Fase 3:</strong> Arrays y objetos
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge3/arrays-objetos/metodos-arrays"
                        className={
                          checkSection("/metodos-arrays") ? "current" : ""
                        }
                      >
                        Métodos de arrays
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge3/arrays-objetos/mezclando-todo"
                        className={
                          checkSection("/mezclando-todo") ? "current" : ""
                        }
                      >
                        Mezclando todo
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/challenge3/app-sorteos"
                    className={checkSection("/app-sorteos") ? "current" : ""}
                  >
                    <strong>Fase 4:</strong> Aplicación de sorteos
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge3/app-sorteos/backlog"
                        className={
                          checkSection("/app-sorteos/backlog") ? "current" : ""
                        }
                      >
                        Backlog
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        )}
        {publishedChallengeNumber > 3 && (
          <ul className={`${publishedChallengeNumber > 4 ? "passed" : ""}`}>
            <li>
              <a
                href="/challenge4"
                className={checkSection("/challenge4") ? "current" : ""}
              >
                Reto 4: La aplicación Classroom
              </a>
            </li>
            <li>
              <a
                href="/challenge4/entregas"
                className={
                  checkSection("/challenge4/entregas") ? "current" : ""
                }
              >
                Resumen de entregas
              </a>
              <ul className={currentChallengeNumber === 4 ? "open" : ""}>
                <li>
                  <a
                    href="/challenge4/especificaciones"
                    className={
                      checkSection("/especificaciones") ? "current" : ""
                    }
                  >
                    <strong>Fase 1:</strong> Especificaciones
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/challenge4/especificaciones/user-stories"
                        className={
                          checkSection("/user-stories") ? "current" : ""
                        }
                      >
                        User stories
                      </a>
                    </li>
                    <li>
                      <a
                        href="/challenge4/especificaciones/backlog"
                        className={checkSection("/backlog") ? "current" : ""}
                      >
                        Backlog
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
