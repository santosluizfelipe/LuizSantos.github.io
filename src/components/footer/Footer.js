import React from "react";
import "./Footer.css"; // Import your CSS file for styling if needed

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Luiz Santos </h3>
        <p>Full-stack Software Developer portfolio.</p>
        <div className="social-icons">
          {/* Add your social icons here */}
          {/* Example: <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
