import { useParams } from "react-router";
import Challenge3Intro from "../../components/Challenge3Intro/Challenge3Intro";
import Challenge3Deliveries from "../../components/Challenge3Deliveries/Challenge3Deliveries";
import Challenge3Git from "../../components/Challenge3Git/Challenge3Git";
import Challenge3Repos from "../../components/Challenge3Repos/Challenge3Repos";
import Challenge3PlayingGit from "../../components/Challenge3PlayingGit/Challenge3PlayingGit";
import Challenge3Functions from "../../components/Challenge3Functions/Challenge3Functions";
import Challenge3BlackBox from "../../components/Challenge3BlackBox/Challenge3BlackBox";
import Challenge3InputOutput from "../../components/Challenge3InputOutput/Challenge3InputOutput";
import Challenge3Expressions from "../../components/Challenge3Expressions/Challenge3Expressions";

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

  if (sectionId === "git") {
    if (!subsectionId) {
      return <Challenge3Git />;
    }

    if (subsectionId === "repositorios") {
      return <Challenge3Repos />;
    }

    if (subsectionId === "jugando-con-git") {
      return <Challenge3PlayingGit />;
    }
  }

  if (sectionId === "funciones") {
    if (!subsectionId) {
      return <Challenge3Functions />;
    }

    if (subsectionId === "caja-negra") {
      return <Challenge3BlackBox />;
    }

    if (subsectionId === "entrada-salida") {
      return <Challenge3InputOutput />;
    }

    if (subsectionId === "expresiones") {
      return <Challenge3Expressions />;
    }
  }
};

export default Challenge3Page;
