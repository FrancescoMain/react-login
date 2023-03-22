import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import { CounterPage } from "../pages/Counter/CounterPage";
import { counterReducer } from "../pages/Counter/store/counter.reducer";
import Dashboard from "../pages/Dashboard/Dashboard";
import Item from "../pages/Item/Item";
import List from "../pages/List/List";
import { Route } from "./type";

//ROUTER

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
  {
    path: "/counter",
    element: <CounterPage />,
    name: "Counter",
    visible: true,
  },
];

export const routerController = createBrowserRouter(router);

//1) REDUX combineReducers combina i riduttori. I riduttori sono funzioni che specificano cole lo stato deve cambiare
// in risposta ad actions specifiche. In questo caso counterReducer è un reducer del componente counter
const rootReducer = combineReducers({
  counter: counterReducer,
});

//2) REDUX Crea l'istanza store che è il fulcro dell'architettura Redux e veràà utilizzato da tutti i componenti per accedere e modificare lo stato globale
// in questo caso passiamo a reducer il rootReducer, ovvero l'inseme di tutti i riduttori

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
