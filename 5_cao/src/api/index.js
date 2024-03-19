const API_URL = "https://sophisticated-humane-dandelion.glitch.me";

export const fetchData = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const handleAdd = async () => {
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
  return response.json();
};
