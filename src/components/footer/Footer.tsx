import React from "react";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <span className={styles.email}>eksperimentiniosriftodnr@gmail.com</span>
  </footer>
);

export { Footer };
