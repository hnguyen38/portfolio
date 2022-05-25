import styles from "./netflix-info.module.scss";
import { useContext } from "react";
import { ModalContext } from "../../../context/modalContext";

// import signpage from "../../../images/projects/book/booksign.png";
// import create from "../../../images/projects/book/additem.gif";
// import update from "../../../images/projects/book/update.gif";
// import del from "../../../images/projects/book/delNout.gif";
// import order from "../../../images/projects/book/order.gif";
// import search from "../../../images/projects/book/search.gif";

import overview from "../../../images/projects/netflix/overview.gif";
import scrollrows from "../../../images/projects/netflix/scrollrows.gif";
import trailer from "../../../images/projects/netflix/trailer.gif";

function InfoSection(props) {
  const { setModal } = useContext(ModalContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.close}
          onClick={() => setModal(false)}
        >
          X
        </button>
        <h3 className={styles.title}>Netflix Clone Project Overview</h3>
        <div className={styles.gifs}>
          <div className={styles.section}>
            <img src={overview} alt="netflix overview gif" />
            <span>caption</span>
          </div>
          <div className={styles.section}>
            <img src={scrollrows} alt="netflix rows gif" />
            <span>caption</span>
          </div>
          <div className={styles.section}>
            <img src={trailer} alt="netflix trailer gif" />
            <span>caption</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
