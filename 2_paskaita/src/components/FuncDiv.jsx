import Button from "./FuncButton";

function FuncDiv(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
      <Button btnName="Mygtuka" />
    </div>
  );
}

export default FuncDiv;
