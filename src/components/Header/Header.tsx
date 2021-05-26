import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import { PATH } from "constants/paths";

import styles from "./Header.module.scss";

const HEADER_ITEMS = [
  {
    path: PATH.HOME,
    text: "Pagrindinis",
  },
  {
    path: PATH.ALPHABET,
    text: "Abėcelė",
  },
  {
    path: PATH.GENOME_FONT,
    text: "Genomo šriftas",
  },
  {
    path: PATH.ABOUT,
    text: "Apie",
  },
];

interface Props {
  isHomePage: boolean;
}

const Header: React.FC<Props> = ({ isHomePage }) => {
  const { pathname } = useLocation();

  return (
    <nav className={classNames(isHomePage ? styles.header : styles.header)}>
      {HEADER_ITEMS.map(({ path, text }) => {
        const isActive = path === pathname;

        return (
          <Link key={path} to={path} className={classNames(styles.item, isActive && styles.active)}>
            {text}
          </Link>
        );
      })}
    </nav>
  );
};

export { Header };
