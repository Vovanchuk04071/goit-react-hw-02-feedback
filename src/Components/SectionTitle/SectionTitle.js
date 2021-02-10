import React from "react";
import style from "./SectionTitle.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <>
      <p className={style.title}>{title}</p>
      {children}
    </>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
};

export default Section;
