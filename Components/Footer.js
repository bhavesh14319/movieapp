import React from "react";
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <small>
            &copy;2022 <strong>Awesome Company</strong>, All Rights Reserved
          </small>
          <nav className={styles.footerNav}>
            <p>Made With 💖</p>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
