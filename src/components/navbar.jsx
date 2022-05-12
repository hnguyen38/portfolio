import styles from "./navbar.module.scss";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${styles.hide}`}>
        <span className={styles.name}>Portfolio</span>
      </div>
      <div className={styles.links}>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default NavBar;
