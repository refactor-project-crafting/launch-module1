import { useParams } from "react-router";
import Challenge3Intro from "../../components/Challenge3Intro/Challenge3Intro";
import Challenge3Deliveries from "../../components/Challenge3Deliveries/Challenge3Deliveries";

const Challenge3Page: React.FC = () => {
  const { sectionId, subsectionId } = useParams<{
    sectionId: Section;
    subsectionId: Subsection;
  }>();

  if (!sectionId) {
    return;
  }

  type Section =
    | "introduccion"
    | "entregas"
    | "git"
    | "funciones"
    | "arrays-objetos"
    | "app-sorteos";
  type Subsection =
    | "undefined"
    | "repositorios"
    | "jugando-con-git"
    | "caja-negra"
    | "entrada-salida"
    | "expresiones"
    | "metodos-arrays"
    | "mezclando-todo"
    | "backlog";

  if (sectionId === "introduccion") {
    return <Challenge3Intro />;
  }

  if (sectionId === "entregas") {
    return <Challenge3Deliveries />;
  }
};

export default Challenge3Page;
