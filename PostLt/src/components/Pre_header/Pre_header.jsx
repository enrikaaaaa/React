import ListItem from "../../common/ListItem";
import "../../styles/pre_header.css";
import place_white from "../../../src/assets/pictures/place_white.jpeg";
import Picture from "../../common/Picture";
import letter from "../../../src/assets/pictures/letter.jpeg";
import mobile from "../../../src/assets/pictures/mobile.png";

const Pre_header = () => {
  return (
    <div className="header-nav-bar">
      <div className="left-side">
        <Picture image={letter} alt="white letter" />
        <ListItem name="Kur mus rasti" href="#" />

        <Picture image={place_white} alt="white place image" />
        <ListItem name="Rasykite mums" href="#" />

        <div className="dropdown">
          <button className="dropbtn">
            <Picture image={mobile} alt="white mobile phone" />
            <ListItem name="1842" />
          </button>
          <div className="dropdown-content">
            <ListItem name="Kontaktai" href="/#" />
            <ListItem name="Apie mus" href="/#" />
            <ListItem name="Paslaugos" href="/#" />
          </div>
        </div>
      </div>
      <div className="right-side">
        <ListItem name="Apie imone" href="#" />
        <div>
          <ListItem name="E.prenumerata" href="#" />
        </div>
        <div>
          <ListItem name="E.filatelija" href="#" />
        </div>
        <div>
          <ListItem name="EN" href="#" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Pre_header;
