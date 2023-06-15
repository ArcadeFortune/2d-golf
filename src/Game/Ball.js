 
import "./Game.css";


function Ball({ref}) {
  console.log(ref);
  return (
    <div className="ball" ref={ref}></div>
  );
}

export default Ball;
