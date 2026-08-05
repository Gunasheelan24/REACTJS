import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../components/reactRouter/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
if (import.meta.env.PROD === "production" || import.meta.env.PROD) {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
