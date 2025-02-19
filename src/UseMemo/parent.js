import React, { useState, useMemo, useCallback } from "react";
import Child from "./child";

// Parent component
const Parent = () => {
  const [count, setCount] = useState(0);

  const items = useMemo(() => ["Apple", "Banana", "Cherry"], []);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <Child items={items} />
    </div>
  );
};

export default Parent;
