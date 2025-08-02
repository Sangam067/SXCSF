import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://i.ibb.co/nygs02n/41.jpg',
      title: 'Hands-on Experiments',
      description: 'Students engage in practical experiments, applying theoretical knowledge to real-world scenarios.'
    },
    {
      image: 'https://i.ibb.co/Vc91zk73/tgsp.jpg',
      title: 'Team Collaboration',
      description: 'Participants work together to solve complex scientific challenges, fostering teamwork and communication skills.'
    },
    {
      image: 'https://i.ibb.co/vx666C2T/30.jpg',
      title: 'Fun Stalls',
      description: 'Students get to experience different stalls and activities for entertainment.'
    },
    {
      image: 'https://i.ibb.co/rGymvsfx/55.jpg',
      title: 'Recognition & Awards',
      description: 'Outstanding participants receive recognition for their achievements and contributions to science.'
    },
    {
      image: 'https://i.ibb.co/5WTP53Tc/48.jpg',
      title: 'Innovation Showcase',
      description: 'Students display their creative projects and innovative solutions to scientific problems.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-section">
      <h2 className="section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>Event Highlights</h2>
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay">
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="slider-nav prev" onClick={prevSlide}>&#10094;</button>
        <button className="slider-nav next" onClick={nextSlide}>&#10095;</button>
      </div>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;