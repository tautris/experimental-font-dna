import React from "react";
import { generatePath, Link, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import classNames from "classnames";

import { Letter } from "components/Letter/Letter";
import { PATH } from "constants/paths";
import { SVG_LETTERS } from "constants/letters";
import { SvgLetterConfig } from "models/letter-config";

import monosomyImage from "assets/images/mutations/monosomy.png";
import trisomyImage from "assets/images/mutations/trisomy.png";
import pointImage from "assets/images/mutations/point.png";
import mutagenImage from "assets/images/mutations/mutagen.png";

import styles from "./Alphabet.module.scss";

const DURATION_MS = 200;
const LETTER_INTERVAL_MS = 150;

interface LocationState {
  isWithoutAnimation: boolean;
}

const Alphabet: React.FC = () => {
  const { state } = useLocation<LocationState>();

  const [letters, setLetters] = React.useState<SvgLetterConfig[]>([]);
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

    setLetters((currentLetters) => [...currentLetters, SVG_LETTERS[index]]);

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

  const isWithoutAnimation = state?.isWithoutAnimation;

  return (
    <div>
      {!isWithoutAnimation && (
        <div className={styles.alphabet}>
          {transitions(({ positionY, opacity }, letterConfig) => (
            <animated.div
              style={{
                opacity,
                transform: positionY.to((y) => `translate(0, ${y}px)`),
              }}
            >
              <Link
                to={generatePath(PATH.LETTER, {
                  letter: letterConfig.letter,
                })}
              >
                <Letter letterConfig={letterConfig} />
              </Link>
            </animated.div>
          ))}
        </div>
      )}

      <div className={classNames(isWithoutAnimation ? styles["static-alphabet"] : styles["alphabet-placeholder"])}>
        {SVG_LETTERS.map((letterConfig) => (
          <Link
            key={letterConfig.letter}
            to={generatePath(PATH.LETTER, {
              letter: letterConfig.letter,
            })}
          >
            <Letter letterConfig={letterConfig} />
          </Link>
        ))}
      </div>

      <div className={styles.mutations}>
        <h2 className={styles.title}>Mutacijos</h2>
        <p className={styles.subtitle}>Norėdami pamatyti mutaciją, pasirinkite raidę</p>
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
          <div className={styles.image}>
            <div className={styles["image-circle"]}>
              <img src={monosomyImage} alt="monosomija" className={styles["monosomy-image"]} />
              <img src={trisomyImage} alt="trisomija" className={styles["trisomy-image"]} />
            </div>
          </div>
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
          <div className={styles.image}>
            <div className={styles["image-circle"]}>
              <img src={pointImage} alt="taškinė genų mutacija" />
            </div>
          </div>
        </div>

        <div className={styles.mutation}>
          <div className={styles["mutation-info"]}>
            <div className={styles["mutation-header"]}>
              <h3 className={styles["mutation-title"]}>
                Aplinkos mutagenai, dar kitaip vadinami daugiaveiksmės-kompleksinės ligos
              </h3>
              <div className={styles["mutation-line"]} />
            </div>
            <p className={styles["mutation-description"]}>
              Aplinkos mutagenai - nepaveldimi fenotipo pokyčiai. Mutagenas tai sukėlęs mutaciją veiksnys. Aplinkos
              mutagenas tai esantys veiksniai organizmų bei žmogaus aplinkoje. Mutacija pasireiškia, kai kintamas
              organizmas yra veikiamas aplinkos sąlygomis. Mutacinis efektas gali būti nuolatinis arba laikinas,
              paveikti organizmą neigiamai, arba naudingai.
            </p>
          </div>
          <div className={styles.image}>
            <div className={styles["image-circle"]}>
              <img src={mutagenImage} alt="mutageno mutacija" className={styles["mutagen-image"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Alphabet };
