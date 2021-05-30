import React from "react";
import { useRouteMatch } from "react-router";
import { generatePath, Link } from "react-router-dom";

import { AlphabetNavigation } from "components/AlphabetNavigation/AlphabetNavigation";
import { SVG_LETTERS } from "constants/letters";
import { PATH } from "constants/paths";

import { LetterExpositionContent } from "./LetterExpositionContent";

import styles from "./LetterExposition.module.scss";

interface UrlParams {
  letter: string;
}

const LetterExposition: React.FC = () => {
  const { params } = useRouteMatch<UrlParams>();

  const letterConfig = SVG_LETTERS.find((letterConfig) => letterConfig.letter === params.letter);

  if (!letterConfig) {
    // TODO: what to do here
    return null;
  }

  return (
    <div>
      <LetterExpositionContent letterConfig={letterConfig} />
      <div className={styles.navigation}>
        <div className={styles["alphabet-navigation"]}>
          <AlphabetNavigation selectedLetter={letterConfig.letter} />
        </div>
        <Link to={generatePath(PATH.ALPHABET)} className={styles["alphabet-link"]}>
          &#8249; Į Abėcėlę
        </Link>
      </div>
    </div>
  );
};

export { LetterExposition };
