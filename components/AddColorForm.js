import React, { useState } from "react";

export default function AddColorForm({ onNewColor = f => f }) {
    const [title1, setTitle1] = useState("");
    const [color1, setColor1] = useState("#000000");

    const submit = e => {
        e.preventDefault();
        console.log("new color",{color1})
        onNewColor(title1, color1);
        setTitle1("");
        setColor1("#000000");
      };
    
      return (
        <form onSubmit={submit}>
          <input value = {title1} type="text" required onChange={e=>{setTitle1(e.target.value)}}/>
          <input value = {color1} type="color" required onChange={e=>{setColor1(e.target.value)}} />
          <button>ADD</button>
        </form>
      );
}


/*
import { useInput } from "./hook.js"

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

  const submit = e => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" required />
      <input {...colorProps} type="color" required  />
      <button>ADD</button>
    </form>
  );
}
*/