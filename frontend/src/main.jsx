import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//importar los componentes

import Root from "./components/root";
import ErrorPage from "./error-page";
import Clients from "./components/Clientes";
import Home from "./components/Home";
import CreateClients from "./components/client.form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Dashboard",
        element: <Home />,
      },
      {
        path: "/clientes",
        element: <Clients />,
      },
      {
        path: "/clientes/new",
        element: <CreateClients />,
      },
      {
        path:"/clientes/editar/:_id",
        element:<CreateClients/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
