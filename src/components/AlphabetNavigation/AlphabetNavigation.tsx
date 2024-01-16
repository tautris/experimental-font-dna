import React from "react";
import { generatePath, Link } from "react-router-dom";

import { Letter } from "@/components/Letter/Letter";
import { ENGLISH_SVG_LETTERS, LITHUANIAN_SVG_LETTERS } from "@/constants/letters";
import { PATH } from "@/constants/paths";
import { LanguageType } from "@/constants/language";

import styles from "./AlphabetNavigation.module.scss";

interface Props {
  selectedLetter: string;
  language: LanguageType;
}

const AlphabetNavigation: React.FC<Props> = ({ selectedLetter, language }) => {
  const letters = language === LanguageType.LT ? LITHUANIAN_SVG_LETTERS : ENGLISH_SVG_LETTERS;

  return (
    <div className={styles.alphabet}>
      {letters.map((letterConfig) => (
        <Link
          key={letterConfig.letter}
          to={generatePath(PATH.LETTER, {
            language,
            letter: letterConfig.letter,
          })}
        >
          <Letter letterConfig={letterConfig} isHighlighted={letterConfig.letter === selectedLetter} />
        </Link>
      ))}
    </div>
  );
};

export { AlphabetNavigation };
