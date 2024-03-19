import React from "react";
import Button from "./ClassButton";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <p>{this.props.paragraph}</p>
        <Button btnName="Mygtuka" />
      </div>
    );
  }
}

export default ClassDiv;
