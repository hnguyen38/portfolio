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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group1}>
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input id="name" required />
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
  );
}

export default Contact;
