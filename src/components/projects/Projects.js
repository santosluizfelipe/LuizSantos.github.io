import React, { useState } from "react";

import "./Projects.css";
import cimple from "../../technology-logos/project-images/cimple.png";
import pensano from "../../technology-logos/project-images/pensano.png";

import javascriptLogo from "../../technology-logos/js-logo.png";
import typescriptLogo from "../../technology-logos/typescript-logo.png";
import react from "../../technology-logos/react-logo.png";
import nodeJs from "../../technology-logos/nodejs-logo.png";
import postgres from "../../technology-logos/postgresql-logo.png";
import nextjs from "../../technology-logos/nextjs-logo.png";
import mongoDb from "../../technology-logos/mongo-db-logo.png";
import cypress from "../../technology-logos/cypress-logo.png";
import ruby from "../../technology-logos/ruby-logo.png";
import elixir from "../../technology-logos/elixir-logo.png";
import pheonix from "../../technology-logos/pheonix-logo.png";
import express from "../../technology-logos/express-logo.png";
import expo from "../../technology-logos/expo-logo.png";
import graphQl from "../../technology-logos/graphQl-logo.png";
import html from "../../technology-logos/html-logo.png";
import css from "../../technology-logos/css-logo.png";
import styledComponents from "../../technology-logos/styled-components-logo.png";

const Projects = () => {
  const [isProfessional, setIsprofessional] = useState(null);
  const [isPersonal, setIsPersonal] = useState(null);

  const handleProfessional = () => {
    return setIsprofessional(true) + setIsPersonal(false);
  };

  const handlePersonal = () => {
    return setIsPersonal(true) + setIsprofessional(false);
  };

  return (
    <>
      <div className="project-container">
        <div>
          <h3>My Projects</h3>
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

        {isProfessional && (
          <>
            <div className="project-image">
              <img src={cimple} alt="cimple.uk website image" />
            </div>

            <div className="project-content">
              <h3>Cimple</h3>
              <p>
                I'm currently a Full-stack developer at{" "}
                <a
                  className="cimple"
                  href="https://cimple.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cimple
                </a>{" "}
                and we use TypeScript, Next.js, Styled Components, Cypress,
                Elixir, Phoenix, GraphQL, PostgreSQL and AWS. Cimple understands
                the complexities in procurement and has created a B2B
                procurement platform that aims to make it more accessible and
                intuitive for everyone.
              </p>
            </div>
            <div className="project-tech">
              <div className="logo">
                <img src={typescriptLogo} alt="Typescript Logo" />
              </div>
              <div className="logo">
                <img src={react} alt="React Logo" />
              </div>
              <div className="logo">
                <img src={nextjs} alt="nextJs Logo" />
              </div>
              <div className="logo">
                <img src={elixir} alt="Elixir Logo" />
              </div>
              <div className="logo">
                <img src={pheonix} alt="pheonix framework Logo" />
              </div>
              <div className="logo">
                <img src={graphQl} alt="graphQl Logo" />
              </div>
              <div className="logo">
                <img src={postgres} alt="postgres Logo" />
              </div>
              <div className="logo">
                <img src={styledComponents} alt="styled components Logo" />
              </div>
              <div className="logo">
                <img src={cypress} alt="cypress Logo" />
              </div>
            </div>
          </>
        )}

        {isPersonal && (
          <>
            <div className="project-image">
              <img src={pensano} alt="pensano.dev website image" />
            </div>

            <div className="project-content">
              <h3>Pensano</h3>
              <p>
                As a co-founder of{" "}
                <a
                  className="cimple"
                  href="https://pensano.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pensano
                </a>{" "}
                , I played a pivotal role in the development of our platform,
                employing my expertise in React, JavaScript, HTML, CSS, and
                Cypress. At Pensano, our mission is encapsulated in the Italian
                word "Pensano," meaning "they think." As problem solvers, we
                think outside the box and approach challenges with
                intentionality.
              </p>
            </div>
            <div className="project-tech">
              <div className="logo">
                <img src={javascriptLogo} alt="Javascript Logo" />
              </div>
              <div className="logo">
                <img src={react} alt="React Logo" />
              </div>
              <div className="logo">
                <img src={cypress} alt="Cypress Logo" />
              </div>
              <div className="logo">
                <img src={html} alt="Html Logo" />
              </div>
              <div className="logo">
                <img src={css} alt="Css Logo" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
