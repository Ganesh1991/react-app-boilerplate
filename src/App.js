import React from "react";
const Warning = React.lazy(() => import("./warning"));

const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((p) => p + 1);
  const decrement = () => setCount((p) => p - 1);
  return (
    <div>
      <h1>Hello World !!!</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {count > 10 ? (
        <React.Suspense fallback="loading..">
          <Warning>Count is greater than limit</Warning>
        </React.Suspense>
      ) : null}
    </div>
  );
};

export default App;
