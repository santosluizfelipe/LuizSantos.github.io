import React from "react";
import "./Technologies.css";
import javascriptLogo from "../../logos/javascript-logo.png";
import typescriptLogo from "../../logos/typescript-logo.png";

const Technologies = () => {
  return (
    <div className="tech-container">
      <div className="content-container">
        <h3>Tech Stack</h3>
      </div>
      <div className="img-container">
        <img src={javascriptLogo} alt="Javascript Logo" />
      </div>
      <div className="img-container">
        <img src={typescriptLogo} alt="typescript Logo" />
      </div>
    </div>
  );
};

export default Technologies;
