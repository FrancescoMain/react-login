import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //3 REDUX  In sostanza, questo codice fornisce l'accesso allo store Redux a tutti i componenti figli dell'applicazione.
  // Ciò consente ai componenti di accedere allo stato globale dell'applicazione e di inviare azioni che lo modificano utilizzando
  // i metodi forniti dall'oggetto store.
  <Provider store={store}>
    <App />
  </Provider>
);
