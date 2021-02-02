import React from "react";
import style from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ options, onSaveFeedback }) => {
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

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onSaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
