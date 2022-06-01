import { useState } from "react";

import styles from "./projects.module.scss";

import netflixcover from "../../images/projects/covers/netflix.png";
import weathercover from "../../images/projects/covers/weather.png";
import bookcover from "../../images/projects/covers/book.png";
import journalcover from "../../images/projects/covers/comingsoon.png";

import NetflixOverview from "./netflix-info";
import WeatherOverview from "./weather-info";
import BookOverview from "./book-info";
import Buttons from "./buttons";

function Projects() {
  const [netflixPopup, setNetflixPopup] = useState();
  const [weatherPopup, setWeatherPopup] = useState();
  const [bookPopup, setBookPopup] = useState();

  function netflixHandler() {
    return netflixPopup ? setNetflixPopup(false) : setNetflixPopup(true);
  }

  function weatherHandler() {
    return weatherPopup ? setWeatherPopup(false) : setWeatherPopup(true);
  }

  function bookHandler() {
    return bookPopup ? setBookPopup(false) : setBookPopup(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.img}>
          <img
            className={styles.cover}
            src={netflixcover}
            alt="netflix"
            onClick={netflixHandler}
          />
          <Buttons
            live="https://thriving-croissant-f1a4f7.netlify.app/"
            code="https://github.com/hnguyen38/netflix-clone.git"
          />
          {netflixPopup ? (
            <div className={styles.infoSec}>
              <NetflixOverview exit={netflixHandler} />
            </div>
          ) : null}
        </div>
        <div className={styles.img}>
          <img
            className={styles.cover}
            src={weathercover}
            alt="weather"
            onClick={weatherHandler}
          />
          <Buttons
            live="https://tourmaline-crostata-0f0f94.netlify.app/"
            code="https://github.com/hnguyen38/weather-app.git"
          />
          {weatherPopup ? (
            <div className={styles.infoSec}>
              <WeatherOverview exit={weatherHandler} />
            </div>
          ) : null}
        </div>
        <div className={styles.img}>
          <img
            className={styles.cover}
            src={bookcover}
            alt="book"
            onClick={bookHandler}
          />
          <Buttons
            live="https://astonishing-youtiao-2dbfe9.netlify.app/"
            code="https://github.com/hnguyen38/book-keeping-app.git"
          />
          {bookPopup ? (
            <div className={styles.infoSec}>
              <BookOverview exit={bookHandler} />
            </div>
          ) : null}
        </div>
        <div className={styles.img}>
          <img
            className={`${styles.cover} ${styles.journal}`}
            src={journalcover}
            alt="netflix"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
