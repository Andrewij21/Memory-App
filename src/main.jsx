import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <CssBaseline />
        <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
