import { NavLink, useLocation } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import useConsoleDebug from "../../debug/useConsoleDebug";
import "./Sidebar.css";
import { useAuth } from "../../auth/useAuth";

const Sidebar: React.FC = () => {
  const flagsmith = useFlagsmith();
  const debug = useConsoleDebug();
  const { logout } = useAuth();

  const location = useLocation();

  const publishedChallengeNumber = Number(
    flagsmith.getValue("challenge-number")
  );
  debug("Challenge publicado: ", publishedChallengeNumber);

  if (publishedChallengeNumber === 0) {
    logout();
    return;
  }

  const currentPath = location.pathname.replace(/\/$/, "");

  if (currentPath === "") {
    return;
  }

  const currentChallengeNumber = +currentPath
    .split("/")[1]
    .replace("challenge", "");

  return (
    <aside className="main-sidebar">
      <strong>Módulo 1: Launch</strong>
      <nav className="main-navigation">
        <ul className={`${publishedChallengeNumber > 1 ? "passed" : ""}`}>
          <li>
            <NavLink end to="/challenge1/introduccion/">
              Reto 1: Acceso restringido
            </NavLink>
          </li>
          <li>
            <NavLink end to="/challenge1/entregas/">
              Resumen de entregas
            </NavLink>
            <ul className={currentChallengeNumber === 1 ? "open" : ""}>
              <li>
                <NavLink end to="/challenge1/os/">
                  <strong>Fase 1:</strong> Tu Sistema Operativo y su terminal
                </NavLink>
                <ul>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/os/moviendote-por-tu-disco-duro/"
                    >
                      Moviéndote por tu disco duro
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink end to="/challenge1/herramientas/">
                  <strong>Fase 2:</strong> Las herramientas del/la developer
                </NavLink>
                <ul>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/herramientas/configuracion-vs-code/"
                    >
                      Configuración del VS Code
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/herramientas/configuracion-git/"
                    >
                      Configuración de Git
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink end to="/challenge1/calentando-motores-js/">
                  <strong>Fase 3:</strong> Calentando motores con JS
                </NavLink>
                <ul>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/calentando-motores-js/tu-primer-programa/"
                    >
                      Tu primer programa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/calentando-motores-js/variables/"
                    >
                      Variables
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/calentando-motores-js/expresiones/"
                    >
                      Expresiones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/calentando-motores-js/finaliza-tu-primer-programa/"
                    >
                      Finaliza tu primer programa
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink end to="/challenge1/entorno-de-desarrollo/">
                  <strong>Fase 4:</strong> Un entorno de desarrollo
                </NavLink>
                <ul>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/entorno-de-desarrollo/tu-segundo-programa/"
                    >
                      Tu segundo programa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/entorno-de-desarrollo/operaciones-con-strings/"
                    >
                      Operaciones con strings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/challenge1/entorno-de-desarrollo/operaciones-con-numbers/"
                    >
                      Operaciones con numbers
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink end to="/challenge1/el-programa-definitivo/">
                  <strong>Fase 5</strong>: El programa definitivo del reto
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        {publishedChallengeNumber > 1 && (
          <ul className={`${publishedChallengeNumber > 2 ? "passed" : ""}`}>
            <li>
              <NavLink end to="/challenge2/introduccion/">
                Reto 2: Un poco de música
              </NavLink>
            </li>
            <li>
              <NavLink end to="/challenge2/entregas/">
                Resumen de entregas
              </NavLink>
              <ul className={currentChallengeNumber === 2 ? "open" : ""}>
                <li>
                  <NavLink end to="/challenge2/typescript/">
                    <strong>Fase 1:</strong> TypeScript
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        end
                        to="/challenge2/typescript/tu-primer-programa-en-typescript/"
                      >
                        Tu primer programa en TypeScript
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge2/typescript/type-checking/">
                        Type-checking
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge2/estructuras-de-control">
                    <strong>Fase 2:</strong> Estructuras de control
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        end
                        to="/challenge2/estructuras-de-control/condicionales/"
                      >
                        Condicionales
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/challenge2/estructuras-de-control/expresiones-ternarias/"
                      >
                        Expresiones ternarias
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/challenge2/estructuras-de-control/bucles/"
                      >
                        Bucles
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge2/arrays/">
                    <strong>Fase 3:</strong> Arrays
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        end
                        to="/challenge2/arrays/crear-y-modificar-un-array/"
                      >
                        Crear y modificar un array
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge2/arrays/recorrer-un-array/">
                        Recorrer un array
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge2/arrays/metodos-de-arrays/">
                        Métodos de arrays
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/challenge2/arrays/mejorando-la-lista-de-canciones/"
                      >
                        Mejorando la lista de canciones
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge2/objetos/">
                    <strong>Fase 4:</strong> Objetos
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        end
                        to="/challenge2/objetos/acceder-propiedades-objeto/"
                      >
                        Acceder a las propiedades de un objeto
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge2/reproductor-de-musica/">
                    <strong>Fase 5:</strong> El reproductor de música
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        )}
        {publishedChallengeNumber > 2 && (
          <ul className={`${publishedChallengeNumber > 3 ? "passed" : ""}`}>
            <li>
              <NavLink end to="/challenge3/introduccion/">
                Reto 3: La aplicación de sorteos
              </NavLink>
            </li>
            <li>
              <NavLink end to="/challenge3/entregas/">
                Resumen de entregas
              </NavLink>
              <ul className={currentChallengeNumber === 3 ? "open" : ""}>
                <li>
                  <NavLink end to="/challenge3/git/">
                    <strong>Fase 1:</strong> Git
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink end to="/challenge3/git/repositorios/">
                        Repositorios
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge3/git/jugando-con-git/">
                        Jugando con Git
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge3/funciones/">
                    <strong>Fase 2:</strong> Funciones
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink end to="/challenge3/funciones/caja-negra/">
                        Caja negra
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge3/funciones/entrada-salida/">
                        Entrada y salida
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge3/funciones/expresiones/">
                        Expresiones
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge3/arrays-objetos/">
                    <strong>Fase 3:</strong> Arrays y objetos
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        end
                        to="/challenge3/arrays-objetos/metodos-arrays/"
                      >
                        Métodos de arrays
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/challenge3/arrays-objetos/mezclando-todo/"
                      >
                        Mezclando todo
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge3/app-sorteos/">
                    <strong>Fase 4:</strong> Aplicación de sorteos
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink end to="/challenge3/app-sorteos/backlog/">
                        Backlog
                      </NavLink>
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
              <NavLink end to="/challenge4/introduccion/">
                Reto 4: La aplicación Classroom
              </NavLink>
            </li>
            <li>
              <NavLink end to="/challenge4/entregas/">
                Resumen de entregas
              </NavLink>
              <ul className={currentChallengeNumber === 4 ? "open" : ""}>
                <li>
                  <NavLink end to="/challenge4/presentacion/">
                    <strong>Fase 1:</strong> La capa de presentación
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink end to="/challenge4/presentacion/html/">
                        HTML
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/challenge4/presentacion/etiquetas-atributos/"
                      >
                        Etiquetas y atributos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge4/presentacion/css/">
                        CSS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/challenge4/presentacion/propiedades-css/"
                      >
                        Propiedades CSS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge4/presentacion/accesibilidad/">
                        Accesibilidad
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink end to="/challenge4/especificaciones/">
                    <strong>Fase 2:</strong> Especificaciones del proyecto
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                        end
                        to="/challenge4/especificaciones/user-stories/"
                      >
                        User stories
                      </NavLink>
                    </li>
                    <li>
                      <NavLink end to="/challenge4/especificaciones/backlog/">
                        Backlog
                      </NavLink>
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
