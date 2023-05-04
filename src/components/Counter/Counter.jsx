import "./Counter.css";
import { useState } from "react";

function Counter(props) {
  const initialCount = props.initialCount;
  const step = props.step;

  if (typeof step !== "number") throw new Error("Invalid value for step");

  if (!initialCount || initialCount < 0)
    throw new Error("Initial count is  required");

  if (typeof initialCount !== "number")
    throw new Error("Initial count must be a number");

  const [count, setCount] = useState(initialCount || 0);

  const handleIncrementCount = () => {
    if (count === 10) return;
    setCount(count + step);
  };

  const handleDecrementCOunt = () => {
    if (count <= 0) return;
    setCount(count - step);
  };

  return (
    <div className="counter">
      <h1 className="counter-heading">Count is {count}</h1>
      <div className="counter-actions">
        <button onClick={handleDecrementCOunt} className="counter-button">
          -
        </button>
        <button onClick={handleIncrementCount} className="counter-button">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
