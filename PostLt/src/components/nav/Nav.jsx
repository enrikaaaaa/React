import Picture from "../../common/Picture";
import ListItem from "../../common/ListItem";
import "../../styles/nav-bar.css";
import logo from "../../assets/pictures/logo.png";
import Button from "../../common/Button";
import tools from "../../assets/pictures/tools.png";
import help from "../../assets/pictures/help.png";
import target from "../../assets/pictures/target.jpg";
import world from "../../assets/pictures/world.png";
import calculator from "../../assets/pictures/calculator.png";
import post from "../../assets/pictures/post.png";
import place from "../../assets/pictures/place.jpeg";
import paper from "../../assets/pictures/paper.png";
import declaration from "../../assets/pictures/declaration.jpg";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Picture image={logo} />
      <div className="left-side">
        <div className="dropdown">
          <button className="dropbtn">
            <ListItem name="Privatiems" />
          </button>
          <div className="dropdown-content">
            <ListItem name="Siuntimas Lietuvoje" href="/#" />
            <ListItem name="Siuntimas i uzsieni" href="/#" />
            <ListItem name="LP EXPRESS savitarna" href="/#" />
            <ListItem name="Finansines paslaugos" href="/#" />
            <ListItem name="Kitos paslaugos" href="/#" />
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <ListItem name="Verslui" />
          </button>
          <div className="dropdown-content">
            <ListItem name="Tapkite musu klientu" href="/#" />
            <ListItem name="Siuntimas Lietuvoje" href="/#" />
            <ListItem name="Siuntimas i uzsieni" href="/#" />
            <ListItem name="Finansines paslaugos" href="/#" />
            <ListItem name="E. sprendimai verslui" href="/#" />
            <ListItem name="Kitos paslaugos" href="/#" />
            <ListItem name="Pasto paslaugu tiekejams" href="/#" />
            <ListItem name="Sutartys" href="/#" />
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="dropdown">
          <button className="dropbtn">
            <Picture image={tools} />
            <ListItem name="Irankiai" />
          </button>
          <div className="dropdown-content">
            <div>
              <Picture image={target} />
              <ListItem name="Siuntu sekimas" href="/#" />
            </div>
            <div>
              <Picture image={world} />
              <ListItem name="Traptautine siuntu paieska" href="/#" />
            </div>
            <div>
              <Picture image={calculator} />
              <ListItem name="Kainu skaiciuokle" href="/#" />
            </div>
            <div>
              <Picture image={post} />
              <ListItem name="Pasto kodai ir adresai" href="/#" />
            </div>
            <div>
              <Picture image={place} />
              <ListItem name="Paslaugu teikimo vietos" href="/#" />
            </div>
            <div>
              <Picture image={paper} />
              <ListItem name="Saskaitu fakturu israsymas" href="/#" />
            </div>

            <div>
              <Picture image={declaration} />
              <ListItem name="Deklaruoti siunta" href="/#" />
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <Picture image={help} />
            <ListItem name="Pagalba" />
          </button>
          <div className="dropdown-content">
            <ListItem name="Dazniausiai uzduodami klausymai" href="/#" />
            <ListItem name="Reikalavimai ir patarimai" href="/#" />
            <ListItem name="Duomenu apsauga" href="/#" />
            <ListItem name="Rasykite mums" href="/#" />
            <ListItem name="Slapuku nustatymai" href="/#" />
          </div>
        </div>
        <ListItem name="Paieska" href="/#" />
        <Button className="btn btn-primary">Siusti siunta</Button>
      </div>
    </div>
  );
};
export default Nav;
