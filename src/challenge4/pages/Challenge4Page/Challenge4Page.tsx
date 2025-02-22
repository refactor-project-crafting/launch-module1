import { useParams } from "react-router";
import Challenge4Intro from "../../components/Challenge4Intro/Challenge4Intro";
import Challenge4Deliveries from "../../components/Challenge4Deliveries/Challenge4Deliveries";
import Challenge4Specs from "../../components/Challenge4Specs/Challenge4Specs";
import Challenge4UserStories from "../../components/Challenge4UserStories/Challenge4UserStories";
import Challenge4Backlog from "../../components/Challenge4Backlog/Challenge4Backlog";
import Challenge4Presentation from "../../components/Challenge4Presentation/Challenge4Presentation";
import Challenge4Html from "../../components/Challenge4Html/Challenge4Html";
import Challenge4Css from "../../components/Challenge4Css/Challenge4Css";
import Challenge4TagsAttributes from "../../components/Challenge4TagsAttributes/Challenge4TagsAttributes";
import Challenge4CssProperties from "../../components/Challenge4CssProperties/Challenge4CssProperties";
import Challenge4A11y from "../../components/Challenge4A11y/Challenge4A11y";

const Challenge4Page: React.FC = () => {
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
    | "presentacion"
    | "especificaciones";
  type Subsection =
    | "undefined"
    | "html"
    | "etiquetas-atributos"
    | "css"
    | "propiedades-css"
    | "accesibilidad"
    | "user-stories"
    | "backlog";

  if (sectionId === "introduccion") {
    return <Challenge4Intro />;
  }

  if (sectionId === "entregas") {
    return <Challenge4Deliveries />;
  }

  if (sectionId === "presentacion") {
    if (!subsectionId) {
      return <Challenge4Presentation />;
    }

    if (subsectionId === "html") {
      return <Challenge4Html />;
    }

    if (subsectionId === "etiquetas-atributos") {
      return <Challenge4TagsAttributes />;
    }

    if (subsectionId === "css") {
      return <Challenge4Css />;
    }

    if (subsectionId === "propiedades-css") {
      return <Challenge4CssProperties />;
    }

    if (subsectionId === "accesibilidad") {
      return <Challenge4A11y />;
    }
  }

  if (sectionId === "especificaciones") {
    if (!subsectionId) {
      return <Challenge4Specs />;
    }

    if (subsectionId === "user-stories") {
      return <Challenge4UserStories />;
    }

    if (subsectionId === "backlog") {
      return <Challenge4Backlog />;
    }
  }
};

export default Challenge4Page;
