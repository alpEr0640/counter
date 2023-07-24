import React from "react";

export default function CounterButtons(props) {
  const { count, setCount } = props;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Artır (+)</button>
      <button onClick={() => setCount(count - 1)}> Azalt (-)</button>
    </div>
  );
}
