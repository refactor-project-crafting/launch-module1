import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import ChallengePage from "../pages/ChallengePage/ChallengePage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/challenge1/introduccion" />} />
        <Route
          path=":challengeId/:sectionId/:subsectionId?"
          element={<ChallengePage />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
