import React from "react";
import { generatePath, Link } from "react-router-dom";

import { Letter } from "components/Letter/Letter";
import { SVG_LETTERS } from "constants/letters";
import { PATH } from "constants/paths";

import styles from "./AlphabetNavigation.module.scss";

interface Props {
  selectedLetter: string;
}

const AlphabetNavigation: React.FC<Props> = ({ selectedLetter }) => {
  return (
    <div className={styles.alphabet}>
      {SVG_LETTERS.map((letterConfig) => (
        <Link
          key={letterConfig.letter}
          to={generatePath(PATH.LETTER, {
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
