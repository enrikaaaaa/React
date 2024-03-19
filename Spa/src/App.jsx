import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import News from "../src/pages/News/News";
import Services from "../src/pages/Services/Services";
import Works from "../src/pages/Works/Works";
import Contacts from "../src/pages/Contacts/Contacts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
