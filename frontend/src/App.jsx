import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css'  

import { createBrowserRouter,
   RouterProvider 
  } from "react-router-dom";

//importar los componentes

import Root from "./components/root";
import Home from "./components/Home";
import Clientes from "./components/Clientes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[{
      path:"/",
      element: <Home />
      
    },
  {
    path:"Clientes",
    element:<Clientes />
  }]
  },
]);

  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;


