import Image from "../../common/Image";
import Nav from "../../common/Nav";
import logo from "../../../src/assets/pictures/logo.png";

const Header = () => {
  return (
    <header>
      <Image src={logo} alt="this is logo" />
      <Nav />
    </header>
  );
};

export default Header;
