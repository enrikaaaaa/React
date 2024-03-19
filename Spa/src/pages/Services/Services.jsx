import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Text from "../../common/Text";
import "./Services.css";
import Footer from "../../components/Footer/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <Text className={"h1"}>Services</Text>
      <div className="cardsBlock">
        <Card
          service="Service 1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere
          saepe error repellendus nulla hic repellat odit! "
        />
        <Card
          service="Service 2"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere
          saepe error repellendus nulla hic repellat odit! "
        />
        <Card
          service="Service 3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere
          saepe error repellendus nulla hic repellat odit! "
        />
      </div>
      <Footer />
    </>
  );
};

export default Services;
