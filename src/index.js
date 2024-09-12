import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} />
    <App />
  </React.StrictMode>
);
