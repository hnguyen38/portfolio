import styles from "./aboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>About Me</h1>
        <span>
          I am a self-taught <b>front end developer</b> focused on React. I
          aspire to take on work that improve users’ everyday lives and
          passionate about continuously learning different technologies and
          expanding my knowledge in this field.
        </span>
        {/* add link to resume here */}
        <span className={styles.blue}>Resume</span>

        <span className={styles.education}>Education</span>
        <span>
          University of Nebraska-Lincoln <br />
          Bachelors of Arts in Psychology
        </span>
      </div>
      {/* maybe move this somewhere */}
    </div>
  );
}
// My work ethic is driven by building products that have a positive impact on users.
export default AboutMe;
