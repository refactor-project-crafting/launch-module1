import { useParams } from "react-router";
import Challenge1Intro from "../../components/challenge1/Challenge1Intro/Challenge1Intro";
import Challenge1Deliveries from "../../components/challenge1/Challenge1Deliveries/Challenge1Deliveries";
import Challenge1Os from "../../components/challenge1/Challenge1Os/Challenge1Os";
import Challenge1Hd from "../../components/challenge1/Challenge1Hd/Challenge1Hd";
import Challenge1Tools from "../../components/challenge1/Challenge1Tools/Challenge1Tools";

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

  type Section = "introduccion" | "entregas" | "os" | "herramientas";
  type Subsection = "undefined" | "moviendote-por-tu-disco-duro";

  type Components = Partial<
    Record<
      ChallengePath,
      Partial<
        Record<Section, JSX.Element | Partial<Record<Subsection, JSX.Element>>>
      >
    >
  >;

  const components: Components = {
    challenge1: {
      introduccion: <Challenge1Intro />,
      entregas: <Challenge1Deliveries />,
      os: {
        undefined: <Challenge1Os />,
        "moviendote-por-tu-disco-duro": <Challenge1Hd />,
      },
      herramientas: {
        undefined: <Challenge1Tools />,
      },
    },
  };

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
    }
  }
};

export default ChallengePage;
