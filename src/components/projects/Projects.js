import React, { useState } from "react";

import './Projects.css'

const Projects = () => {
  const [isProfessional, setIsprofessional] = useState(null)
  const [isPersonal, setIsPersonal] = useState(null)

  const handleProfessional = () => {
    return setIsprofessional(true) + setIsPersonal(false) 
  }

  const handlePersonal = () => {
    return  setIsPersonal(true) + setIsprofessional(false) 
  }


  return(
    <>
    <div className="project-container">
      <div>
        <h3>My Projects</h3>
      </div>
      <div className="toogle-container">
        <div>
          <button className="professional-button" onClick={handleProfessional}
            style={isProfessional?{backgroundColor: '#F4CE14'} : {backgroundColor: '#b2b4b8', color: "#F5F7F8"}}>
            Professional
          </button>
        </div>
        <button className="personal-button"  onClick={handlePersonal}
        style={isPersonal?{backgroundColor: '#F4CE14'} : {backgroundColor: '#b2b4b8', color: "#F5F7F8"}}>
          personal
        </button>
      </div>

      {isProfessional && (
      <p>hello professional</p>
    )}

    {isPersonal && (
      <p>hello personal</p>
    )}
    </div>

    
    </>
  )
}

export default Projects;