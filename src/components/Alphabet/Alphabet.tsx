import React from "react";
import { generatePath, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import classNames from "classnames";

import { Letter } from "@/components/Letter/Letter";
import { RadioInput } from "@/components/RadioInput/RadioInput";
import { PATH } from "@/constants/paths";
import { LITHUANIAN_SVG_LETTERS, ENGLISH_SVG_LETTERS } from "@/constants/letters";
import { SvgLetterConfig } from "@/models/letter-config";

import genomeMutations from "@/assets/images/mutations/genome_mutations.png";
import genePointMutation from "@/assets/images/mutations/gene_point_mutation.png";
import environmentMutagens from "@/assets/images/mutations/environment_mutagens.png";

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

type UrlParams = {
  language: LanguageType;
};

const Alphabet: React.FC = () => {
  const location = useLocation();
  const locationState = location.state as LocationState | undefined;
  const { language } = useParams<UrlParams>() as UrlParams;
  const navigate = useNavigate();

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
    navigate(generatePath(PATH.ALPHABET_WITH_LANGUAGE, { language: value }));
  };

  const isWithoutAnimation = locationState?.isWithoutAnimation;

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
        <p className={styles.explainer}>Norėdami pamatyti mutaciją, pasirinkite raidę</p>
        <h2 className={styles.title}>Mutacijos</h2>

        <div className={styles.mutation}>
          <div className={styles["genome-mutations-info"]}>
            <h3 className={styles["mutation-title"]}>Genomo mutacijos, kitaip vadinamos chromosomų ligos</h3>
            <p className={styles["mutation-description"]}>
              Pakitęs organizmo chromosomų skaičius, kai jų porose gali būti per daug arba per mažai chromosomų.
              Monosomija tai reiškinys kuomet ląstelės branduolys turi tik vieną chromosomų skaičių, kai rinkinyje jų
              turėtų būti du. Trisomija tai kai ląstelės chromosomų rinkinio skaičius didesnis nei du, dažniausiai
              pasitaikantis 3 chromosomų skaičius.
            </p>
          </div>
          <div className={styles["image-container"]}>
            <img src={genomeMutations} alt="monosomija" className={styles.image} loading="lazy" />
          </div>
        </div>

        <div className={styles.mutation}>
          <div className={styles["gene-point-mutation-info"]}>
            <h3 className={styles["mutation-title"]}>Genų taškinė mutacija, kitaip vadinama monogeninėmis ligomis</h3>
            <p className={styles["mutation-description"]}>
              Taškinė genų mutacija tai atskirų genų pakitimas. Mutacijų atsiradimo metu vyksta DNR grandinės molekulės
              struktūros pokyčiai, kai vieni nukleotidai yra pakeičiami į kitus. Padvigubėja geno fragmentas ar
              nukleotidai.
            </p>
          </div>
          <div className={styles["image-container"]}>
            <img src={genePointMutation} alt="taškinė genų mutacija" className={styles.image} loading="lazy" />
          </div>
        </div>

        <div className={styles.mutation}>
          <div className={styles["environment-mutagens-info"]}>
            <h3 className={styles["mutation-title"]}>
              Aplinkos mutagenai, dar kitaip vadinami daugiaveiksmės-kompleksinės ligos
            </h3>
            <p className={styles["mutation-description"]}>
              Aplinkos mutagenai - nepaveldimi fenotipo pokyčiai. Mutagenas tai sukėlęs mutaciją veiksnys. Aplinkos
              mutagenas tai esantys veiksniai organizmų bei žmogaus aplinkoje. Mutacija pasireiškia, kai kintamas
              organizmas yra veikiamas aplinkos sąlygomis. Mutacinis efektas gali būti nuolatinis arba laikinas,
              paveikti organizmą neigiamai, arba naudingai.
            </p>
          </div>
          <div className={styles["image-container"]}>
            <img src={environmentMutagens} alt="mutageno mutacija" className={styles.image} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Alphabet };
