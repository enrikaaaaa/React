import "./Hero.css";
import Button from "./Button";

function Hero(props) {
  return (
    <div className="Hero">
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <p>{props.paragraph2}</p>
      <Button text="Button" />
    </div>
  );
}

export default Hero;
