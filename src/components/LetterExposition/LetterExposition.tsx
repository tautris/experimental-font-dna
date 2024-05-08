import React from "react";
import { generatePath, Link, useParams } from "react-router-dom";

import { AlphabetNavigation } from "@/components/AlphabetNavigation/AlphabetNavigation";
import { SVG_LETTERS } from "@/constants/letters";
import { PATH } from "@/constants/paths";
import { LanguageType } from "@/constants/language";

import { LetterExpositionContent } from "./LetterExpositionContent";

import styles from "./LetterExposition.module.scss";

type UrlParams = {
  language: LanguageType;
  letter: string;
};

const LetterExposition: React.FC = () => {
  const { language, letter } = useParams<UrlParams>() as UrlParams;

  const letterConfig = SVG_LETTERS.find((letterConfig) => letterConfig.letter === letter);

  if (!letterConfig) {
    return null;
  }

  return (
    <div>
      <LetterExpositionContent letterConfig={letterConfig} />
      <div className={styles.navigation}>
        <div className={styles["alphabet-navigation"]}>
          <AlphabetNavigation selectedLetter={letterConfig.letter} language={language} />
        </div>
        <Link
          to={{
            pathname: generatePath(PATH.ALPHABET_WITH_LANGUAGE, { language }),
          }}
          state={{ isWithoutAnimation: true }}
          className={styles["alphabet-link"]}
        >
          &#8249; į abėcelę
        </Link>
      </div>
    </div>
  );
};

export { LetterExposition };
