import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import CheckOut from "./Pages/CheckOut.jsx";
import Login from "./authentication/Login.jsx";
import { AuthProvider } from "./authentication/AuthContext.jsx";
import UpdateDelete from "./admin/UpdateDelete.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path:"/",
        element:<Home></Home>
      } ,
      {
        path: "/checkout/:total",
        element: <CheckOut></CheckOut>, 
      },
      {
        path: "/login",
        element:<Login></Login>, 
      },
      {
        path: "/updateDelete",
        element:<UpdateDelete></UpdateDelete>, 
      },
    
      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />

   </AuthProvider>
  </StrictMode>
);
