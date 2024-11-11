import React from "react";
import { createRoot } from "react-dom/client";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating";
import colors from "./data/color-data.json"
import ColorList from "./components/ColorList";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//root.render(<Menu recipes={data} />);
/*root.render(<StarRating totalStars= {10} style={{ backgroundColor: "lightblue" }}
  onDoubleClick={e => alert("double click")}/>)
*/
//root.render(<ColorList colors={colors}></ColorList>)
root.render(<App></App>);