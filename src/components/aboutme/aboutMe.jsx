import styles from "./aboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <span>
          I am a self-taught <b>front end developer</b> with a{" "}
          <span className={styles.color}>React</span> focus but open to working
          with different technologies. I aspire to take on work that improve
          users’ everyday lives and passionate in expanding my knowledge in this
          field.
        </span>

        <span className={styles.education}>Education</span>
        <span>
          University of Nebraska-Lincoln <br />
          Bachelors of Arts in Psychology
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
