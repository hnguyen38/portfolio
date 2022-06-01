import styles from "./scroll.module.scss";

function ScrollButton(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span
          className={`material-icons ${styles.span}`}
          onClick={props.leftScroll}
        >
          &#xe5cb;
        </span>
        <span
          className={`material-icons ${styles.span}`}
          onClick={props.rightScroll}
        >
          &#xe5cc;
        </span>
      </div>
    </div>
  );
}

export default ScrollButton;
