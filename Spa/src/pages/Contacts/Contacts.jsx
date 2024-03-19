import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import "./Contacts.css";
import Footer from "../../components/Footer/Footer";

const Contacts = () => {
  return (
    <div>
      <Header />
      <div className="form">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
