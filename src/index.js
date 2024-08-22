import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LoginProvider } from "./components/LoginContext";
ReactDOM.render(
  <LoginProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LoginProvider>,
  document.getElementById("root")
);
