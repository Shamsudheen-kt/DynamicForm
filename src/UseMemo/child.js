import React from "react";

// Child component
const Child = React.memo(({ items }) => {
  console.log("Child rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {items.map((item) => (
          <li>item</li>
        ))}
      </ul>
    </div>
  );
});

export default Child;
