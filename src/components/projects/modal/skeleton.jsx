import styles from "./skeleton.module.scss";

//props: title, gifs

function InfoSection(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h1 className={styles.title}>{props.title} Project Overview</h1>
          <span
            className={`material-icons ${styles.exit}`}
            onClick={props.exit}
          >
            &#xe5cd;
          </span>
        </div>
        <div className={styles.bottomContainer}>
          <div>{props.gifs}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
