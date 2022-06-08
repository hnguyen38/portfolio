import styles from "./navbar.module.scss";
import { useState } from "react";

function NavBar() {
  const [nav, setNav] = useState(false);

  function changeColor() {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={`${styles.wrapper} ${nav ? styles.color : null}`}>
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
