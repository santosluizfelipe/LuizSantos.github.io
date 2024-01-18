import { GitHub, LinkedIn, FileDownload } from "@mui/icons-material";
import React from "react";
import "./Body.css";


const Body = () => {
  return (
    <div >
      <div className="body-container">
        <div className="body-header">
          <h1>Hi, I'm Luiz</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="body-content">
          <p>
            I'm a London-based Brazilian full-stack software engineer, currently
            working at <a  href="https://cimple.uk/"
              target="_blank"
              rel="noopener noreferrer">Cimple</a>, a B2B e-procurement platform. At Cimple, I
            collaborate in a cross-functional team of engineers, product
            managers and designers, resulting in an 8% monthly increase in users
            on average and onboarding over 900 clients in the past year alone.
            Although I primarily use React, TypeScript, Next.js, GraphQL and
            Cypress in my current role, I have worked with various languages and
            frameworks during my career so far.
          </p>
          <div className="contact-icons">
            <a
              href="https://github.com/santosluizfelipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="github-icon">
                <GitHub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/luizfelipessantos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="linkedin-icon">
                <LinkedIn fontSize="large" />
              </div>
            </a>
            <div className="download-container">
             <FileDownload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
