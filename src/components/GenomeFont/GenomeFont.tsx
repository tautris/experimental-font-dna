import React from "react";

import styles from "./GenomeFont.module.scss";

const FONT_SIZE_OPTIONS = ["24px", "48px", "65px", "105px"];

const GenomeFont: React.FC = () => {
  const [fontSize, setFontSize] = React.useState<string>("48px");

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles["change-font-size"]}>
        {FONT_SIZE_OPTIONS.map((option) => (
          <>
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
          </>
        ))}
      </div>

      <textarea
        className={styles.textarea}
        style={{ fontSize }}
        placeholder="Čia galima vesti tekstą"
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  );
};

export { GenomeFont };
