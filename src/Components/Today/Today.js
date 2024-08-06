import { useState } from "react";
import axios from "axios";
import styles from "./Today.module.scss";
import { API_KEY, BASE_URL } from "../../utils/constants";

export default function Today() {
  const [zipcode, setZipcode] = useState("");
  const [language, setLanguage] = useState("en");
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const queryParams = `key=${API_KEY}&q=${zipcode}&lang=${language}`;

    axios
      .get(`${BASE_URL}/current.json?${queryParams}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error with weather data:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Today's Weather</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Zipcode:
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </label>
        <label>
          Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </select>
        </label>
        <button type="submit">Send</button>
      </form>

      {weatherData && (
        <div className={styles.weatherInfo}>
          <h3>Weather Details</h3>
          <p>
            <strong>Location:</strong> {weatherData.location.name},{" "}
            {weatherData.location.region}, {weatherData.location.country} (
            {weatherData.location.localtime})
          </p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
          <p>
            <strong>Condition:</strong> {weatherData.current.condition.text}
          </p>
          <p>
            <strong>Wind Direction:</strong> {weatherData.current.wind_dir}
          </p>
          <p>
            <strong>Temperature:</strong> {weatherData.current.temp_c}°C /{" "}
            {weatherData.current.temp_f}°F
          </p>
          <p>
            <strong>Day/Night:</strong>{" "}
            {weatherData.current.is_day ? "Day" : "Night"}
          </p>
        </div>
      )}
    </div>
  );
}
