import { useState, useEffect } from "react";
import Text from "../../common/Text";
import Nav from "../../common/Nav";
import "./Footer.css";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setCurrentDate(date.toLocaleDateString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <div className="footer">
        <Nav className="nav-footer" />
        <Text className="footer-text">Copyright © {currentDate}</Text>
      </div>
    </footer>
  );
};

export default Footer;
