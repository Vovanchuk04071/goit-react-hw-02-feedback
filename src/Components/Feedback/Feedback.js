import React from "react";
import style from "./Feedback.module.css";

const feedback = ({ options, onSaveFeedback }) => {
  return (
    <div className={style.button}>
      {options.map((name) => (
        <button
          className={style.button__title}
          key={name}
          type="button"
          onClick={onSaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default feedback;
