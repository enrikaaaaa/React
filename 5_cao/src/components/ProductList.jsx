import { useState, useEffect } from "react";
import "./css.css";

const API_URL = "https://65f1fcda034bdbecc7642cdc.mockapi.io/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New Product",
          price: 100,
          image:
            "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
        }),
      });
      const data = await response.json();
      setProducts([...products, data]);
      window.location.reload();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <div>{product.title}</div>
              <div>{product.price}</div>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
};

export default ProductList;
