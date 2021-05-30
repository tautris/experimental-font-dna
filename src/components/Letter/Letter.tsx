import React from "react";
import classNames from "classnames";

import { SvgLetterConfig } from "models/letter-config";

import styles from "./Letter.module.scss";

interface Props {
  letterConfig: SvgLetterConfig;
  isHighlighted?: boolean;
}

const Letter: React.FC<Props> = ({ letterConfig: { viewBox, paths }, isHighlighted }) => (
  <div className={classNames(styles.letter, isHighlighted && styles["letter--highlighted"])}>
    <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" className={styles.glyph}>
      <g fill="transparent" stroke="currentColor" strokeWidth={0.25}>
        {paths.map((path, index) => (
          <path key={index} fill="currentColor" d={path} />
        ))}
      </g>
    </svg>
  </div>
);

export { Letter };
