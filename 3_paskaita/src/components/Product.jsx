import PropTypes from "prop-types";
import "../styles/product.css";
import Stars from "./Stars";

const Product = ({ category, name, price }) => {
  return (
    <div className="product-card">
      <h3>{category}</h3>
      <h1>{name}</h1>
      <Stars rating={3} />
      <p>{price}</p>
    </div>
  );
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
