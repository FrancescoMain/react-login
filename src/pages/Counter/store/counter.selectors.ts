import { RootState } from "../../../store/store";

// 5 REDUX il selectCounter è una funzione che accede allo state generale tramite RootState e prende ciò che serve, ovver il counter.
export const selectCounter = (state: RootState) => state.counter