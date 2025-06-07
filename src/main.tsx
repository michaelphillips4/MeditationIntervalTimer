import React from "react";
import ReactDOM from "react-dom/client";
import "./orca.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Heading from "./Heading.js";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Heading />
      <App />
      <p className="center">
        v2.1 By Michael Phillips{" "}
        <a href="http:\\orca-tools.com">http:\\orca-tools.com</a>
      </p>
    </BrowserRouter>
  </React.StrictMode>
);
