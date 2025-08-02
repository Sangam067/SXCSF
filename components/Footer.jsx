import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="https://www.instagram.com/science.fest/">Instagram</a></li>
              
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>St.Xavier's College</li>
              <li>Maitighar, Kathmandu</li>
             
              
            </ul>
          </div>
          <div className="footer-section">
            <h3>Event Info</h3>
            <ul>
              <li>Registration: Open</li>
              <li>Venue: SXC College Maitighar</li>
             
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SXC Science Fest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;