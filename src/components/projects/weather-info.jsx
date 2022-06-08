import InfoSection from "./modal/skeleton";
import Gifs from "./modal/sections";
import styles from "./gifs.module.scss";

import first from "../../images/projects/weather/location.gif";
import second from "../../images/projects/weather/change.gif";

import { useRef } from "react";
import ScrollButton from "./scroll/scroll";

function WeatherOverview(props) {
  const gifRef = useRef(0);

  function scrollHandler(scrollOffSet) {
    gifRef.current.scrollLeft += scrollOffSet;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.btn}>
        <ScrollButton
          leftScroll={() => scrollHandler(-700)}
          rightScroll={() => scrollHandler(700)}
        />
      </div>
      <div className={styles.container}>
        <InfoSection
          title="Weather API Application"
          gifs={
            <div className={styles.gifs} ref={gifRef}>
              <Gifs
                src={first}
                alt="search location"
                caption="Opening page. Enter city or zip code."
              />
              <Gifs
                src={second}
                alt="new location"
                caption="Look up any location, toggle units to Celsius or Fahrenheit, scroll through forecast"
              />
            </div>
          }
          exit={props.exit}
        />
      </div>
    </div>
  );
}

export default WeatherOverview;
