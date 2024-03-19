import "./context.css";
function Context(props) {
  return (
    <div className="title">
      <h1>{props.contextTitle}</h1>
      <p>{props.contextParagraph}</p>
    </div>
  );
}

export default Context;
