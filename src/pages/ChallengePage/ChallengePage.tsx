import { useParams } from "react-router";
import Challenge1Intro from "../../components/challenge1/Challenge1Intro/Challenge1Intro";
import Challenge1Deliveries from "../../components/challenge1/Challenge1Deliveries/Challenge1Deliveries";
import Challenge1Os from "../../components/challenge1/Challenge1Os/Challenge1Os";
import Challenge1Hd from "../../components/challenge1/Challenge1Hd/Challenge1Hd";
import Challenge1Tools from "../../components/challenge1/Challenge1Tools/Challenge1Tools";
import Challenge1VsCode from "../../components/challenge1/Challenge1VsCode/Challenge1VsCode";
import Challenge1Git from "../../components/challenge1/Challenge1Git/Challenge1Git";
import Challenge1TurningOn from "../../components/challenge1/Challenge1TurningOn/Challenge1TurningOn";
import Challenge1FirstProgram from "../../components/challenge1/Challenge1FirstProgram/Challenge1FirstProgram";
import Challenge1Variables from "../../components/challenge1/Challenge1Variables/Challenge1Variables";
import Challenge1Expressions from "../../components/challenge1/Challenge1Expressions/Challenge1Expressions";
import Challenge1FinishFirstProgram from "../../components/challenge1/Challenge1FinishFirstProgram/Challenge1FinishFirstProgram";
import Challenge1Environment from "../../components/challenge1/Challenge1Environment/Challenge1Environment";
import Challenge1SecondProgram from "../../components/challenge1/Challenge1SecondProgram/Challenge1SecondProgram";
import Challenge1Strings from "../../components/challenge1/Challenge1Strings/Challenge1Strings";
import Challenge1Numbers from "../../components/challenge1/Challenge1Numbers/Challenge1Numbers";
import Challenge1Definitive from "../../components/challenge1/Challenge1Definitive/Challenge1Definitive";

const ChallengePage: React.FC = () => {
  const { challengeId, sectionId, subsectionId } = useParams<{
    challengeId: ChallengePath;
    sectionId: Section;
    subsectionId: Subsection;
  }>();

  if (!challengeId || !sectionId) {
    return;
  }

  type ChallengeNumber = 1 | 2 | 3 | 4;
  type ChallengePath = `challenge${ChallengeNumber}`;

  type Section =
    | "introduccion"
    | "entregas"
    | "os"
    | "herramientas"
    | "calentando-motores-js"
    | "entorno-de-desarrollo"
    | "el-programa-definitivo";
  type Subsection =
    | "undefined"
    | "moviendote-por-tu-disco-duro"
    | "configuracion-vs-code"
    | "configuracion-git"
    | "tu-primer-programa"
    | "variables"
    | "expresiones"
    | "finaliza-tu-primer-programa"
    | "tu-segundo-programa"
    | "operaciones-con-strings"
    | "operaciones-con-numbers";

  if (challengeId === "challenge1") {
    if (sectionId === "introduccion") {
      return <Challenge1Intro />;
    }

    if (sectionId === "entregas") {
      return <Challenge1Deliveries />;
    }

    if (sectionId === "os") {
      if (!subsectionId) {
        return <Challenge1Os />;
      }

      if (subsectionId === "moviendote-por-tu-disco-duro") {
        return <Challenge1Hd />;
      }
    }

    if (sectionId === "herramientas") {
      if (!subsectionId) {
        return <Challenge1Tools />;
      }

      if (subsectionId === "configuracion-vs-code") {
        return <Challenge1VsCode />;
      }

      if (subsectionId === "configuracion-git") {
        return <Challenge1Git />;
      }
    }

    if (sectionId === "calentando-motores-js") {
      if (!subsectionId) {
        return <Challenge1TurningOn />;
      }

      if (subsectionId === "tu-primer-programa") {
        return <Challenge1FirstProgram />;
      }

      if (subsectionId === "variables") {
        return <Challenge1Variables />;
      }

      if (subsectionId === "expresiones") {
        return <Challenge1Expressions />;
      }

      if (subsectionId === "finaliza-tu-primer-programa") {
        return <Challenge1FinishFirstProgram />;
      }
    }

    if (sectionId === "entorno-de-desarrollo") {
      if (!subsectionId) {
        return <Challenge1Environment />;
      }

      if (subsectionId === "tu-segundo-programa") {
        return <Challenge1SecondProgram />;
      }

      if (subsectionId === "operaciones-con-strings") {
        return <Challenge1Strings />;
      }

      if (subsectionId === "operaciones-con-numbers") {
        return <Challenge1Numbers />;
      }
    }

    if (sectionId === "el-programa-definitivo") {
      return <Challenge1Definitive />;
    }
  }
};

export default ChallengePage;
