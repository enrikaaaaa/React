import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/todos">Todos</Link>

      <Link to="/todos/new">New Todo</Link>
    </nav>
  );
};

export default NavigationBar;
