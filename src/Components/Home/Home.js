import React from "react";
import styles from "./Home.module.scss";
import sun from "../../assets/images/sun.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src={sun} alt="Sun" className={styles.image} />
      <div className={styles.text}>
        <h1>Welcome to the Weather App</h1>
        <p>
          This application uses the Weather API to provide various
          weather-related information. Here are the main features:
        </p>
        <ul>
          <li>
            <strong>Today:</strong> View the current weather for a specified
            location.
          </li>
          <li>
            <strong>Forecast:</strong> Check the weather forecast for upcoming
            days.
          </li>
          <li>
            <strong>Moon:</strong> Get details about the moon phase and timings.
          </li>
        </ul>
        <p>
          The application uses the API key{" "}
          <strong>0a062eeb23cf442db63134744240108</strong> to fetch weather
          data.
        </p>
      </div>
    </div>
  );
}
