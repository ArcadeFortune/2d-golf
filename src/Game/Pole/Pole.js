import React, { useContext } from "react";
import "./Pole.css";

import { GlobalContext } from "../../Globals";

export default function Pole({ pole }) {
  // console.log(pole.key)
  const { gameRules } = useContext(GlobalContext);
  
  const style = {
    width: gameRules.poleSize,
    height: gameRules.poleSize,
    position: "absolute",
    left: pole.x,
    top: pole.y,
  };

  return (
    <div
      style={style}
      className="pole"
    ></div>
  );
}
