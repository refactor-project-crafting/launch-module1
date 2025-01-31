import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import Challenge1Page from "../pages/Challenge1Page/Challenge1Page";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/challenge1" />} />
        <Route path="challenge1" element={<Challenge1Page />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
