import React from "react";

import styles from "./GenomeFont.module.scss";

const FONT_SIZE_OPTIONS = ["24 px", "48 px", "65 px", "105 px"];

const GenomeFont: React.FC = () => {
  const [fontSize, setFontSize] = React.useState<string>("48 px");

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.value", event.target.value);

    setFontSize(event.target.value);
  };

  const textAreaStyle = {
    fontSize: fontSize.replace(" ", ""),
  };

  return (
    <div className={styles.container}>
      <div className={styles["change-font-size"]}>
        {FONT_SIZE_OPTIONS.map((option) => (
          <React.Fragment key={option}>
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
          </React.Fragment>
        ))}
      </div>

      <textarea
        className={styles.textarea}
        style={textAreaStyle}
        placeholder="Čia galima vesti tekstą"
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  );
};

export { GenomeFont };
