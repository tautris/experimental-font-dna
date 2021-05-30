import React from "react";

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

const FONT_SIZE_OPTIONS = ["24 px", "48 px", "65 px", "105 px"];

const GenomeFont: React.FC = () => {
  const [fontSize, setFontSize] = React.useState<string>("48 px");

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(event.target.value);
  };

  const textAreaStyle = {
    fontSize: fontSize.replace(" ", ""),
  };

  const anatomyImageProps: Partial<React.ImgHTMLAttributes<HTMLImageElement>> = {
    className: styles["anatomy-image"],
    loading: "lazy",
    decoding: "async",
  };

  return (
    <div className={styles.container}>
      <div className={styles["change-font-size"]}>
        {FONT_SIZE_OPTIONS.map((option) => (
          <div key={option} className={styles["input-wrapper"]}>
            <input
              type="radio"
              id={option}
              name={option}
              value={option}
              checked={fontSize === option}
              className={styles.input}
              onChange={handleFontSizeChange}
            />
            <label htmlFor={option} className={styles.label}>
              {option}
            </label>
          </div>
        ))}
      </div>

      <textarea
        className={styles.textarea}
        style={textAreaStyle}
        placeholder="Paeksperimentuok"
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
      />

      <h1 className={styles["anatomy-title"]}>Raidžių anatomija</h1>
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
