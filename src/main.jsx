// import { StrictMode } from "react";
// <StrictMode></StrictMode> renders app twice, helps catch problems - disabled for now
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router";

//app is wrapped in Provider - now router can be used in app.jsx
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
