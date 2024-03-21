import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Main/Main";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
