import { useState, useEffect } from "react";
import { getMeteo, getPlaces } from "../../api/meteo";
import "./get.css";
import PlaceSelect from "../PlaceSelect/PlaceSelect";
import TemperatureToggle from "../TemperatureToggle/TemperatureToggle";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import clearSky from "../../assets/pictures/clearSky.png";
import partly_cloudy from "../../assets/pictures/partly-cloudy.png";
import cloudy from "../../assets/pictures/cloudy.png";
import light_rain from "../../assets/pictures/light-rain.png";
import rain from "../../assets/pictures/rain.png";
import heavy_rain from "../../assets/pictures/heavy-rain.png";
import sleet from "../../assets/pictures/sleet.png";
import light_snow from "../../assets/pictures/light-snow.png";
import snow from "../../assets/pictures/snow.png";
import heavy_snow from "../../assets/pictures/heavy-snow.png";
import fog from "../../assets/pictures/fog.png";
import storm from "../../assets/pictures/storm.png";
import light_sleet from "../../assets/pictures/light-sleet.png";

const Get = () => {
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("C");

  useEffect(() => {
    getMeteo()
      .then((response) => {
        setFilteredPlaces(response.data);
      })
      .catch((error) => {
        console.error("Klaida gavant duomenis", error);
        setError("Klaida gavant duomenis");
      });
  }, []);

  useEffect(() => {
    if (selectedPlace) {
      getPlaces(selectedPlace.code)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Klaida", error);
          setError("Klaida");
        });
    }
  }, [selectedPlace]);

  const handleSelectChange = (e) => {
    const selectedPlaceCode = e.target.value;
    const selectedPlace = filteredPlaces.find(
      (place) => place.code === selectedPlaceCode
    );
    setSelectedPlace(selectedPlace);
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit(temperatureUnit === "C" ? "F" : "C");
  };

  const groupForecastTimestampsByDayOfWeek = (timestamps) => {
    const groupedTimestamps = timestamps.reduce((groups, timestamp) => {
      const date = new Date(timestamp.forecastTimeUtc);
      const dayOfWeek = date.toLocaleDateString("lt-LT", { weekday: "long" });

      if (!groups[dayOfWeek]) {
        groups[dayOfWeek] = [];
      }
      groups[dayOfWeek].push(timestamp);
      return groups;
    }, {});

    return Object.keys(groupedTimestamps).map((dayOfWeek) => ({
      dayOfWeek,
      timestamps: groupedTimestamps[dayOfWeek],
    }));
  };

  const getImageUrl = (conditionCode) => {
    switch (conditionCode) {
      case "clear":
        return clearSky;
      case "partly-cloudy":
        return partly_cloudy;
      case "cloudy":
        return cloudy;
      case "cloudy-with-sunny-intervals":
        return partly_cloudy;
      case "light-rain":
        return light_rain;
      case "rain":
        return rain;
      case "heavy-rain":
        return heavy_rain;
      case "sleet":
        return sleet;
      case "light-snow":
        return light_snow;
      case "snow":
        return snow;
      case "heavy-snow":
        return heavy_snow;
      case "fog":
        return fog;
      case "storm":
        return storm;
      case "light-sleet":
        return light_sleet;
      default:
        return "";
    }
  };

  const convertTemperature = (temperature) => {
    if (temperatureUnit === "C") {
      return temperature;
    } else {
      return Math.round((temperature * 9) / 5 + 32);
    }
  };

  const filterTimestampsByThreeHours = (timestamps) => {
    return timestamps.filter((timestamp, index) => {
      if (timestamp && timestamp.forecastTimeUtc) {
        return index % 3 === 0;
      }
      return false;
    });
  };

  return (
    <div>
      <h1>Orų prognozė</h1>
      <h2>Miestai</h2>
      <PlaceSelect
        filteredPlaces={filteredPlaces}
        handleSelectChange={handleSelectChange}
      />
      <TemperatureToggle
        temperatureUnit={temperatureUnit}
        toggleTemperatureUnit={toggleTemperatureUnit}
      />

      {error && <p>{error}</p>}

      {weatherData && (
        <WeatherForecast
          selectedPlace={selectedPlace}
          weatherData={weatherData}
          selectedDay={selectedDay}
          temperatureUnit={temperatureUnit}
          groupForecastTimestampsByDayOfWeek={
            groupForecastTimestampsByDayOfWeek
          }
          filterTimestampsByThreeHours={filterTimestampsByThreeHours}
          convertTemperature={convertTemperature}
          getImageUrl={getImageUrl}
          setSelectedDay={setSelectedDay}
        />
      )}
    </div>
  );
};

export default Get;
