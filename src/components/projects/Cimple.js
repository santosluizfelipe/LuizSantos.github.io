import React from "react";
import cimple from "../../technology-logos/project-images/cimple.png";
import jsLogo from "../../technology-logos/js-logo.png";
import reactLogo from "../../technology-logos/react-logo.png";
import cypressLogo from "../../technology-logos/cypress-logo.png";
import htmlLogo from "../../technology-logos/html-logo.png";
import cssLogo from "../../technology-logos/css-logo.png";

const ProjectDisplay = ({ title, link, description, companyLogo, tecLogos }) => {
  return (
    <div className="project-display">
      <div className="project-image">
        <img src={companyLogo} alt="pensano.dev website image" />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tech">
          {tecLogos.map((logo, index) => {
            <div className="logo" key={index}>
              <img src={logo.src} alt={`${logo.alt} Logo`} />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
