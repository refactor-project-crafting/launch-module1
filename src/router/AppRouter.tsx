import { Navigate, Route, Routes } from "react-router";
import App from "@components/App/App";
import Challenge1Page from "@challenge1/pages/Challenge1Page/Challenge1Page";
import Challenge2Page from "@challenge2/pages/Challenge2Page/Challenge2Page";
import Challenge3Page from "../challenge3/pages/Challenge3Page/Challenge3Page";
import Challenge4Page from "../challenge4/pages/Challenge4Page/Challenge4Page";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/challenge1/introduccion" />} />
        <Route
          path="challenge1/:sectionId/:subsectionId?"
          element={<Challenge1Page />}
        />
        <Route
          path="challenge2/:sectionId/:subsectionId?"
          element={<Challenge2Page />}
        />
        <Route
          path="challenge3/:sectionId/:subsectionId?"
          element={<Challenge3Page />}
        />
        <Route
          path="challenge4/:sectionId/:subsectionId?"
          element={<Challenge4Page />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
