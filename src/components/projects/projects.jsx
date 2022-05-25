import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";

import styles from "./projects.module.scss";
import netflixcover from "../../images/projects/covers/netflix.png";
import weathercover from "../../images/projects/covers/weather.png";
import bookcover from "../../images/projects/covers/book.png";
import InfoSection from "./netflix/netflix-info";

function Projects() {
  const { modal, setModal } = useContext(ModalContext);

  function popup() {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.img}>
          <img src={netflixcover} alt="netflix" onClick={popup} />
        </div>
        <div className={styles.img}>
          <img src={weathercover} alt="weather" />
        </div>
        <div className={styles.img}>
          <img src={bookcover} alt="book" />
        </div>
      </div>
      {modal ? (
        <div>
          <InfoSection />
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
