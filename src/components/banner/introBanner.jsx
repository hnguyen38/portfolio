import styles from "./introBanner.module.scss";
import git from "../../images/icons/git.png";
import linked from "../../images/icons/linked.png";
import me from "../../images/selfie.jpg";

function Banner() {
  function handleSubmit(e) {
    e.preventDefault();
    window.location = "mailto:hannahnguyen038@gmail.com";
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.info}>
          <h1 className={styles.name}>Hannah Nguyen.</h1>
          <span className={styles.description}>
            A <span className={styles.color}>front end developer</span> based in
            the United States.
          </span>
          <div className={styles.icons}>
            <span
              className="material-icons"
              onClick={handleSubmit}
              title="Email"
            >
              &#xe158;
            </span>
            <a
              href="https://github.com/hnguyen38"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="github icon" title="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/hannah-nguyen-696595219/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linked} alt="linkedin icon" title="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.image} ${styles.hide}`}>
        <img src={me} alt="photo" className={styles.selfie} />
      </div>
    </div>
  );
}

export default Banner;
