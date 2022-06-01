import styles from "./skeleton.module.scss";
import ScrollButton from "../scroll/scroll";
import { useRef } from "react";

//props: title, gifs

function InfoSection(props) {
  const gifRef = useRef(0);

  function scrollHandler(scrollOffSet) {
    gifRef.current.scrollLeft += scrollOffSet;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h1 className={styles.title}>{props.title} Project Overview</h1>
          <span
            className={`material-icons ${styles.exit}`}
            onClick={props.exit}
          >
            &#xe5cd;
          </span>
        </div>
        <div className={styles.bottomContainer}>
          <ScrollButton
            leftScroll={() => scrollHandler(-200)}
            rightScroll={() => scrollHandler(200)}
          />
          <div>{props.gifs}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
