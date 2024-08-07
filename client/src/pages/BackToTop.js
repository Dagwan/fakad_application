// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import '../components/BackToTop.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
