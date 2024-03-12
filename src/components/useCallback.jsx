import React, { useState, useCallback } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Một hàm callback không thay đổi, nhưng không được memoize
  const handleClick = () => {
    console.log("Button clicked");
  };

  // Một hàm callback sử dụng useCallback để memoize nó
  const handleClickMemoized = useCallback(() => {
    console.log("Button clicked");
  }, []); // không có dependencies

  return (
    <div>
      <button onClick={handleClick}>Click me (not memoized)</button>
      <button onClick={handleClickMemoized}>Click me (memoized)</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default MyComponent;
