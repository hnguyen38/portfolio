import styles from "./aboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>About Me</h1>
        <span>
          I am a self-taught front end developer and an eye for clean design. I
          aspire to take on work that improve users’ everyday lives and
          passionate about continuously learning to expand my knowledge in this
          field.
        </span>
        <span className={styles.blue}>Resume</span>
        <span className={styles.education}>Education</span>
        <span>
          University of Nebraska-Lincoln <br />
          Bachelors of Arts in Psychology
        </span>

        {/* maybe move this somewhere */}
      </div>
    </div>
  );
}
// My work ethic is driven by building products that have a positive impact on users.
export default AboutMe;
