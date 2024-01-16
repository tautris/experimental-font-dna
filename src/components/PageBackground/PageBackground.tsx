import React from "react";
import classNames from "classnames";

import styles from "./PageBackground.module.scss";

interface Props {
  isHomePage: boolean;
  children: React.ReactNode;
}

const PageBackground: React.FC<Props> = ({ isHomePage, children }) => (
  <div className={classNames(isHomePage ? styles.black : styles.gradient)}>
    <div className={styles.background}>
      {children}
      </div>
  </div>
);

export { PageBackground };
