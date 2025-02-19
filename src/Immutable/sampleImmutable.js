import React, { useState } from "react";

const Child = ({ items }) => {
  console.log("Child rendered");
  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {items.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const SampleImmutable = () => {
  const [fruites, setFruites] = useState(["Apple", "Banana", "Cherry"]);

  const updateS = (value) => {
    setFruites(value);
  };

  const addItem = () => {
    fruites.push("Orange");
    updateS(fruites);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={addItem}>Add Item</button>
      <Child items={fruites} />
    </div>
  );
};

export default SampleImmutable;
