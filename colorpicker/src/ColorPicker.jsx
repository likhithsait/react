import React, { useState } from "react";
import styles from "./cp.module.css";

export const ColorPicker = () => {
  const [color, setColor] = useState("#000000ff");

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className={styles.colorPickerContainer}>
        <h1>Color Picker</h1>

        <div
          className={styles.colorDisplay}
          style={{ backgroundColor: color }}
        >
          
        </div>

        <label>Select a color</label>
        <input type="color" value={color} onChange={handleColor} />
      </div>
    </>
  );
};
