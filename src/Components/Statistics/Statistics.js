import React from "react";
import style from "./Statistics.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <div>
    <div className={style.statistics}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
    </div>
    <div>
      <p>Total: {total}</p>
    </div>
    <div>
      <p>Positive Feedback: {positiveFeedbackPercentage} %</p>
    </div>
  </div>
);

export default Statistics;
