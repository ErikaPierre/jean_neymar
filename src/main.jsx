import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Propos from "./pages/Propos.jsx";
import Oeuvres from "./pages/Oeuvres.jsx";
import ErrorPage from "./ErrorPage.jsx";
import ErrorBooks from "./ErrorBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        children: [
          {
            path: "/books/2",
            element: <ErrorBooks />,
          },
        ],
      },
      {
        path: "/about",
        element: <Propos />,
      },
      {
        path: "/books",
        element: <Oeuvres />,
        children: [
          {
            // path: `/books/${index}`,
            element: <ErrorBooks />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
