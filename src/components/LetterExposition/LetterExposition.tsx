import React from "react";
import { useRouteMatch } from "react-router";

import { AlphabetNavigation } from "components/AlphabetNavigation/AlphabetNavigation";
import { SVG_LETTERS } from "constants/letters";

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
        <AlphabetNavigation selectedLetter={letterConfig.letter} />
      </div>
    </div>
  );
};

export { LetterExposition };
