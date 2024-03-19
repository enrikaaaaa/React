import "./contextCard.css";
function ContextCard(props) {
  return (
    <div className="context-card">
      <img className="flower-img" src={props.cardImg}></img>
      <p> {props.cardText}</p>
    </div>
  );
}

export default ContextCard;
