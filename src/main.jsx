import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import NotFound from "./pages/notFound";
import Historia from "./pages/historia";
import Turismo from "./pages/turismo";
import Inicio from "./pages/inicio";
import Consultas from "./components/Consultas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // Esto establece 'inicio' como página principal
        element: <Inicio />,
      },
      {
        path: "historia",
        element: <Historia />,
      },
      {
        path: "turismo",
        element: <Turismo />,
      },
      {
        path: "consultas",
        element: <Consultas />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
