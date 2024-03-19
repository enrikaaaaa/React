import Text from "../../common/Text";
import Date from "../../common/Date";
import Picture from "../../common/Picture";
import "../../styles/main.css";
import news_1 from "../../assets/pictures/news-1.jpeg";
import news_2 from "../../assets/pictures/yellow.png";
import news_3 from "../../assets/pictures/declaration.jpeg";
import news_4 from "../../assets/pictures/mobilus-laiskininko.jpeg";
import news_5 from "../../assets/pictures/terminal.png";
import Button from "../../common/Button";
import International from "../../assets/pictures/internationalCorporationLogo.png";
import Europ from "../../assets/pictures/postEuropLogo.png";
import Universal from "../../assets/pictures/universalPostalUnion.png";

const Main = () => {
  const news = [
    {
      date: "2021-09-01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec est non erat facilisis tincidunt. Sed eget libero vitae sapien tincidunt tincidunt",
    },
    {
      date: "2021-09-02",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec est non erat facilisis tincidunt. Sed eget libero vitae sapien tincidunt tincidunt",
    },
    {
      date: "2021-09-03",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec est non erat facilisis tincidunt. Sed eget libero vitae sapien tincidunt tincidunt",
    },
    {
      date: "2021-09-04",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec est non erat facilisis tincidunt. Sed eget libero vitae sapien tincidunt tincidunt",
    },
    {
      date: "2021-09-05",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec est non erat facilisis tincidunt. Sed eget libero vitae sapien tincidunt tincidunt",
    },
  ];
  const news_bottom = [
    {
      text: "Siuntejo atmintine",
      name: "Placiau",
      image: news_1,
    },
    {
      text: "Draudziami siusti daiktai",
      name: "Placiau",
      image: news_1,
    },
    {
      text: "Svarbi informacija del COVID-19",
      name: "Placiau",
      image: news_1,
    },
  ];
  const organization = [
    {
      text: "Narystė tarptautinėse organizacijose",
    },
    {
      image: International,
    },
    {
      image: Europ,
    },
    {
      image: Universal,
    },
  ];

  return (
    <div>
      <div className="news-conteiner">
        <div className="header">
          <Text h2 text="Naujienos" />
        </div>
        <div className="news-conteiner-cards">
          <div className="news-conteiner-card">
            {news.map((card, index) => (
              <div key={index} className="latest-news">
                <Date date={card.date} />
                <Text text={card.text} />
              </div>
            ))}
            <Button arrow>Daugiau naujienu</Button>
          </div>
          <div className="news-conteiner-card-1">
            <Picture image={news_1} alt={"pic"} />
            <Text text="Į Latviją ir Estiją žengiantis LP EXPRESS pristato naują prekės ženklą" />
            <Button arrow>Placiau </Button>
          </div>
        </div>
        <div className="half-block">
          <div className="news-conteiner-card">
            <div>
              <iframe
                src="https://www.youtube.com/embed/MBlCnu1epl0?si=Bdx7HXzOjm6_GHvw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="register-text">
              <Text text="Registruokite siuntą internetu ir siuntimas LP EXPRESS paštomatais visoje Lietuvoje kainuos nuo 1,95 EUR!" />
              <div className="register-text-2">
                <Button white>Placiau </Button>
                <Text text="Norite siusti pigiau?" />
              </div>
            </div>
            <Picture image={news_2} alt={"color"} />
          </div>
          <div className="news-conteiner-card">
            <div className="declaration-text">
              <Text text="Kaip deklaruoti siunta?" />
              <Button white>Deklaruoti </Button>
            </div>
            <Picture
              image={news_3}
              alt={"declaration section picture"}
            ></Picture>
          </div>
        </div>
        <div className="news-conteiner-cards">
          <div className="news-conteiner-card-postman">
            <div className="declaration-text mobile-postman">
              <Text text="Mobilaus laiškininko paslaugos" />
              <Button white>Suzinokite daugiau </Button>
            </div>
            <Picture image={news_4} alt={"mobile postman picture"} />
          </div>
          <div className="news-conteiner-card">
            <div className="icon">
              <div className="icon-text">
                <Picture image={news_5} alt={"terminal picture"} />
                <Text text="Didelis ir platus LP EXPRESS paštomatų tinklas" />
              </div>
              <div className="icon-text">
                <Picture image={news_5} alt={"terminal picture"} />
                <Text text="Didelis ir platus LP EXPRESS paštomatų tinklas" />
              </div>
            </div>
            <div className="terminal-text">
              <Text h2 text="Lietuvos pašto leidiniai" className="h2" />
              <Text text="Sužinokite aktualiausius Lietuvos pašto pasiūlymus" />
              <Button white>Daugiau informacijos </Button>
              <div>
                <div className="terminal-picture">
                  <Picture image={news_5} alt={"terminal picture"} />
                </div>
              </div>
            </div>

            <Picture image={news_2} alt={"color"} />
          </div>
        </div>
        <div className="news-conteiner-cards">
          <div className="three-cards">
            {news_bottom.map((card, index) => (
              <div key={index} className="div-bottom">
                <Picture image={card.image} alt={"pic"}></Picture>
                <Text text={card.text} />
                <Button arrow>{card.name}</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="news-conteiner-cards">
        <div className="four-cards">
          {organization.map((organization, index) => (
            <div key={index} className="div-bottom">
              <Picture image={organization.image} alt={"pic"}></Picture>
              <Text text={organization.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
