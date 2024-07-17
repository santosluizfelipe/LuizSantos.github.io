import pensano from "../../technology-logos/project-images/pensano.png";
import cimple from "../../technology-logos/project-images/cimple.png";
import aura from "../../technology-logos/project-images/aura.png";
import tmdb from "../../technology-logos/project-images/tmdb.png";

import jsLogo from "../../technology-logos/js-logo.png";
import react from "../../technology-logos/react-logo.png";
import cypress from "../../technology-logos/cypress-logo.png";
import html from "../../technology-logos/html-logo.png";
import css from "../../technology-logos/css-logo.png";
import styledComponents from "../../technology-logos/styled-components-logo.png";
import elixir from "../../technology-logos/elixir-logo.png";
import pheonix from "../../technology-logos/pheonix-logo.png";
import next from "../../technology-logos/nextjs-logo.png";
import graphQl from "../../technology-logos/graphQl-logo.png";
import postgres from "../../technology-logos/postgresql-logo.png";
import ts from "../../technology-logos/typescript-logo.png";
import node from "../../technology-logos/nodejs-logo.png";
import mongoDb from "../../technology-logos/mongo-db-logo.png";





export const personalProjects = [
  {
    name: "Pensano",
    image: pensano,
    link: "https://pensano.dev/",
    description: `As a co-founder of Pensano, I played a pivotal role in the development of our platform, employing my expertise in React, JavaScript, HTML, CSS, and Cypress. At Pensano, our mission is encapsulated in the Italian word "Pensano," meaning "they think." As problem solvers, we think outside the box and approach challenges with intentionality.`,
    technologies: ["React", "JavaScript", "HTML", "CSS", "Cypress"],
    techLogos: [
      { src: jsLogo, alt: "JavaScript" },
      { src: react, alt: "React" },
      { src: cypress, alt: "Cypress" },
      { src: html, alt: "HTML" },
      { src: css, alt: "CSS" },
    ],
  },
  {
    name: "The Movie Database",
    image: tmdb,
    link: "https://github.com/santosluizfelipe/movies",
    description: `In this project, I integrated The Movie Database (TMDb) API using React and TypeScript, enabling users to search for movies and view their ratings and overviews. I utilized React hooks like useContext and useEffect for state management and implemented a custom useDebounce hook to optimize API requests. The application loads six movies at a time and dynamically fetches more as the user scrolls, ensuring better performance and a seamless user experience.`,
    technologies: ["React", "TypeScript", "Node.js"],
    techLogos: [
      { src: ts, alt: "TypeScript" },
      { src: react, alt: "React" },
      { src: styledComponents, alt: "styled-coponents" },
      { src: html, alt: "html" },
    ],
  },
  {
    name: "Aura",
    image: aura,
    link: "https://github.com/santosluizfelipe/movies",
    description: `Supports social inclusion by helping users find venues tailored to their needs, focusing on physical accessibility, neurological considerations, and creating the right ambience. 🏆 This award-winning innovation was developed at the Athena Hackathon 2023, earning the Cisco Award for empowering accessibility and inclusion through innovation, as well as the Nationwide Award for highest potential impact.`,
    technologies: ["React", "TypeScript", "Node.js"],
    techLogos: [
      { src: jsLogo, alt: "TypeScript" },
      { src: react, alt: "React" },
      { src: node, alt: "Node.js" },
      { src: mongoDb, alt: "mongoDB" },
      { src: css, alt: "css" },
      { src: html, alt: "html" },
    ],
  },
];

export const professionalProjects = [
  {
    name: "Cimple",
    image: cimple,
    link: "https://pensano.dev/",
    description: `I previously worked as a Full-stack developer at Cimple, where we used TypeScript, Next.js, Styled Components, Cypress, Elixir, Phoenix, GraphQL, PostgreSQL, and AWS. Cimple understands the complexities in procurement and has created a B2B procurement platform that aims to make it more accessible and intuitive for everyone.`,
    techLogos: [
      { src: ts, alt: "Typescript" },
      { src: react, alt: "React" },
      { src: cypress, alt: "Cypress" },
      { src: styledComponents, alt: "styled components" },
      { src: graphQl, alt: "graphQl" },
      { src: postgres, alt: "postgres" },
      { src: elixir, alt: "elixir" },
      { src: pheonix, alt: "pheonix" },
      { src: next, alt: "nextJs" },
    ],
  },
];
