import InfoSection from "./modal/skeleton";
import Gifs from "./modal/sections";
import styles from "./gifs.module.scss";

import overview from "../../images/projects/netflix/overview.gif";
import trailer from "../../images/projects/netflix/trailer.gif";
import rows from "../../images/projects/netflix/scrollrows.gif";
import rowTrailer from "../../images/projects/netflix/rowTrailer.gif";

function NetflixOverview(props) {
  return (
    <div className={styles.container}>
      <InfoSection
        title="Netflix Clone Application"
        gifs={
          <div className={styles.gifs}>
            <Gifs src={overview} alt="summary" caption="caption" />
            <Gifs src={trailer} alt="trailer" caption="caption" />
            <Gifs src={rows} alt="rows" caption="caption" />
            <Gifs src={rowTrailer} alt="row trailer" caption="caption" />
          </div>
        }
        exit={props.exit}
      />
    </div>
  );
}
export default NetflixOverview;
