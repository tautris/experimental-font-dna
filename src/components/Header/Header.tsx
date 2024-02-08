import React from "react";
import classNames from "classnames";
import { Link, matchPath, useLocation } from "react-router-dom";

import { PATH } from "@/constants/paths";

import { isMobile } from "@/helpers/responsive";

import styles from "./Header.module.scss";

interface Props {
  isHomePage: boolean;
}

const Header: React.FC<Props> = ({ isHomePage }) => {
  const { pathname } = useLocation();

  const HEADER_ITEMS = [
    {
      path: PATH.HOME,
      text: "Pagrindinis",
      isExact: true,
    },
    {
      path: PATH.ALPHABET,
      text: "Abėcelė",
    },
    {
      path: PATH.GENOME_FONT,
      text: isMobile() ? "Šriftas" : "Genomo šriftas",
    },
    {
      path: PATH.ABOUT,
      text: "Apie",
    },
  ];

  return (
    <nav className={classNames(isHomePage ? styles.header : styles.header)}>
      {HEADER_ITEMS.map(({ path, text, isExact }) => {
        const isActive = matchPath(pathname, { path, exact: isExact });

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
