import Header from "../../components/Header/Header";
import Image from "../../common/Image";
import image from "../../assets/pictures/work_1.jpg";
import "./Works.css";
import Text from "../../common/Text";
import Footer from "../../components/Footer/Footer";

const Works = () => {
  const images = [
    {
      src: image,
      alt: "image1",
    },
    {
      src: image,
      alt: "image2",
    },
    {
      src: image,
      alt: "image3",
    },
    {
      src: image,
      alt: "image4",
    },
    {
      src: image,
      alt: "image1",
    },
    {
      src: image,
      alt: "image2",
    },
    {
      src: image,
      alt: "image3",
    },
    {
      src: image,
      alt: "image4",
    },
  ];

  return (
    <div>
      <Header />
      <Text className={"h1"}> Our Works</Text>
      <div className="works">
        {images.map((image, index) => (
          <div className="workImage" key={index}>
            <Image src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Works;
