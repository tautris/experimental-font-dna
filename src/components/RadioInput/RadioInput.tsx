import React from "react";

import styles from "./RadioInput.module.scss";

interface Props {
  value: string;
  label: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}

const RadioInput: React.FC<Props> = ({ value, label, isChecked, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label key={value} className={styles["radio-wrapper"]}>
      {label}
      <input
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={isChecked}
        className={styles.input}
        onChange={handleInputChange}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export { RadioInput };
