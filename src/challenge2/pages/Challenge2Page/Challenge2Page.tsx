import { useParams } from "react-router";
import Challenge2Intro from "@challenge2/components/Challenge2Intro/Challenge2Intro";
import Challenge2Deliveries from "@challenge2/components/Challenge2Deliveries/Challenge2Deliveries";
import Challenge2TypeScript from "@challenge2/components/Challenge2TypeScript/Challenge2TypeScript";
import Challenge2TypeChecking from "@challenge2/components/Challenge2TypeChecking/Challenge2TypeChecking";
import Challenge2FirstProgram from "@challenge2/components/Challenge2FirstProgram/Challenge2FirstProgram";
import Challenge2Control from "@challenge2/components/Challenge2Control/Challenge2Control";
import Challenge2Conditionals from "@challenge2/components/Challenge2Conditionals/Challenge2Conditionals";
import Challenge2Ternary from "@challenge2/components/Challenge2Ternary/Challenge2Ternary";
import Challenge2Loops from "@challenge2/components/Challenge2Loops/Challenge2Loops";
import Challenge2Arrays from "../../components/Challenge2Arrays/Challenge2Arrays";
import Challenge2CreateArray from "../../components/Challenge2CreateArray/Challenge2CreateArray";
import Challenge2IterateArray from "../../components/Challenge2IterateArray/Challenge2IterateArray";
import Challenge2ArrayMethods from "../../components/Challenge2ArrayMethods/Challenge2ArrayMethods";

const Challenge2Page: React.FC = () => {
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
    | "typescript"
    | "estructuras-de-control"
    | "arrays";
  type Subsection =
    | "undefined"
    | "tu-primer-programa-en-typescript"
    | "type-checking"
    | "condicionales"
    | "expresiones-ternarias"
    | "bucles"
    | "crear-y-modificar-un-array"
    | "recorrer-un-array"
    | "metodos-de-arrays";

  if (sectionId === "introduccion") {
    return <Challenge2Intro />;
  }

  if (sectionId === "entregas") {
    return <Challenge2Deliveries />;
  }

  if (sectionId === "typescript") {
    if (!subsectionId) {
      return <Challenge2TypeScript />;
    }

    if (subsectionId === "tu-primer-programa-en-typescript") {
      return <Challenge2FirstProgram />;
    }

    if (subsectionId === "type-checking") {
      return <Challenge2TypeChecking />;
    }
  }

  if (sectionId === "estructuras-de-control") {
    if (!subsectionId) {
      return <Challenge2Control />;
    }

    if (subsectionId === "condicionales") {
      return <Challenge2Conditionals />;
    }

    if (subsectionId === "expresiones-ternarias") {
      return <Challenge2Ternary />;
    }

    if (subsectionId === "bucles") {
      return <Challenge2Loops />;
    }
  }

  if (sectionId === "arrays") {
    if (!subsectionId) {
      return <Challenge2Arrays />;
    }

    if (subsectionId === "crear-y-modificar-un-array") {
      return <Challenge2CreateArray />;
    }

    if (subsectionId === "recorrer-un-array") {
      return <Challenge2IterateArray />;
    }

    if (subsectionId === "metodos-de-arrays") {
      return <Challenge2ArrayMethods />;
    }
  }
};

export default Challenge2Page;
