import React, { useRef } from "react";
import "./Carousel.css";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
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
import { useState, useEffect } from "react";

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [clickLimit, setClickLimit] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef(null);
  const touchStartX = useRef(0);



  useEffect(() => {

    const updateClickLimit = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1750) {
        setClickLimit(3);
        setIsMobile(false)
      } else if (screenWidth >= 949) {
        setClickLimit(4);
        setIsMobile(false)
      } else {
        setClickLimit(9);
        setIsMobile(true);
      }
    };

    // Initial setup
    updateClickLimit();

    // Listen for window resize events
    window.addEventListener("resize", updateClickLimit);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateClickLimit);
  }, []);

  const nextSlide = () => {
    if (clickCount < clickLimit) {
      setCurrentSlide((prev) => {
        const next = (prev + 4) % logos.length;
        setClickCount((count) => count + 1);
        return next === logos.indexOf(html) ? 0 : next;
      });
    } else {
      setClickCount(0);
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 4 + logos.length) % logos.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // const handleTouchMove = (e) => {
  //   const touchEndX = e.touches[0].clientX;
  //   const deltaX = touchStartX.current - touchEndX;


  //   if (deltaX > 50) {
  //     nextSlide();
  //   } else if (deltaX < -50) {
  //     prevSlide();
  //   }
  // };

  const handleTouchMove = (e) => {
    if (isMobile) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;

      // Adjust the sensitivity as needed
      if (Math.abs(deltaX) > 10) {
        carouselRef.current.scrollLeft += deltaX;
      }
    } else {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;

      if (deltaX > 50) {
        nextSlide();
      } else if (deltaX < -50) {
        prevSlide();
      }
    }
  };

  return (
    <>
    {!isMobile && (

    
    <div className="tech-container">
      <div className="content-container">
        <h3>Technologies that I use:</h3>
      </div>

      <div
        className="carousel-container"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        >
        <div
          className="carousel"
          style={{ transform: `translateX(${-currentSlide * 25}%)` }}
        >
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
        {!isMobile && (
          <>
            <button className="prev-button" onClick={prevSlide}>
          {<ArrowBack />}
        </button>
        <button className="next-button" onClick={nextSlide}>
          {<ArrowForward />}
        </button>
          </>
        )}
        
      </div>
    </div>
    )}

    {isMobile && (
      <div className="tech-container">
      <div className="content-container">
        <h3>Technologies that I use:</h3>
      </div>

      <div
        className={`carousel-container ${isMobile ? 'mobile-scroll' : ''}`}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="carousel">
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
      </div>
    </div>
    )}
    </>
  );
};

export default Carousel;
