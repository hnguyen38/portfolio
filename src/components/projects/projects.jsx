import { useContext } from "react";

import styles from "./projects.module.scss";

import netflixcover from "../../images/projects/covers/3.png";
import weathercover from "../../images/projects/covers/1.png";
import bookcover from "../../images/projects/covers/2.png";
import newcover from "../../images/projects/covers/4.png";

import { NetflixContext } from "../../context/netflixContext";
import { WeatherContext } from "../../context/weatherContext";
import { BookContext } from "../../context/bookContext";

import NetflixOverview from "./netflix-info";
import WeatherOverview from "./weather-info";
import BookOverview from "./book-info";
import Buttons from "./buttons";

function Projects() {
  const { netflixPopup, setNetflixPopup } = useContext(NetflixContext);
  const { weatherPopup, setWeatherPopup } = useContext(WeatherContext);
  const { bookPopup, setBookPopup } = useContext(BookContext);

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
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>Projects</h1>
        <span>click image for demo</span>
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
            live="https://netflix-clone-038.netlify.app/"
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
            live="https://weather-app-038.netlify.app/"
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
            live="https://book-app-038.netlify.app/"
            code="https://github.com/hnguyen38/book-keeping-app.git"
          />
          {bookPopup ? (
            <div className={styles.infoSec}>
              <BookOverview exit={bookHandler} />
            </div>
          ) : null}
        </div>
        <div className={styles.img}>
          <img className={styles.manifest} src={newcover} alt="manifest" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
