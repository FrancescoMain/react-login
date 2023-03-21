import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Item from "../pages/Item/Item";
import List from "../pages/List/List";
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
  {
    path: "/list",
    element: <List />,
    name: "List",
    visible: true,
  },
];

export const routerController = createBrowserRouter(router);
