import React from "react";
import style from "../Feedback/Feedback.module.css";

const SectionTitle = ({ title, children }) => {
  return (
    <>
      <p className={style.title}>{title}</p>
      {children}
    </>
  );
};

export default SectionTitle;
