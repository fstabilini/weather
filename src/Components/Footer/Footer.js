import React from "react";
import styles from "./Footer.module.scss";
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import instagramIcon from "../../assets/icons/instagram.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className={styles.icon} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className={styles.icon} />
        </a>
      </div>
      <p className={styles.copyright}>Weather API, copyright &copy; 2024</p>
    </footer>
  );
}
