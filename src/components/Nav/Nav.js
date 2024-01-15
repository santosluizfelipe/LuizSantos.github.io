import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="flex-container">
        <div className="nav-left">
          <h1>Luiz Santos</h1>
        </div>
        <div className="nav-right">
          <div className="contact-container">
            <p>Say Hello</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
