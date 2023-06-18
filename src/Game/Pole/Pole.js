import React, { useContext } from "react";
import "./Pole.css";

import { GlobalContext } from "../../Globals";

export default function Pole({ poles }) {
  const { gameRules } = useContext(GlobalContext);
  const style = {
    width: gameRules.poleSize,
    height: gameRules.poleSize,
    position: "absolute",
    left: poles.x,
    top: poles.y,
  };
  console.log(poles.key);
  return (
    <div
      key={poles.key}
      style={style}
      className="pole"
    ></div>
  );
}
