import React from "react";
import { generatePath, Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import classNames from "classnames";

import { Letter } from "@/components/Letter/Letter";
import { RadioInput } from "@/components/RadioInput/RadioInput";
import { PATH } from "@/constants/paths";
import { LITHUANIAN_SVG_LETTERS, ENGLISH_SVG_LETTERS } from "@/constants/letters";
import { SvgLetterConfig } from "@/models/letter-config";

import monosomyImage from "@/assets/images/mutations/monosomy.png";
import trisomyImage from "@/assets/images/mutations/trisomy.png";
import pointImage from "@/assets/images/mutations/point.svg";
import mutagenImage from "@/assets/images/mutations/mutagen.png";

import styles from "./Alphabet.module.scss";
import { LanguageType } from "@/constants/language";

const DURATION_MS = 200;
const LETTER_INTERVAL_MS = 150;

const LANGUAGE_OPTIONS = [
  { value: LanguageType.LT, label: LanguageType.LT },
  { value: LanguageType.EN, label: LanguageType.EN },
];

interface LocationState {
  isWithoutAnimation: boolean;
}

interface UrlParams {
  language: LanguageType;
}

const Alphabet: React.FC = () => {
  const { state } = useLocation<LocationState>();
  const { language } = useParams<UrlParams>();
  const history = useHistory();

  const [letters, setLetters] = React.useState<SvgLetterConfig[]>([]);

  const timeoutRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    setLetters([]);
    renderRemainingLetters();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const transitions = useTransition(letters, {
    from: { positionY: -300, opacity: 0 },
    enter: { positionY: 0, opacity: 1 },
    config: {
      duration: DURATION_MS,
    },
  });

  const svgLetters = language === LanguageType.LT ? LITHUANIAN_SVG_LETTERS : ENGLISH_SVG_LETTERS;

  const renderRemainingLetters = (index = 0) => {
    if (index >= svgLetters.length) {
      return;
    }

    setLetters((currentLetters) => [...currentLetters, svgLetters[index]]);

    timeoutRef.current = setTimeout(() => {
      renderRemainingLetters(index + 1);
    }, LETTER_INTERVAL_MS);
  };

  const handleLanguageChange = (value: string) => {
    history.replace(generatePath(PATH.ALPHABET_WITH_LANGUAGE, { language: value }));
  };

  const isWithoutAnimation = state?.isWithoutAnimation;

  return (
    <div>
      <div className={styles["language-container"]}>
        {LANGUAGE_OPTIONS.map(({ value, label }) => (
          <RadioInput
            key={value}
            value={value}
            label={label}
            isChecked={value === language}
            onChange={handleLanguageChange}
          />
        ))}
      </div>

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
                  language,
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
        {svgLetters.map((letterConfig) => (
          <Link
            key={letterConfig.letter}
            to={generatePath(PATH.LETTER, {
              language,
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
              Taškinė genų mutacija tai atskiro geno pakitimas. Mutacijų atsiradimo metu vyksta DNR grandinės molekulės
              struktūros pokyčiai, kai vieni nukleotidai yra pakeičiami į kitus. Padvigubėja geno fragmentas ar
              nukleotidai.
            </p>
          </div>
          <div className={styles.image}>
            <img src={pointImage} alt="taškinė genų mutacija" />
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
              Aplinkos mutagenai. Mutagenas tai sukėlęs mutaciją veiksnys. Aplinkos mutagenas tai esantys veiksniai
              organizmų bei žmogaus aplinkoje. Mutacija pasireiškia, kai kintamas organizmas yra veikiamas aplinkos
              sąlygomis. Mutacinis efektas gali būti nuolatinis arba laikinas, paveikti organizmą neigiamai, arba
              naudingai.
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
