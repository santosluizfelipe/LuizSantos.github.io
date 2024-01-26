import React from 'react';
import './Carousel.css'

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
import { useState } from 'react';


const Carousel = () => {
  const logos = [
    javascriptLogo,
    typescriptLogo,
    react,
    nodeJs,
    postgres,
    nextjs,
    mongoDb,
    cypress,
    ruby,
    elixir,
    pheonix,
    express,
    expo,
    graphQl,
    html,
    css,
    styledComponents,
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };


    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 4) % logos.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 4 + logos.length) % logos.length);
    };
  
    return (
      <div className="tech-container">
          <div className="content-container">
              <h3>Technologies that I use:</h3>
          </div>
          <div className="carousel-container">
              <div className="carousel" style={{ transform: `translateX(${-currentSlide * 25}%)` }}>
                  {logos.map((logo, index) => (
                      <div
                          key={index}
                          className={`img-container ${
                              index === currentSlide ? "active" : ""
                          }`}
                      >
                          <img src={logo} alt={`Logo ${index + 1}`} />
                      </div>
                  ))}
              </div>
              <button className="prev-button" onClick={prevSlide}>
                  {"<"}
              </button>
              <button className="next-button" onClick={nextSlide}>
                  {">"}
              </button>
          </div>
      </div>
  );
};

export default Carousel;
