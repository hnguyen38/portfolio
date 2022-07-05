import styles from "./contact.module.scss";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    window.location = "mailto:hannahnguyen038@gmail.com";
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>Contact Me</h1>
        <div className={styles.allInfo}>
          <div className={styles.info}>
            <span className={`material-icons ${styles.span}`}>&#xe853;</span>
            <span className={styles.span}>Hannah Nguyen</span>
          </div>
          <div className={styles.info}>
            <span className={`material-icons ${styles.span}`}>&#xe158;</span>
            <span className={styles.span}>hannahnguyen038@gmail.com</span>
          </div>
          <div className={styles.info}>
            <span className={`material-icons ${styles.span}`}>&#xe55e;</span>
            <span className={styles.span}>United States</span>
          </div>
          <div className={styles.btnDiv}>
            <button
              className={styles.email}
              type="button"
              onClick={handleSubmit}
            >
              Send me an Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
