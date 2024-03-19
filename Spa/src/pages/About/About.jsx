import Header from "../../components/Header/Header";
import Text from "../../common/Text";
import Image from "../../common/Image";
import image from "../../assets/pictures/hero.jpeg";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Text className={"h1"}> About Us</Text>
      <div className="centered">
        <Image src={image} alt="image" />
      </div>
      <Text className={"h2"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum
        incidunt ratione praesentium impedit? Nemo eveniet id voluptates
        placeat, quidem obcaecati quia dicta velit. Minus at deleniti id
        explicabo illum.
      </Text>
      <Footer />
    </div>
  );
};

export default About;
