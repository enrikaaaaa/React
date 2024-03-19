import express from "express";
import axios from "axios";
import process from "process";

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(PORT, () => {
  console.log(`Neuzluzo http://localhost:${PORT}`);
});

axios
  .get("https://api.meteo.lt/v1/places")
  .then((response) => {
    const data = response.data;
    app.get("/places", (req, res) => {
      res.json(data);
    });
  })
  .catch((error) => {
    console.error("Klaida gavant duomenis iš kito API:", error);
  });

app.get("/places/:code", (req, res) => {
  const placeCode = req.params.code;
  axios
    .get(`https://api.meteo.lt/v1/places/${placeCode}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Klaida gavant duomenis iš kito API:", error);
      res.status(500).json({ error: "Klaida gavant duomenis iš kito API" });
    });
});

app.get("/places/:code/forecasts", (req, res) => {
  const placeCode = req.params.code;
  axios
    .get(`https://api.meteo.lt/v1/places/${placeCode}/forecasts`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Klaida gavant duomenis iš kito API:", error);
      res.status(500).json({ error: "Klaida gavant duomenis iš kito API" });
    });
});

app.get("/places/:code/forecasts/:forecastType", (req, res) => {
  const placeCode = req.params.code;
  const forecastType = req.params.forecastType;
  axios
    .get(
      `https://api.meteo.lt/v1/places/${placeCode}/forecasts/${forecastType}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Klaida gavant duomenis iš kito API:", error);
      res.status(500).json({ error: "Klaida gavant duomenis iš kito API" });
    });
});
