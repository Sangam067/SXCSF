import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ currentPage, onNavigate }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRegisterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRegisterClick = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);
    setIsRegisterOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section" onClick={() => onNavigate("home")}>
          <div className="logo">  <img
            className="logo-img"
            src="https://i.ibb.co/FbBrgfGg/sxcsflogo.webp"
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
          
          <div className="register-dropdown-container" ref={dropdownRef}>
            <div 
              className="nav-box register-btn"
              onClick={handleRegisterClick}
            >
              Register
              <svg 
                className={`dropdown-arrow ${isRegisterOpen ? 'rotate' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            {isRegisterOpen && (
              <div className="register-dropdown">
                <div 
                  className="dropdown-option"
                  onClick={() => handleOptionClick('in valley')}
                >
                  In Valley
                </div>
                <div 
                  className="dropdown-option"
                  onClick={() => handleOptionClick('out valley')}
                >
                  Out Valley
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
