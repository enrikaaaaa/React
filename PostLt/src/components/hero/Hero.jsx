import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import pic from "../../assets/pictures/hero-1.jpeg";
import pic2 from "../../assets/pictures/hero-2.png";
import pic3 from "../../assets/pictures/hero-3.jpg";
import Text from "../../common/Text";
import "../../styles/hero.css";
import Button from "../../common/Button";
import ListItem from "../../common/ListItem";
import Picture from "../../common/Picture";
import target from "../../assets/pictures/target.jpg";
import declaration from "../../assets/pictures/declaration.jpg";
import letter from "../../assets/pictures/letter.jpeg";
import calculator from "../../assets/pictures/calculator.png";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};
const slideImages = [
  {
    url: pic,
  },
  {
    url: pic2,
  },
  {
    url: pic3,
  },
];

const Hero = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
      <div className="left-side-hero-text">
        <div>
          <Picture image={target} alt="hero" />
          <ListItem name="Siuntu  sekimas" />
        </div>
        <div>
          <Picture image={declaration} alt="hero" />
          <ListItem name="Deklaruoti siunta" />
        </div>
        <div>
          <Picture image={letter} alt="hero" />
          <ListItem name="Pasto kodai ir adresai" />
        </div>
        <div>
          <Button className="btn btn-primary">
            <Picture image={calculator} alt="hero" /> Siusti siunta
          </Button>
        </div>
      </div>
      <div className="right-side-hero-text">
        <Text text="Perkant Pegasas.lt - nuolaidos pristatymui 5 LP EXPRESS pastomatus" />
        <Button white>Placiau</Button>
      </div>
    </div>
  );
};

export default Hero;
