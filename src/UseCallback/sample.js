import React, { useCallback, useState } from "react";

const Child = ({}) => {
  console.log("Child rendered");
  return <button>Click Me</button>;
};

const SampleUseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child />
    </div>
  );
};

export default SampleUseCallback;
