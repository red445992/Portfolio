import React from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
  return (
    <div
      className={classNames(`sub-container-${menuItem}`, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
};

export default AboutSubheading;
