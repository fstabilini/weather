import { useState } from "react";
import axios from "axios";
import styles from "./Moon.module.scss";
import { BASE_URL, API_KEY } from "../../utils/constants";

export default function Moon() {
  const [zipcode, setZipcode] = useState("");
  const [date, setDate] = useState("");
  const [moonData, setMoonData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    let queryParams = `key=${API_KEY}&q=${zipcode}$&dt=${date}`;

    axios
      .get(`${BASE_URL}/astronomy.json?${queryParams}`)
      .then((response) => {
        setMoonData(response.data.astronomy.astro);
      })
      .catch((error) => {
        console.error("Error fetching moon data:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Moon Information</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Zipcode:{" "}
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          ></input>
        </label>
        <label>
          Date:{" "}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </label>
        <button type="submit">Send</button>
      </form>

      {moonData && (
        <div className={styles.moonInfo}>
          <h3>Moon Details</h3>
          <p>
            <strong>Phase:</strong> {moonData.moon_phase}
          </p>
          <p>
            <strong>Moonrise:</strong> {moonData.moonrise}
          </p>
          <p>
            <strong>Moonset:</strong> {moonData.moonset}
          </p>
          <p>
            <strong>Illumination:</strong> {moonData.moon_illumination}%
          </p>
          <p>
            <strong>Location:</strong> {zipcode || "London"}
          </p>
        </div>
      )}
    </div>
  );
}
