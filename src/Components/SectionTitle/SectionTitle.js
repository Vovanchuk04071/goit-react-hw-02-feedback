import React from "react";
import style from "./SectionTitle.module.css";
import PropTypes from "prop-types";

const SectionTitle = ({ title, children }) => {
  return (
    <>
      <p className={style.title}>{title}</p>
      {children}
    </>
  );
};

SectionTitle.propType = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
