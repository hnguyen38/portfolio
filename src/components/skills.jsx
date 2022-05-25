//import styles from "./skills.module.scss";
import styles from "./skillsV2.module.scss";

import html from "../images/skills/html5.png";
import css from "../images/skills/css3.webp";
import boot from "../images/skills/bootstrap.svg";
import sass from "../images/skills/sass.png";
import js from "../images/skills/js.png";
import react from "../images/skills/react.png";
import firebase from "../images/skills/firebase.png";
import gith from "../images/skills/github.png";

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {/* <span className={styles.color}>―</span> */}
        <h1>Skills</h1>
        {/* <span className={styles.color}>―</span> */}
      </div>
      <section className={styles.section}>
        <div className={styles.parts}>
          <img src={html} alt="html-logo" />
          <span>HTML5</span>
        </div>
        <div className={styles.parts}>
          <img src={css} alt="html-logo" />
          <span>CSS3</span>
        </div>
        <div className={styles.parts}>
          <img src={boot} alt="html-logo" />
          <span>Bootstrap 5</span>
        </div>
        <div className={styles.parts}>
          <img src={sass} alt="html-logo" />
          <span>SASS</span>
        </div>
        <div className={styles.parts}>
          <img src={js} alt="html-logo" />
          <span>Javascript</span>
        </div>
        <div className={styles.parts}>
          <img src={react} alt="html-logo" />
          <span>React</span>
        </div>
        <div className={styles.parts}>
          <img src={firebase} alt="html-logo" />
          <span>Firebase</span>
        </div>
        <div className={styles.parts}>
          <img src={gith} alt="html-logo" />
          <span>Github</span>
        </div>
      </section>
    </div>
  );
}

export default Skills;
