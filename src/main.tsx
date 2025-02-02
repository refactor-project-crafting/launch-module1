import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles/styles.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
