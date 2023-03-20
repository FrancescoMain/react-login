import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Item from "../pages/Item/Item";
import { Route } from "./type";

export const router: Route[] = [
  {
    path: "/",
    element: <Login />,
    name: "Login",
    visible: true,
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
    visible: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
    visible: true,
  },
  {
    path: "/item/:name",
    element: <Item />,
    name: "Item",
    visible: false,
  },
];

export const routerController = createBrowserRouter(router);
