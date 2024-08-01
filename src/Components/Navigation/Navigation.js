import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/today" className={styles.navLink}>
            Today
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/forecast" className={styles.navLink}>
            Forecast
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/moon" className={styles.navLink}>
            Moon
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
