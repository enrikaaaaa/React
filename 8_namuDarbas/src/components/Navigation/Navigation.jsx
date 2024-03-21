import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [, setActiveLink] = useState("");
  const location = useLocation();

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => handleSetActiveLink("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className={location.pathname === "/users" ? "active" : ""}
            onClick={() => handleSetActiveLink("users")}
          >
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
