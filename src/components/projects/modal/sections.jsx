import styles from "./sections.module.scss";

//props: gif, alt, caption
function Gifs(props) {
  return (
    <div className={styles.section}>
      <img className={styles.gif} src={props.src} alt={props.alt} />
      <span className={styles.span}>{props.caption}</span>
    </div>
  );
}

export default Gifs;
