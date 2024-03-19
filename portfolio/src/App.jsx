import "./App.css";
import Hero from "./components/Hero";
import NavContainer from "./components/NavContainer";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Knowledge from "./components/Knowledge";
import "./assets/Wallpaper.jpg";
import ListItem from "./components/ListItem";

function App() {
  return (
    <>
      <Hero />
      <NavContainer />
      <Footer />
      <About />
      <div className="knowledge-container">
        <h1>Knowledge</h1>
        <Knowledge h2="Front-End">
          <ListItem li="HTML" />
          <ListItem li="CSS" />
          <ListItem li="JavaScript" />
          <ListItem li="React" />
        </Knowledge>
        <Knowledge h2="Back-End">
          <ListItem li="Node.js" />
          <ListItem li="Express" />
          <ListItem li="MongoDB" />
        </Knowledge>
        <Knowledge h2="Other">
          <ListItem li="Git" />
          <ListItem li="GitHub" />
        </Knowledge>
        <Contact />
      </div>
    </>
  );
}

export default App;
