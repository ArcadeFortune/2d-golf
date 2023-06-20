import "./Text.css"

export default function Text({text}) {

  const style = {
    width: 60,
    height: 30,
    position: "absolute",
    left: text.x,
    top: text.y,
  };

  return (
    <div style={style} className={text.class}>{text.text}</div>
  )
}