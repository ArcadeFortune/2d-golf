import React from "react";
import { useState } from "react";

function StartAnimation({ startFunction }) {
  const [animationSkipped, setAnimationSkipped] = useState(false);

  function skipAnimation() {
    setAnimationSkipped(true);
  }
  return (
    <>
      <div onClick={skipAnimation} className="mainMenu">
        <div className="startAnimation">
          <h1>
            <span className={animationSkipped ? "" : "hello"}>Hello,</span>{" "}
            <span className={animationSkipped ? "" : "you"}>YOU</span>
          </h1>
          <br />

          <span className={animationSkipped ? "" : "playMeText"}>
            I'm sure you want to play my <br /> <strong>BETTER</strong> GOLF
          </span>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <button className={animationSkipped ? "btnRight" : "btnRight playMeBtn"} onClick={startFunction}>
            Yes, Play!
          </button>
          <button className={animationSkipped ? "btnLeft" : "btnLeft playMeBtn"} onClick={startFunction}>
            play anyway
          </button>
        </div>
      </div>
    </>
  );
}

export default StartAnimation;
