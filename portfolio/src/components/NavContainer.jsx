import "../styles/NavContainer.css";
function NavContainer() {
  return (
    <nav className="nav">
      <input id="menu" type="checkbox" />
      <label htmlFor="menu">Menu</label>
      <ul className="menu">
        <li>
          <a href="#1">
            <span>About</span>
            <i className="fas fa-address-card" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#2">
            <span>Kowledge</span>
            <i className="fas fa-tasks" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#3">
            <span>Contact</span>
            <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavContainer;
