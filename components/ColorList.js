import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [],onRemoveColor }) {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map(color => (
        <Color key={color.id} {...color} onRemove={onRemoveColor}/>
      ))}
    </div>
  );
}
