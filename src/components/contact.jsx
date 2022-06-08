import styles from "./contact.module.scss";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Me</h1>
        <span className={styles.color}>―</span>
      </div>
      <div className={styles.allInfo}>
        <div className={styles.myInfo}>
          <span className="material-icons">&#xe853;</span>
          <span>Hannah Nguyen</span>
          <span className="material-icons">&#xe158;</span>
          <span>hannahnguyen038@gmail.com</span>
          <span className="material-icons">&#xe55e;</span>
          <span>Nebraska, USA</span>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input id="name" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input id="email" type="email" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="subject">
              Subject <span>*</span>
            </label>
            <input id="subject" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea id="message" required />
          </div>
          <div className={styles.button}>
            <button className={styles.send}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
