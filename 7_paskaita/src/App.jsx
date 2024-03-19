import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import Contacts from "../src/pages/Contacts";

function App() {
  return (
    <>
      <nav
        style={{
          textAlign: "center",
          marginTop: "16",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">Contacts</Link>
      </nav>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
