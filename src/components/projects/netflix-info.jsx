import InfoSection from "./modal/skeleton";
import Gifs from "./modal/sections";
import styles from "./gifs.module.scss";

import { useRef } from "react";
import ScrollButton from "./scroll/scroll";

import overview from "../../images/projects/netflix/overview.gif";
import trailer from "../../images/projects/netflix/trailer.gif";
import rows from "../../images/projects/netflix/scrollrows.gif";
import rowTrailer from "../../images/projects/netflix/rowTrailer.gif";

function NetflixOverview(props) {
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
          title="Netflix Clone Application"
          gifs={
            <div className={styles.gifs} ref={gifRef}>
              <Gifs
                src={overview}
                alt="summary"
                caption=" Clone website overview"
              />
              <Gifs
                src={trailer}
                alt="trailer"
                caption="Demo of banner trailer"
              />
              <Gifs
                src={rows}
                alt="rows"
                caption="Scroll through movies and shows"
              />
              <Gifs
                src={rowTrailer}
                alt="row trailer"
                caption="Open and close trailer in rows"
              />
            </div>
          }
          exit={props.exit}
        />
      </div>
    </div>
  );
}
export default NetflixOverview;
