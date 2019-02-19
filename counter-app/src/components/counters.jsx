import React from "react";
import Counter from "./counter";

export const Counters = ({
  onReset,
  counters,
  onDecrement,
  onIncrement,
  onDelete
}) => (
  <div>
    <button onClick={onReset} className="btn btn-primary btn-sm m-2">
      Reset
    </button>
    {counters.map(counter => (
      <Counter
        key={counter.id}
        onDelete={onDelete}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        counter={counter}
      />
    ))}
  </div>
);
