import "./App.css";
import Card from "./components/Card";
import dog from "../src/assets/dog.jpeg";
import lizzard from "../src/assets/lizzard.jpg";
import Avatar from "./components/Avatar";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <div className="App">
        <Card
          title="Dog"
          subtitle="Naminis šuo arba šuo (Canis lupus familiaris) – šuninių (Canidae) šeimos, šunų (Canis) genties naminis gyvūnas."
          image={dog}
        />
        <Card
          title="Lizzard"
          subtitle="Kūnas pailgas, su aiškiu kaklu ir ilga uodega. Turi gerai išvystytas galūnes ir pailgėjusį liemenį. Kai kurių rūšių galūnės redukuotos arba visai išnykusios. Akių vokai judrūs, turi gerai matomą ausies būgninę membraną."
          image={lizzard}
        />
      </div>
      <div className="Avatars">
        <Avatar name="Romas Rudzikiene" />
        <Avatar name="Tomas Tomaitis" />
      </div>
      <div>
        <Products name="BEST SELLERS" />
      </div>
    </div>
  );
}

export default App;
