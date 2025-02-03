import { useParams } from "react-router";
import Challenge2Intro from "@challenge2/components/Challenge2Intro/Challenge2Intro";
import Challenge2Deliveries from "@challenge2/components/Challenge2Deliveries/Challenge2Deliveries";
import Challenge2TypeScript from "@challenge2/components/Challenge2TypeScript/Challenge2TypeScript";
import Challenge2TypeChecking from "@challenge2/components/Challenge2TypeChecking/Challenge2TypeChecking";
import Challenge2FirstProgram from "@challenge2/components/Challenge2FirstProgram/Challenge2FirstProgram";
import Challenge2Control from "@challenge2/components/Challenge2Control/Challenge2Control";
import Challenge2Conditionals from "@challenge2/components/Challenge2Conditionals/Challenge2Conditionals";
import Challenge2Ternary from "@challenge2/components/Challenge2Ternary/Challenge2Ternary";

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
    | "estructuras-de-control";
  type Subsection =
    | "undefined"
    | "tu-primer-programa-en-typescript"
    | "type-checking"
    | "condicionales"
    | "expresiones-ternarias";

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
  }
};

export default Challenge2Page;
