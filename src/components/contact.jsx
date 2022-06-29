import styles from "./contact.module.scss";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
<<<<<<< HEAD
    window.location = "mailto:hannahnguyen038@gmail.com";
  }

  return (
    <div className={styles.wrapper}>
=======
    window.location = 'mailto:hannahnguyen038@gmail.com';
  }

  return (
    <div className={styles.wrapper} >
>>>>>>> 82e602cd37ab763cac57f5d14c25ab4462905a25
      <div className={styles.header}>
        <h1>Contact Me</h1>
        {/* <span className={styles.color}>―</span> */}
      </div>
      <div className={styles.container}>
<<<<<<< HEAD
        <div className={styles.allInfo}>
          <div className={styles.myInfo}>
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

          {/* <form className={styles.form} onSubmit={handleSubmit}>
=======
      <div className={styles.allInfo}>
        <div className={styles.myInfo}>
          <div className={styles.info}><span className={`material-icons ${styles.span}`}>&#xe853;</span>
          <span className={styles.span}>Hannah Nguyen</span></div>
          <div className={styles.info}><span className={`material-icons ${styles.span}`}>&#xe158;</span>
          <span className={styles.span}>hannahnguyen038@gmail.com</span></div>
          <div className={styles.info}>
          <span className={`material-icons ${styles.span}`}>&#xe55e;</span>
          <span className={styles.span}>Nebraska, USA</span></div>
          <div className={styles.btnDiv}>
          <button className={styles.email} type='button' onClick={handleSubmit}>Send me an Email</button>
        </div>
        </div>
        
        {/* <form className={styles.form} onSubmit={handleSubmit}>
>>>>>>> 82e602cd37ab763cac57f5d14c25ab4462905a25
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
        </form> */}
<<<<<<< HEAD
        </div>
      </div>
=======
      </div></div>
    
>>>>>>> 82e602cd37ab763cac57f5d14c25ab4462905a25
    </div>
  );
}

export default Contact;
