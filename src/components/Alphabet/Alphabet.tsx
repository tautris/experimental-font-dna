import React from "react";
import { generatePath, Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import { PATH } from "constants/paths";
import { SVG_LETTERS } from 'constants/letters';

import styles from "./Alphabet.module.scss";

const DURATION_MS = 200;
const LETTER_INTERVAL_MS = 40;

const Alphabet: React.FC = () => {
  const [letters, setLetters] = React.useState<string[]>([]);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const transitions = useTransition(letters, {
    from: { positionY: -300, opacity: 0 },
    enter: { positionY: 0, opacity: 1 },
    leave: { positionY: -300, opacity: 0 },
    config: {
      duration: DURATION_MS,
    },
  });

  const renderRemainingLetters = (index = 0) => {
    if (index >= SVG_LETTERS.length) {
      return;
    }

    setLetters((currentLetters) => [...currentLetters, SVG_LETTERS[index].letter]);

    timeoutRef.current = setTimeout(() => {
      renderRemainingLetters(index + 1);
    }, LETTER_INTERVAL_MS);
  };

  React.useEffect(() => {
    renderRemainingLetters();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      {transitions(({ positionY, opacity }, letter) => (
        <animated.div
          style={{
            opacity,
            transform: positionY.to((y) => `translate(0, ${y}px)`),
          }}
        >
          <Link
            to={generatePath(PATH.LETTER, {
              letter,
            })}
            className={styles.letter}
          >
            {letter.toUpperCase()}
          </Link>
        </animated.div>
      ))}
    </div>
  );
};

export { Alphabet };
