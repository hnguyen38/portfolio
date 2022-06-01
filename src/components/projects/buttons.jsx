import styles from "./buttons.module.scss";

function Buttons(props) {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a
          href={props.live}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <button type="button" className={styles.button}>
            LIVE
          </button>
        </a>
      </div>
      <div className={styles.buttons}>
        <a
          href={props.code}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <button type="button" className={styles.button}>
            CODE
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttons;
