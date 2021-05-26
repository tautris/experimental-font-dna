import React from "react";
import classNames from "classnames";

import styles from "./PageBackground.module.scss";

interface Props {
  isHomePage: boolean;
}

const PageBackground: React.FC<Props> = ({ isHomePage, children }) => (
  <div className={classNames(isHomePage ? styles.black : styles.gradient)}>{children}</div>
);

export { PageBackground };
