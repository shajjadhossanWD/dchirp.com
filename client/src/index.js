import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import DslProvider from "./context/DslsocialContext";

ReactDOM.render(
  <DslProvider>
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
  </DslProvider>,
  document.getElementById("root")
);
