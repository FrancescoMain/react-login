import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Route } from "./type";

export const router: Route[] = [
  {
    path: "/",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
  },
];

export const routerController = createBrowserRouter(router);
