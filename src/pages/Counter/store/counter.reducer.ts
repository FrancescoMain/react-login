import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { decrement, increment, reset } from "./counter.actions";

//6 REDUX CounterReducer è la funzione collegata allo stato globale. la funzione createReducer crea un riduttore che accetta due argomenti:
// il valore iniziale dello stato, e un costruttore che definisce le varie azioni.
//in add case viene inserito il nome dell'azione, i parametri sono lo state e l'action passati dall'altro file 
//  e infine definisce la logica, in questo caso un addizione fra lo stato e l'action.payload passato dal componente

export const counterReducer = createReducer(0, builder => 
        builder
        .addCase(increment, (state,action) => state+action.payload)
        .addCase(decrement, (state,action)=> state - action.payload)
        .addCase(reset, ()=> 0)
    )