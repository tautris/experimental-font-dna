import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { PATH } from "@/constants/paths";

import { isMobile } from "@/helpers/responsive";

import styles from "./Header.module.scss";

interface Props {
  isHomePage: boolean;
}

const Header: React.FC<Props> = ({ isHomePage }) => {
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
      text: isMobile() ? "Šriftas" : "Genomo šriftas",
    },
    {
      path: PATH.ABOUT,
      text: "Apie",
    },
  ];

  return (
    <nav className={classNames(isHomePage ? styles.header : styles.header)}>
      {HEADER_ITEMS.map(({ path, text }) => {
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => classNames(styles.item, isActive && styles.active)}
          >
            {text}
          </NavLink>
        );
      })}
    </nav>
  );
};

export { Header };
