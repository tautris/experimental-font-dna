import React from "react";

import styles from "./PageBackground.module.scss";

interface Props {
  children: React.ReactNode;
}

const PageBackground: React.FC<Props> = ({ children }) => <div className={styles.background}>{children}</div>;

export { PageBackground };
