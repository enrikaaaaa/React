import Product from "./Product";
import "../styles/products.css";

import PropTypes from "prop-types";

const Products = ({ name }) => {
  return (
    <div>
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="products-container">
        <Product
          category="Canvases"
          name="OFF-WHITE AIR JORDAN 1 CANVAS"
          price="32.00€ - 120.00€"
        />
        <Product
          category="Posters"
          name="YEEZY BOOST 350 V2 FROZEN
    YELLOW POSTER"
          price="16.00€ - 32.00€"
        />
        <Product
          category="Stickers"
          name="YEEZY 350 V2 ZEBRA STICKER"
          price="5.00€"
        />
        <Product
          category="Adidas"
          name="ADIDAS YEEZY POWERPHASE
CALABASAS POSTER"
          price="16.00€ - 32.00€"
        />
        <Product
          category="Jordans"
          name="AIR JORDAN 4 RED SUEDE POSTER"
          price="16.00€ - 32.00€"
        />
        <Product
          category="Balenciaga"
          name="BALENCIAGA TRIPLE S POSTER"
          price="16.00€ - 32.00€"
        />
        <Product
          category="Nike"
          name="NIKE BLAZER MID SACAI POSTER"
          price="32.00€ - 120.00€"
        />
        <Product
          category="Artists"
          name="LIL PEEP POSTER"
          price="32.00€ - 120.00€"
        />
      </div>
    </div>
  );
}

Products.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Products;
