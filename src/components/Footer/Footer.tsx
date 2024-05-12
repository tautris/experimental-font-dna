import React from "react";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <address>
      <a href="mailto:eksperimentiniosriftodnr@gmail.com" className={styles.email}>
        eksperimentiniosriftodnr@gmail.com
      </a>
    </address>
  </footer>
);

export { Footer };
