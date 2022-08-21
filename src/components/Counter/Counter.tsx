import * as React from "react";
import css from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div className={css.counterContainer}>
      <button onClick={decrement}>Decrement</button>
      <div className={css.count}>Current count: {count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
