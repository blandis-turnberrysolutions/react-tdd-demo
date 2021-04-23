import * as React from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const increment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCounterValue(counterValue + 1);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div>
      <h1>Counter Application</h1>
      <figure data-test-id="counter" aria-label="counter">
        {counterValue}
      </figure>
      <button
        disabled={isLoading}
        data-test-id="incrementButton"
        onClick={increment}
      >
        Increment
      </button>
      <button
        data-test-id="decrementButton"
        onClick={() => setCounterValue(counterValue - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
