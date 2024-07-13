import React from 'react';

const ProjectDisplay = ({ name, companyLogo, link, description, technologies, techLogos }) => {
  return (
    <div className="project-display">
      <div className="project-image">
        <img src={companyLogo} alt={`${name} website image`} />
      </div>

      <div className="project-content">
        <h3>{name}</h3>
        <p>
          {description}
          <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </p>

        <div className="project-tech">
          {techLogos.map((logo, index) => (
            <div className="logo" key={index}>
              <img src={logo.src} alt={`${logo.alt} Logo`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
