import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { FlagsmithProvider } from "flagsmith/react";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AuthContextProvider from "./auth/AuthContext/AuthContextProvider";
import flagsmith from "./auth/flagsmith";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FlagsmithProvider flagsmith={flagsmith}>
      <AuthContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppRouter />
        </BrowserRouter>
      </AuthContextProvider>
    </FlagsmithProvider>
  </StrictMode>
);
