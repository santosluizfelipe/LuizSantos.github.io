import React, { useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import "./Projects.css";

import { personalProjects, professionalProjects } from "./data";

const Projects = () => {
  const [isProfessional, setIsprofessional] = useState(true);
  const [isPersonal, setIsPersonal] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectsPerPage = 1;

  const handleProfessional = () => {
    setIsprofessional(true);
    setIsPersonal(false);
    setCurrentProjectIndex(0);
  };

  const handlePersonal = () => {
    setIsPersonal(true);
    setIsprofessional(false);
    setCurrentProjectIndex(0);
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex + 1 < projectsToDisplay.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  const projectsToDisplay = isProfessional
    ? professionalProjects
    : personalProjects;

  return (
    <div className="project-container">
      <div>
        <h3 className="header-container">My Projects</h3>
      </div>
      <div className="toogle-container">
        <div>
          <button
            className="professional-button"
            onClick={handleProfessional}
            style={
              isProfessional
                ? { backgroundColor: "#FFA500" }
                : { backgroundColor: "#b2b4b8", color: "#F5F7F8" }
            }
          >
            Professional
          </button>
        </div>
        <button
          className="personal-button"
          onClick={handlePersonal}
          style={
            isPersonal
              ? { backgroundColor: "#FFA500" }
              : { backgroundColor: "#b2b4b8", color: "#F5F7F8" }
          }
        >
          personal
        </button>
      </div>
      {projectsToDisplay.length > 0 && (
        <ProjectDisplay
          name={projectsToDisplay[currentProjectIndex].name}
          link={projectsToDisplay[currentProjectIndex].link}
          description={projectsToDisplay[currentProjectIndex].description}
          companyLogo={projectsToDisplay[currentProjectIndex].image}
          techLogos={projectsToDisplay[currentProjectIndex].techLogos}
        />
      )}
      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentProjectIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentProjectIndex === projectsToDisplay.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
