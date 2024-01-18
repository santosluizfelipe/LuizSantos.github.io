import React from "react";
import "./Technologies.css";
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



const Technologies = () => {
  return (
    <div className="tech-container">

      <div className="content-container">
        <h3>Technologies that I use:</h3>
      </div>
    <div className="row-container">

      <div className="img-container">
        <img src={javascriptLogo} alt="Javascript Logo" />
      </div>

      <div className="img-container">
        <img src={typescriptLogo} alt="typescript Logo" />
      </div>

      <div className="img-container">
        <img src={react} alt="react Logo" />
      </div>

      <div className="img-container">
        <img src={nodeJs} alt="nodejs Logo" />
      </div>

      <div className="img-container">
        <img src={nextjs} alt="nextjs Logo" />
      </div>

      <div className="img-container">
        <img src={postgres} alt="nextjs Logo" />
      </div>

      <div className="img-container">
        <img src={mongoDb} alt="mongoDB Logo" />
      </div>

      <div className="img-container">
        <img src={cypress} alt="cypress Logo" />
      </div>

      <div className="img-container">
        <img src={ruby} alt="ruby Logo" />
      </div>

      <div className="img-container">
        <img src={elixir} alt="elixir Logo" />
      </div>

      <div className="img-container">
        <img src={pheonix} alt="pheonix Logo" />
      </div>

      <div className="img-container">
        <img src={express} alt="pheonix Logo" />
      </div>

      <div className="img-container">
        <img src={expo} alt="pheonix Logo" />
      </div>

      <div className="img-container">
        <img src={graphQl} alt="graphQL Logo" />
      </div>

      <div className="img-container">
        <img src={html} alt="html Logo" />
      </div>

      <div className="img-container">
        <img src={css} alt="css Logo" />
      </div>

      <div className="img-container">
        <img src={styledComponents} alt="styledComponents Logo" />
      </div>

      </div>

    </div>
  );
};

export default Technologies;
