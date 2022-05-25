import styles from "./introBanner.module.scss";
import photo from "../images/photo.jpg";
import git from "../images/icons/git.png";
import linked from "../images/icons/linked.png";

function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.info}>
          <h1 className={styles.name}>Hannah Nguyen.</h1>
          <span className={styles.description}>
            A <span className={styles.color}>front end developer</span> based in
            Lincoln, Nebraska.
          </span>
          <div className={styles.icons}>
            <span className="material-icons ">&#xe7fd;</span>
            <img src={git} alt="github icon" />
            <img src={linked} alt="linkedin icon" />
          </div>
        </div>
      </div>

      <div className={`${styles.image} ${styles.hide}`}>
        <img src={photo} alt="scenery" />
      </div>
    </div>
  );
}

export default Banner;
