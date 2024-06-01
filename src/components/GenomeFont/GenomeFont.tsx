import React from "react";
import Slider, { Settings } from "react-slick";

import { RadioInput } from "@/components/RadioInput/RadioInput";

import styles from "./GenomeFont.module.scss";

import a from "@/assets/images/letter-anatomy/a.png";
import ą from "@/assets/images/letter-anatomy/ą.png";
import b from "@/assets/images/letter-anatomy/b.png";
import c from "@/assets/images/letter-anatomy/c.png";
import č from "@/assets/images/letter-anatomy/č.png";
import d from "@/assets/images/letter-anatomy/d.png";
import e from "@/assets/images/letter-anatomy/e.png";
import ę from "@/assets/images/letter-anatomy/ę.png";
import ė from "@/assets/images/letter-anatomy/ė.png";
import f from "@/assets/images/letter-anatomy/f.png";
import g from "@/assets/images/letter-anatomy/g.png";
import h from "@/assets/images/letter-anatomy/h.png";
import i from "@/assets/images/letter-anatomy/i.png";
import į from "@/assets/images/letter-anatomy/į.png";
import j from "@/assets/images/letter-anatomy/j.png";
import k from "@/assets/images/letter-anatomy/k.png";
import l from "@/assets/images/letter-anatomy/l.png";
import m from "@/assets/images/letter-anatomy/m.png";
import n from "@/assets/images/letter-anatomy/n.png";
import o from "@/assets/images/letter-anatomy/o.png";
import p from "@/assets/images/letter-anatomy/p.png";
import q from "@/assets/images/letter-anatomy/q.png";
import r from "@/assets/images/letter-anatomy/r.png";
import s from "@/assets/images/letter-anatomy/s.png";
import š from "@/assets/images/letter-anatomy/š.png";
import t from "@/assets/images/letter-anatomy/t.png";
import u from "@/assets/images/letter-anatomy/u.png";
import ū from "@/assets/images/letter-anatomy/ū.png";
import ų from "@/assets/images/letter-anatomy/ų.png";
import v from "@/assets/images/letter-anatomy/v.png";
import w from "@/assets/images/letter-anatomy/w.png";
import x from "@/assets/images/letter-anatomy/x.png";
import y from "@/assets/images/letter-anatomy/y.png";
import z from "@/assets/images/letter-anatomy/z.png";
import ž from "@/assets/images/letter-anatomy/ž.png";
// import downloadIcon from "@/assets/images/download.png";
// import genomasFont from "@/assets/fonts/Genomas.zip";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FONT_SIZE_OPTIONS = [
  { value: "24px", label: "Mažiausias" },
  { value: "48px", label: "Mažas" },
  { value: "65px", label: "Normalus" },
  { value: "105px", label: "Didelis" },
  { value: "140px", label: "Didžiausias" },
];

const SLIDER_SETTINGS: Settings = {
  // TODO: try out
  //  adaptiveHeight
  //  centerMode
  //  centerPadding
  //  easing
  //  fade
  //  easing
  //  lazyLoad
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const GenomeFont: React.FC = () => {
  const [fontSize, setFontSize] = React.useState<string>("48px");

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles["font-size-container"]}>
          {FONT_SIZE_OPTIONS.map(({ value, label }) => (
            <RadioInput key={value} value={value} label={label} isChecked={value === fontSize} onChange={setFontSize} />
          ))}
        </div>

        <textarea
          className={styles.textarea}
          style={{ fontSize }}
          placeholder="Paeksperimentuok"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
        />

        {/*<div className={styles.download}>
           <a href={genomasFont} className={styles["download-link"]}>
             <img src={downloadIcon} alt="atsisiųsti" />
           </a>
          </div> */}

        <h1 className={styles["anatomy-title"]}>Raidžių anatomija</h1>
      </div>

      <div className={styles["slider-container"]}>
        <Slider {...SLIDER_SETTINGS}>
          <img src={a} />
          <img src={ą} />
          <img src={b} />
          <img src={c} />
          <img src={č} />
          <img src={d} />
          <img src={e} />
          <img src={ę} />
          <img src={ė} />
          <img src={f} />
          <img src={g} />
          <img src={h} />
          <img src={i} />
          <img src={į} />
          <img src={j} />
          <img src={k} />
          <img src={l} />
          <img src={m} />
          <img src={n} />
          <img src={o} />
          <img src={p} />
          <img src={q} />
          <img src={r} />
          <img src={s} />
          <img src={š} />
          <img src={t} />
          <img src={u} />
          <img src={ū} />
          <img src={ų} />
          <img src={v} />
          <img src={w} />
          <img src={x} />
          <img src={y} />
          <img src={z} />
          <img src={ž} />
        </Slider>
      </div>
    </div>
  );
};

export { GenomeFont };
