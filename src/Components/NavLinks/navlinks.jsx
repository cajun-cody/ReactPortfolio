// src/components/NavLinks.js
import React, { useState, useEffect } from 'react';

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Add a scroll event listener to handle active links based on the currently viewed section
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveLink = '';

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          currentActiveLink = id;
        }
      });

      setActiveLink(currentActiveLink);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a>
      <a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a>
      <a href="#services" className={activeLink === 'services' ? 'active' : ''}>Services</a>
      <a href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</a>
      <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
    </nav>
  );
}

export default NavLinks;
