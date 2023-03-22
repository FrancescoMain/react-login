import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as CounterAction from "./store/counter.actions";
import { selectCounter } from "./store/counter.selectors";

export const CounterPage = () => {
  // 7 REDUX viene rischiamato useDispatch che sserve a inviare azioni al sistema Redux, in counter viene assegnato lo stato attuale di counter
  //tramite il selettore
  //in h1 viene stampato lo stato a schermo, e sui bottoni viene definita un azione on click dove viene utilizzato counterAction. il nome dell'azione
  //e il parametro che si vuole passsare.
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(CounterAction.decrement(10))}>-</button>
      <button onClick={() => dispatch(CounterAction.increment(5))}>+</button>
      <button onClick={() => dispatch(CounterAction.reset())}>RESET</button>
    </div>
  );
};
