import React from "react";

import dnaChainImage from "@/assets/images/dna_chain.svg";

import styles from "./About.module.scss";

const About: React.FC = () => {
  const paragraphClassName = styles.paragraph;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Eksperimentinio
          <br />
          šrifto DNR
        </h1>
        <p className={paragraphClassName}>
          Eksperimentinis šriftas - tai netradicinis, meninio pobūdžio metodas, kurio panaudojimas XX a. laikotarpyje
          sukėlė šurmulį dizaino tendencijų kryptingume, kur maketavimas ir tipografijos standartinės taisyklės buvo
          nepaisomos. Šiandien šios technikos panaudojimą galima išvysti įvairiai pateiktomis perspektyvomis, kai
          eksperimentinis šriftas gali būti estetinio, komercinio pobūdžio ar naudojamas konkrečiam tikslui kaip
          reklaminiam, ar socialiniam įsitraukimui pasiekti.
        </p>
        <p className={paragraphClassName}>
          Funkcionalūs, harmoningi raidžių simboliai visuomenėje dažnai pripažįstami kaip gražūs, akiai įprasti,
          klausimų nekeliantys pasirinkimai. Tačiau dažnam skaitytojui raidžių kūriniai, išreikšti netradicine linkme
          gali kelti įvairias emocijas, kurių dėka visuomenėje tam tikri šrifto pasirinkimai gauna iš ankstinį neigiamą
          nuosprendį.
        </p>
        <p className={paragraphClassName}>
          Eksperimentinio šrifto DNR projektas skatina didinti visuomenės sąmoningumą. Iššaukiamas pavienių asmenų
          bendruomeniškumo pojūtis, kurio dėka atsižvelgiama į bendrus tikslus ir poreikius. Pateikiama metaforiška,
          visuomenės vertybių ir normos neatitinkanti situacija, kuri padeda atkreipti dėmesį į susidariusią nuomonę
          apie žmogų, turintį DNR mutacijas. Eksperimentinis šriftas ir žmogaus DNR grandinės mutacijos lyginami
          tarpusavyje, norint aiškiau išreikšti žmogaus požiūrį į eksperimentinį šriftą. Analizuojamas eksperimentinio
          šrifto ir žmogaus DNR grandinės mutacijų atvejų veikimas kaip atskirų reiškinių ir kaip vystosi jų
          komunikacija tarpusavyje - kaip kaitaliojasi ar papildo vienas kitą. <i>Homo sapiens</i> DNR grandinės
          mutacijos asimiliuoja su eksperimentiniu šriftu ir taip sukuriamas genomo šriftas.
        </p>
        <p className={paragraphClassName}>
          Svarstant visuomenės standartus, žmogus kviečiamas įsijungti į sąmoningą apmąstymą, iškeliant visuomenės
          stigmas apie tipografijos principą bei eksperimentinio šrifto galimybes. Svarbu suvokti eksperimentinio šrifto
          panaudojimą ir jo analizavimo procesą, kurio metu galima apsvarstyti, kokią įtaką šriftas daro žmogui ir kokią
          įtaką žmogus daro šriftui.
        </p>
        <address className={styles.contacts}>
          <a href="mailto:eksperimentiniosriftodnr@gmail.com" className={styles.email}>
            eksperimentiniosriftodnr@gmail.com
          </a>
        </address>
      </div>
      <div className={styles["image-container"]}>
        <img src={dnaChainImage} alt="DNA chain" />
      </div>
    </div>
  );
};

export { About };
