import styles from "./navbar.module.scss";
import { useState, useContext} from "react";

import { NetflixContext } from "../context/netflixContext";
import {WeatherContext} from "../context/weatherContext";
import {BookContext} from "../context/bookContext";

function NavBar(props) {
  const [nav, setNav] = useState(false);

  const {netflixPopup} = useContext(NetflixContext);
  const {weatherPopup} = useContext(WeatherContext);
  const {bookPopup} = useContext(BookContext);

  function changeColor() {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={`${styles.wrapper} ${nav ? styles.color : null} ${netflixPopup || weatherPopup || bookPopup ? styles.hideNav : null}`}>
      <div className={`${styles.container} ${styles.hide}`}>
        <span className={styles.name}>Portfolio</span>
      </div>
      <div className={styles.links}>
        <span><a href={props.about}>About</a></span>
        <span><a href={props.projects}>Projects</a></span>
        <span><a href={props.contact}>Contact</a></span>
      </div>
    </div>
  );
}

export default NavBar;
