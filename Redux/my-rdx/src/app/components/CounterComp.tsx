import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

function CounterComp() {
  //read the data from the store
  const count = useSelector((state: any) => state.counter.value);
  //change the data by sending action to the store
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>Count:{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default CounterComp;
