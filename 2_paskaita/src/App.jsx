import "./App.css";
import Class from "./components/ClassDiv";
import Div from "./components/FuncDiv";

function App() {
  return (
    <div>
      <div>
        <Div heading="as" paragraph="turiu" />
      </div>
      <div>
        <Class heading="as" paragraph="turiu" />
      </div>
    </div>
  );
}

export default App;
