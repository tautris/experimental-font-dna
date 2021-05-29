import React from "react";
import { generatePath, Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import classNames from "classnames";

import { PATH } from "constants/paths";
import { SVG_LETTERS } from "constants/letters";

import styles from "./Alphabet.module.scss";

const DURATION_MS = 200;
const LETTER_INTERVAL_MS = 150;

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
    <div>
      <div className={styles.alphabet}>
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
      <div className={styles.mutations}>
        <h2 className={styles.title}>Mutacijos</h2>
        <p className={styles.subtitle}>Norėdami pamatyti mutaciją,pasirinkite raidę</p>
        <div className={styles.mutation}>
          <div className={styles["mutation-info"]}>
            <div className={styles["mutation-header"]}>
              <h3 className={styles["mutation-title"]}>Genomo mutacijos, kitaip vadinamos chromosomų ligos</h3>
              <div className={styles["mutation-line"]} />
            </div>
            <p className={styles["mutation-description"]}>
              Pakitęs organizmo chromosomų skaičius, kai jų porose gali būti per daug arba per mažai chromosomų.
              Monosomija tai reiškinys kuomet ląstelės branduolys turi tik vieną chromosomų skaičių, kai rinkinyje jų
              turėtų būti du. Trisomija tai kai ląstelės chromosomų rinkinio skaičius didesnis nei du, dažniausiai
              pasitaikantis 3 chromosomų skaičius.
            </p>
          </div>
          <div className={styles.image}>*Bus ikona*</div>
        </div>

        <div className={styles.mutation}>
          <div className={styles["mutation-info"]}>
            <div className={styles["mutation-header"]}>
              <h3 className={styles["mutation-title"]}>Genų taškinė mutacija, kitaip vadinama monogeninėmis ligomis</h3>
              <div className={styles["mutation-line"]} />
            </div>
            <p className={styles["mutation-description"]}>
              Taškinė genų mutacija tai atskirų genų pakitimas. Mutacijų atsiradimo metu vyksta DNR grandinės molekulės
              struktūros pokyčiai, kai vieni nukleotidai yra pakeičiami į kitus. Padvigubėja geno fragmentas ar
              nukleotidai.
            </p>
          </div>
          <div className={styles.image}>*Bus ikona*</div>
        </div>

        <div className={classNames(styles.mutation, styles["mutation--right"])}>
          <div className={styles.image}>*Bus ikona*</div>
          <div className={styles["mutation-info"]}>
            <div className={styles["mutation-header"]}>
              <div className={styles["mutation-line"]} />
              <h3 className={styles["mutation-title"]}>
                Aplinkos mutagenai, dar kitaip vadinami daugiaveiksmės-kompleksinės ligos
              </h3>
            </div>
            <p className={styles["mutation-description"]}>
              Aplinkos mutagenai - nepaveldimi fenotipo pokyčiai. Mutagenas tai sukėlęs mutaciją veiksnys. Aplinkos
              mutagenas tai esantys veiksniai organizmų bei žmogaus aplinkoje. Mutacija pasireiškia, kai kintamas
              organizmas yra veikiamas aplinkos sąlygomis. Mutacinis efektas gali būti nuolatinis arba laikinas,
              paveikti organizmą neigiamai, arba naudingai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Alphabet };
