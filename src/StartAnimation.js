import { hover } from "@testing-library/user-event/dist/hover";

function StartAnimation({ startFunction }) {
  return (
    <>
    
    <div className="mainMenu">
      <div className="startAnimation">
        <h1>
          <span className="hello">Hello,</span> <span className="you">YOU</span>
        </h1>
        <br />

        <span className="playMeText">
          I'm sure you want to play my <br /> <strong>BETTER</strong> GOLF
        </span>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <button className="btnRight" onClick={startFunction}>Yes, Play!</button>
        <button className="btnLeft" onClick={startFunction}>play anyway</button>
      </div>
    </div>
    </>
  );
}

export default StartAnimation;
