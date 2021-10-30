import React from "react";

import { RadioInput } from "components/RadioInput/RadioInput";

import styles from "./GenomeFont.module.scss";

import a from "assets/images/letter-anatomy/a.png";
import ą from "assets/images/letter-anatomy/ą.png";
import b from "assets/images/letter-anatomy/b.png";
import c from "assets/images/letter-anatomy/c.png";
import č from "assets/images/letter-anatomy/č.png";
import d from "assets/images/letter-anatomy/d.png";
import e from "assets/images/letter-anatomy/e.png";
import ę from "assets/images/letter-anatomy/ę.png";
import ė from "assets/images/letter-anatomy/ė.png";
import f from "assets/images/letter-anatomy/f.png";
import g from "assets/images/letter-anatomy/g.png";
import h from "assets/images/letter-anatomy/h.png";
import i from "assets/images/letter-anatomy/i.png";
import į from "assets/images/letter-anatomy/į.png";
import j from "assets/images/letter-anatomy/j.png";
import k from "assets/images/letter-anatomy/k.png";
import l from "assets/images/letter-anatomy/l.png";
import m from "assets/images/letter-anatomy/m.png";
import n from "assets/images/letter-anatomy/n.png";
import o from "assets/images/letter-anatomy/o.png";
import p from "assets/images/letter-anatomy/p.png";
import q from "assets/images/letter-anatomy/q.png";
import r from "assets/images/letter-anatomy/r.png";
import s from "assets/images/letter-anatomy/s.png";
import š from "assets/images/letter-anatomy/š.png";
import t from "assets/images/letter-anatomy/t.png";
import u from "assets/images/letter-anatomy/u.png";
import ū from "assets/images/letter-anatomy/ū.png";
import ų from "assets/images/letter-anatomy/ų.png";
import v from "assets/images/letter-anatomy/v.png";
import w from "assets/images/letter-anatomy/w.png";
import x from "assets/images/letter-anatomy/x.png";
import y from "assets/images/letter-anatomy/y.png";
import z from "assets/images/letter-anatomy/z.png";
import ž from "assets/images/letter-anatomy/ž.png";
// import downloadIcon from "assets/images/download.png";
// import genomasFont from "assets/fonts/Genomas.zip";

const FONT_SIZE_OPTIONS = [
  { value: "24px", label: "Mažiukas" },
  { value: "48px", label: "Mažas" },
  { value: "65px", label: "Normalus" },
  { value: "105px", label: "Didelis" },
  { value: "140px", label: "Milžiniškas" },
];

const GenomeFont: React.FC = () => {
  const [fontSize, setFontSize] = React.useState<string>("48px");

  const anatomyImageProps: Partial<React.ImgHTMLAttributes<HTMLImageElement>> = {
    className: styles["anatomy-image"],
  };

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

      <div className={styles["anatomy-image-container"]}>
        <img src={a} {...anatomyImageProps} />
        <img src={ą} {...anatomyImageProps} />
        <img src={b} {...anatomyImageProps} />
        <img src={c} {...anatomyImageProps} />
        <img src={č} {...anatomyImageProps} />
        <img src={d} {...anatomyImageProps} />
        <img src={e} {...anatomyImageProps} />
        <img src={ę} {...anatomyImageProps} />
        <img src={ė} {...anatomyImageProps} />
        <img src={f} {...anatomyImageProps} />
        <img src={g} {...anatomyImageProps} />
        <img src={h} {...anatomyImageProps} />
        <img src={i} {...anatomyImageProps} />
        <img src={į} {...anatomyImageProps} />
        <img src={j} {...anatomyImageProps} />
        <img src={k} {...anatomyImageProps} />
        <img src={l} {...anatomyImageProps} />
        <img src={m} {...anatomyImageProps} />
        <img src={n} {...anatomyImageProps} />
        <img src={o} {...anatomyImageProps} />
        <img src={p} {...anatomyImageProps} />
        <img src={q} {...anatomyImageProps} />
        <img src={r} {...anatomyImageProps} />
        <img src={s} {...anatomyImageProps} />
        <img src={š} {...anatomyImageProps} />
        <img src={t} {...anatomyImageProps} />
        <img src={u} {...anatomyImageProps} />
        <img src={ū} {...anatomyImageProps} />
        <img src={ų} {...anatomyImageProps} />
        <img src={v} {...anatomyImageProps} />
        <img src={w} {...anatomyImageProps} />
        <img src={x} {...anatomyImageProps} />
        <img src={y} {...anatomyImageProps} />
        <img src={z} {...anatomyImageProps} />
        <img src={ž} {...anatomyImageProps} />
      </div>
    </div>
  );
};

export { GenomeFont };
