import React from "react";

const Navbar = ({ currentPage, onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section" onClick={() => onNavigate("home")}>
          <div className="logo">  <img
            className="logo-img"
            src="https://i.ibb.co/GvQ8N1jD/sxcsflogo.png"
            alt="Logo"
          /></div>
          <h1 className="site-title">&emsp;SXC Science Fest</h1>
        </div>
        <div className="nav-links">
          <div
            className={`nav-box ${currentPage === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
          >
            Home
          </div>
          <div
            className={`nav-box ${currentPage === "about" ? "active" : ""}`}
            onClick={() => onNavigate("about")}
          >
            About
          </div>
          <a href="/results">
            <div className="nav-box">Results</div>
          </a>

          <a href="#register">
            <div className="nav-box">Register</div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
