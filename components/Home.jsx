"use client"
import React, { useState } from "react";
import { X } from 'lucide-react';
import HomeImageSlider from "./HomeImageSlider";



const Home = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="hero">
       
      
        <HomeImageSlider>
          <div className="hero-container">
            <h1 className="hero-title">Welcome to SXCSF</h1>
            <p className="hero-subtitle">
              Dive into the world of <span className="highlight">innovation</span>,
              discovery, and student-powered creativity.
            </p>

            <div className="button-group">
              <button className="btn-primary" onClick={handleRegister}>
                Register Your Team
              </button>

              <a href="/results">
                <button className="btn-secondary">Event Day Results</button>
              </a>
            </div>
          </div>
        </HomeImageSlider>
      
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          {/* Backdrop */}
          <div 
            className="modal-backdrop"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="modal-container">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="modal-close-button"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Two Buttons */}
            <div className="modal-content">
              <button className="modal-button">
                In Valley
              </button>
              <button className="modal-button">
                Out Valley
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
