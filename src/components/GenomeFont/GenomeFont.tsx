import React from "react";

import styles from "./GenomeFont.module.scss";

import downloadIcon from "assets/images/download.png";
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

import a1 from "assets/images/letter-anatomy/a1.png";
import ą1 from "assets/images/letter-anatomy/ą1.png";
import b1 from "assets/images/letter-anatomy/b1.png";
import c1 from "assets/images/letter-anatomy/c1.png";
// import č1 from "assets/images/letter-anatomy/č1.png";
// import d1 from "assets/images/letter-anatomy/d1.png";
// import e1 from "assets/images/letter-anatomy/e1.png";
// import ę1 from "assets/images/letter-anatomy/ę1.png";
// import ė1 from "assets/images/letter-anatomy/ė1.png";
// import f1 from "assets/images/letter-anatomy/f1.png";
// import g1 from "assets/images/letter-anatomy/g1.png";
// import h1 from "assets/images/letter-anatomy/h1.png";
// import i1 from "assets/images/letter-anatomy/i1.png";
// import į1 from "assets/images/letter-anatomy/į1.png";
// import j1 from "assets/images/letter-anatomy/j1.png";
// import k1 from "assets/images/letter-anatomy/k1.png";
// import l1 from "assets/images/letter-anatomy/l1.png";
// import m1 from "assets/images/letter-anatomy/m1.png";
// import n1 from "assets/images/letter-anatomy/n1.png";
// import o1 from "assets/images/letter-anatomy/o1.png";
// import p1 from "assets/images/letter-anatomy/p1.png";
// import q1 from "assets/images/letter-anatomy/q1.png";
// import r1 from "assets/images/letter-anatomy/r1.png";
// import s1 from "assets/images/letter-anatomy/s1.png";
// import š1 from "assets/images/letter-anatomy/š1.png";
// import t1 from "assets/images/letter-anatomy/t1.png";
// import u1 from "assets/images/letter-anatomy/u1.png";
// import ū1 from "assets/images/letter-anatomy/ū1.png";
// import ų1 from "assets/images/letter-anatomy/ų1.png";
// import v1 from "assets/images/letter-anatomy/v1.png";
// import w1 from "assets/images/letter-anatomy/w1.png";
// import x1 from "assets/images/letter-anatomy/x1.png";
// import y1 from "assets/images/letter-anatomy/y1.png";
// import z1 from "assets/images/letter-anatomy/z1.png";
// import ž1 from "assets/images/letter-anatomy/ž1.png";

import genomasFont from "assets/fonts/Genomas.zip";

const FONT_SIZE_OPTIONS = [
  { value: "24px", label: "Mažiukas" },
  { value: "48px", label: "Mažas" },
  { value: "65px", label: "Normalus" },
  { value: "105px", label: "Didelis" },
  { value: "140px", label: "Milžiniškas" },
];

const GenomeFont: React.FC = () => {
  const [fontSize, setFontSize] = React.useState<string>("48px");

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(event.target.value);
  };

  const anatomyImageProps: Partial<React.ImgHTMLAttributes<HTMLImageElement>> = {
    className: styles["anatomy-image"],
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles["font-size-container"]}>
          {FONT_SIZE_OPTIONS.map(({ value, label }) => (
            <label key={value} className={styles["radio-wrapper"]}>
              {label}
              <input
                type="radio"
                id={value}
                name={value}
                value={value}
                checked={fontSize === value}
                className={styles.input}
                onChange={handleFontSizeChange}
              />
              <span className={styles.checkmark}></span>
            </label>
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

        <div className={styles.download}>
          <a href={genomasFont} className={styles["download-link"]}>
            <img src={downloadIcon} alt="atsisiųsti" />
          </a>
        </div>

        <h1 className={styles["anatomy-title"]}>Raidžių anatomija</h1>
      </div>

      <img src={a1} {...anatomyImageProps} />
      <img src={ą1} {...anatomyImageProps} />
      <img src={b1} {...anatomyImageProps} />
      <img src={c1} {...anatomyImageProps} />
      {/* <img src={č1} {...anatomyImageProps} />
      <img src={d1} {...anatomyImageProps} />
      <img src={e1} {...anatomyImageProps} />
      <img src={ę1} {...anatomyImageProps} />
      <img src={ė1} {...anatomyImageProps} />
      <img src={f1} {...anatomyImageProps} />
      <img src={g1} {...anatomyImageProps} />
      <img src={h1} {...anatomyImageProps} />
      <img src={i1} {...anatomyImageProps} />
      <img src={į1} {...anatomyImageProps} />
      <img src={j1} {...anatomyImageProps} />
      <img src={k1} {...anatomyImageProps} />
      <img src={l1} {...anatomyImageProps} />
      <img src={m1} {...anatomyImageProps} />
      <img src={n1} {...anatomyImageProps} />
      <img src={o1} {...anatomyImageProps} />
      <img src={p1} {...anatomyImageProps} />
      <img src={q1} {...anatomyImageProps} />
      <img src={r1} {...anatomyImageProps} />
      <img src={s1} {...anatomyImageProps} />
      <img src={š1} {...anatomyImageProps} />
      <img src={t1} {...anatomyImageProps} />
      <img src={u1} {...anatomyImageProps} />
      <img src={ū1} {...anatomyImageProps} />
      <img src={ų1} {...anatomyImageProps} />
      <img src={v1} {...anatomyImageProps} />
      <img src={w1} {...anatomyImageProps} />
      <img src={x1} {...anatomyImageProps} />
      <img src={y1} {...anatomyImageProps} />
      <img src={z1} {...anatomyImageProps} />
      <img src={ž1} {...anatomyImageProps} /> */}

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
  );
};

export { GenomeFont };
