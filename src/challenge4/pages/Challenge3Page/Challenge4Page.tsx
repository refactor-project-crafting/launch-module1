import { useParams } from "react-router";
import Challenge4Intro from "../../components/Challenge4Intro/Challenge4Intro";
import Challenge4Deliveries from "../../components/Challenge4Deliveries/Challenge4Deliveries";
import Challenge4Specs from "../../components/Challenge4Specs/Challenge4Specs";
import Challenge4UserStories from "../../components/Challenge4UserStories/Challenge4UserStories";
import Challenge4Backlog from "../../components/Challenge4Backlog/Challenge4Backlog";

const Challenge4Page: React.FC = () => {
  const { sectionId, subsectionId } = useParams<{
    sectionId: Section;
    subsectionId: Subsection;
  }>();

  if (!sectionId) {
    return;
  }

  type Section = "introduccion" | "entregas" | "especificaciones";
  type Subsection = "undefined" | "user-stories" | "backlog";

  if (sectionId === "introduccion") {
    return <Challenge4Intro />;
  }

  if (sectionId === "entregas") {
    return <Challenge4Deliveries />;
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
