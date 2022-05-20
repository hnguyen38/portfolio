import styles from "./skills.module.scss";
import html from "../images/skills/html5.png";

function Skills() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            Skills <span className={styles.color}>|</span>
          </h1>
        </div>
        <section className={styles.section}>
          <div className={styles.skills}>
            {/* <img src={html} alt="html-logo" /> */}
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap 5</span>
          </div>
          <div className={styles.skills}>
            <span>SASS</span>
            <span>Javascript</span>
            <span>React</span>
          </div>
          <div className={styles.skills}>
            <span>Firebase</span>
            <span>Github</span>
            <span>???</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
