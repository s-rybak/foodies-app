import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        children: [
          {
            index: true,
          },
          {
            path: ":pageId",
            element: <App />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter router={router}>
    <App />
  </BrowserRouter>
);
