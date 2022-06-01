import InfoSection from "./modal/skeleton";
import Gifs from "./modal/sections";
import styles from "./gifs.module.scss";

import first from "../../images/projects/weather/location.gif";
import second from "../../images/projects/weather/change.gif";

function WeatherOverview(props) {
  return (
    <div className={styles.container}>
      <InfoSection
        title="Weather API Application"
        gifs={
          <div className={styles.gifs}>
            <Gifs src={first} alt="search location" caption="caption" />
            <Gifs src={second} alt="new location" caption="caption" />
          </div>
        }
        exit={props.exit}
      />
    </div>
  );
}

export default WeatherOverview;
