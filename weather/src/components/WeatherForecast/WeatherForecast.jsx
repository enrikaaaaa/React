import PropTypes from "prop-types";
import WindDirectionArrow from "../../components/WindDirectionArrow/WindDirectionArrow";

const degreeToDirection = (degree) => {
  degree = (degree + 360) % 360;

  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const degreeRanges = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

  const index = degreeRanges.findIndex((range) => degree < range);

  return directions[index % 8];
};

const WeatherForecast = ({
  selectedPlace,
  weatherData,
  selectedDay,
  temperatureUnit,
  groupForecastTimestampsByDayOfWeek,
  filterTimestampsByThreeHours,
  convertTemperature,
  getImageUrl,
  setSelectedDay,
}) => {
  return (
    <div>
      <div className="forecastHeadline">
        <h2>Orų prognozė pasirinktai vietai</h2>
      </div>
      <div>
        <p>
          {selectedPlace.name}, {selectedPlace.administrativeDivision}
        </p>
        <p>Suformuota: {weatherData.forecastCreationTimeUtc}</p>
      </div>
      <div className="forecastBlock">
        {groupForecastTimestampsByDayOfWeek(weatherData.forecastTimestamps).map(
          (group, index) => (
            <div key={index} className="forecastGroup">
              <div className="day">
                <button onClick={() => setSelectedDay(group.dayOfWeek)}>
                  {group.dayOfWeek}
                </button>
              </div>
            </div>
          )
        )}
      </div>

      <div className="temperature-block">
        {selectedDay &&
          groupForecastTimestampsByDayOfWeek(
            weatherData.forecastTimestamps
          ).map((group) => (
            <div className="dayForecast" key={group.dayOfWeek}>
              {selectedDay === group.dayOfWeek &&
                filterTimestampsByThreeHours(group.timestamps).map(
                  (timestamp, idx) => (
                    <div key={idx} className="forecastCard">
                      <div>
                        {timestamp.forecastTimeUtc && (
                          <>
                            {new Date(
                              timestamp.forecastTimeUtc
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </>
                        )}
                      </div>
                      <div>
                        {convertTemperature(timestamp.airTemperature)}°
                        {temperatureUnit},
                      </div>
                      <WindDirectionArrow
                        direction={degreeToDirection(timestamp.windDirection)}
                      />
                      <img
                        src={getImageUrl(timestamp.conditionCode)}
                        alt="weather icon"
                      />
                    </div>
                  )
                )}
            </div>
          ))}
      </div>
    </div>
  );
};

WeatherForecast.propTypes = {
  weatherData: PropTypes.shape({
    forecastTimestamps: PropTypes.array.isRequired,
    forecastCreationTimeUtc: PropTypes.string,
  }).isRequired,
  selectedPlace: PropTypes.shape({
    name: PropTypes.string.isRequired,
    administrativeDivision: PropTypes.string.isRequired,
  }).isRequired,
  selectedDay: PropTypes.string,
  temperatureUnit: PropTypes.string.isRequired,
  groupForecastTimestampsByDayOfWeek: PropTypes.func.isRequired,
  filterTimestampsByThreeHours: PropTypes.func.isRequired,
  convertTemperature: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

export default WeatherForecast;
