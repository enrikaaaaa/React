import "./App.css";
import Pre_header from "../src/components/Pre_header/Pre_header";
import Nav from "../src/components/nav/Nav";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import BottomNav from "./components/bottom_nav/BottomNav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Pre_header />
      <Nav />
      <Hero />
      <Main />
      <BottomNav />
      <Footer/>
    </div>
  );
}

export default App;
