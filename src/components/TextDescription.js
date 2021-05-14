import React from "react";
import "../styles/styles.css";

function TextDescription({ header, subHeader, points }) {
  return (
    <div>
      <p className="header">{header}</p>
      <p className="sub-header">{subHeader}</p>
    </div>
  );
}

export default TextDescription;
