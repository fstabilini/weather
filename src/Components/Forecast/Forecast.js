import { useState } from "react";
import axios from "axios";
import styles from "./Forecast.module.scss";
import { BASE_URL, API_KEY } from "../../utils/constants";

export default function Forecast() {
  const [zipcode, setZipcode] = useState("");
  const [days, setDays] = useState("");
  const [forecastData, setForecastData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    let queryParams = `key=${API_KEY}&q=${zipcode}&days=${days}`;

    axios
      .get(`${BASE_URL}/forecast.json?${queryParams}`)
      .then((response) => {
        setForecastData(response.data.forecast.forecastday);
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Forecast Information</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Zipcode:{" "}
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </label>
        <label>
          Number of Days:{" "}
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            min="1"
            max="10"
          />
        </label>
        <button type="submit">Send</button>
      </form>

      {forecastData && (
        <div className={styles.forecastInfo}>
          <h3>Forecast Details</h3>
          {forecastData.map((day, index) => (
            <div key={index} className={styles.dayInfo}>
              <h4>{day.date}</h4>
              <p>
                <strong>Max Temp:</strong> {day.day.maxtemp_c}°C /{" "}
                {day.day.maxtemp_f}°F
              </p>
              <p>
                <strong>Min Temp:</strong> {day.day.mintemp_c}°C /{" "}
                {day.day.mintemp_f}°F
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
