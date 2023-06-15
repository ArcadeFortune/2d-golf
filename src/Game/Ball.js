import react, { useState, useRef, useEffect} from "react";
import "./Game.css";


function Ball({boardRef}) {
  const [y, setY] = useState(20);
  const ballRef = useRef(null);
  console.log('test')

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(ballRef.current.offsetTop, y)
      setY(y + 1);
      ballRef.current.style.top = y + 'px';
      // ballRef.current.offsetTop = y;
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [y]);
  // console.log(ref);
  return (
    <div className={'ball'} ref={ballRef}></div>
  );
}

export default Ball;
