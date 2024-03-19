import "./App.css";
import Hero from "./components/Hero";
import Context from "./components/Context";
import ContextCard from "./components/ContextCard";
import img from "./assets/img.jpg";
import img2 from "./assets/img2.jpeg";

function App() {
  const cards = [
    {
      cardText: "srgsraeeeeeg",
      img: img,
    },
    {
      cardText: "sreeegsraeeg",
      img: img,
    },
    {
      cardText: "eeseeergsraeg",
      img: img,
    },
  ];

  return (
    <div>
      <div className="hero-container">
        <Hero
          title="Title"
          paragraph="pirmasis tekstas"
          paragraph2="antrasis tekstas"
        />
      </div>
      <div>
        <Context contextTitle="Portfolio" contextParagraph="Loredfv`svgm" />
      </div>
      <div className="cards-container">
        {/* <ContextCard cardText="srgsraeg" cardImg={img} />
        <ContextCard cardText="srgsraeg" cardImg={img} />
        <ContextCard cardText="srgsraeg" cardImg={img} /> */}

        {cards.map((card, index) => (
          <ContextCard
            key={index}
            cardText={card.cardText}
            cardImg={card.img}
          />
        ))}
      </div>
      <div className="cards-container">
        <ContextCard cardText="srgsraeg" cardImg={img2} />
        <ContextCard cardText="srgsraeg" cardImg={img2} />
        <ContextCard cardText="srgsraeg" cardImg={img2} />
      </div>
    </div>
  );
}

export default App;
