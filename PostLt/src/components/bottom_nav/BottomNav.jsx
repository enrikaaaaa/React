import Button from "../../common/Button";
import Text from "../../common/Text";
import "../../styles/bottomNav.css";
import Facebook from "../../assets/pictures/facebookLogo.png";
import Linkedin from "../../assets/pictures/linkedinLogo.png";
import Instagram from "../../assets/pictures/instagramLogo.jpeg";
import Picture from "../../common/Picture";

const BottomNav = () => {
  const tools = [
    {
      name: "Siuntu sekimas",
    },
    {
      name: "Tarptautine siuntu paieska",
    },
    {
      name: "Kainu skaiciuokle",
    },
    {
      name: "Pasto kodai ir adresai",
    },
    {
      name: "Paslaugu teikimo vietos",
    },
    {
      name: "Saskaitu fakturu israsymas",
    },
  ];
  const services = [
    {
      name: "Siuntu sekimas",
    },
    {
      name: "Tarptautine siuntu paieska",
    },
    {
      name: "Kainu skaiciuokle",
    },
    {
      name: "Pasto kodai ir adresai",
    },
    {
      name: "Paslaugu teikimo vietos",
    },
    {
      name: "Saskaitu fakturu israsymas",
    },
  ];
  const help = [
    {
      name: "Siuntu sekimas",
    },
    {
      name: "Tarptautine siuntu paieska",
    },
    {
      name: "Kainu skaiciuokle",
    },
    {
      name: "Pasto kodai ir adresai",
    },
    {
      name: "Paslaugu teikimo vietos",
    },
    {
      name: "Saskaitu fakturu israsymas",
    },
  ];
  const post = [
    {
      name: "Siuntu sekimas",
    },
    {
      name: "Tarptautine siuntu paieska",
    },
    {
      name: "Kainu skaiciuokle",
    },
    {
      name: "Pasto kodai ir adresai",
    },
    {
      name: "Paslaugu teikimo vietos",
    },
    {
      name: "Saskaitu fakturu israsymas",
    },
  ];
  const social = [
    {
      text: "Sekite musu naujienas",
    },
    {
      image: Facebook,
    },
    {
      image: Linkedin,
    },
    {
      image: Instagram,
    },
  ];
  const socials = [
    {
      text: "Svetaines medis",
    },
    {
      text: "|",
    },
    {
      text: "Duomenu apsauga",
    },
  ];

  return (
    <div>
      <div className="bottom-nav">
        <div className="bottom-nav__item">
          <Text h2 text="Įrankiai" />
          {tools.map((tools, index) => (
            <div key={index}>
              <Button arrow_before>{tools.name}</Button>
            </div>
          ))}
        </div>
        <div className="bottom-nav__item">
          <Text h2 text="Paslaugos" />
          {services.map((services, index) => (
            <div key={index}>
              <Button arrow_before>{services.name}</Button>
            </div>
          ))}
        </div>
        <div className="bottom-nav__item">
          <Text h2 text="Pagalba" />
          {help.map((help, index) => (
            <div key={index}>
              <Button arrow_before>{help.name}</Button>
            </div>
          ))}
        </div>
        <div className="bottom-nav__item">
          <Text h2 text="Lietuvos pastas" />
          {post.map((post, index) => (
            <div key={index}>
              <Button arrow_before>{post.name}</Button>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-nav__line">
        <div className="bottom-nav__social">
          {social.map((social, index) => (
            <div key={index}>
              <Text text={social.text} />
              <Picture image={social.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-nav__help">
        <div className="bottom-nav__help">
          {socials.map((socials, index) => (
            <div key={index}>
              <Text text={socials.text} />
              <Picture image={socials.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
