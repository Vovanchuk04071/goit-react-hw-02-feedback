import React from "react";
import style from "./Feedback.module.css";
import PropTypes from "prop-types";

const FeedbackActions = ({ options, onSaveFeedback }) => {
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

FeedbackActions.propTypes = {
  options: PropTypes.array.isRequired,
  onSaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackActions;
