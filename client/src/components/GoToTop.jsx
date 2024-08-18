import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        className='rounded-full bg-[var(--clr-orange)] text-white fixed bottom-5 right-5 p-3 z-50 animate-bounce'
        onClick={() => window.scrollTo(0, 0)}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default GoToTop;
