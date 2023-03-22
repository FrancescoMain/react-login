import { createAction } from "@reduxjs/toolkit";

//4 REDUX tramite CreateAction che accetta una stringa che definisce l'azione, in più accetta un parametro di tipo number nel caso di increment e decrement.

export const increment = createAction<number>('counter/increment')
export const decrement = createAction<number>('counter/decement')
export const reset = createAction('counter/reset')