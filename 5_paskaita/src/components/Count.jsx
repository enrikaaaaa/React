import { useState } from "react";
import Button from "./Button";
import Text from "./Text";
import "./count.css";

const Count = () => {
  const [count, setCount] = useState(500);

  const add = [
    { method: () => setCount(count + 10), text: "Prideti 10" },
    { method: () => setCount(count + 20), text: "Prideti 20" },
    { method: () => setCount(count + 50), text: "Prideti 50" },
    { method: () => setCount(count + 100), text: "Prideti 100" },
  ];

  const remove = [
    { method: () => setCount(count - 10), text: "Isimti 10" },
    { method: () => setCount(count - 20), text: "Isimti 20" },
    { method: () => setCount(count - 50), text: "Isimti 50" },
    { method: () => setCount(count - 100), text: "Isimti 100" },
  ];

  return (
    <div>
      <Text text={"Balansas: " + count} />
      <div className="buttons">
        <div className="buttons-add">
          {add.map((add, index) => (
            <div key={index} className="button">
              <Button blue method={add.method} text={add.text}></Button>
            </div>
          ))}
        </div>
        <div className="buttons-remove">
          {remove.map((remove, index) => (
            <div key={index} className="button">
              <Button red method={remove.method} text={remove.text}></Button>
            </div>
          ))}
        </div>
        <div className="buttons-reset">
          <div className="button">
            <Button
              white
              method={() => setCount(0)}
              text={"Issiimti viska"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
