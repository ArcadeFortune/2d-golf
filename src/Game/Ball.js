import React, { useRef } from "react";
import "./Game.css";

function Ball({ boardRef }) {
  const ballRef = useRef(null);
  return (
    <div className={"ball"} ref={ballRef}>
      {" "}
    </div>
  );
}

export default Ball;
