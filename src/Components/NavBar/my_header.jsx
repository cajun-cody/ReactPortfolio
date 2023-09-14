import React, {useState} from "react";
import './my_header.css';


const MyHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
      };

    return ( 
    <header class="header">
        <a href="#portfolio" class="logo">Portfolio</a>

        <i className={`bx bx-menu`} id="menu-icon" onClick={toggleMenu}></i>
        <nav class="navbar">
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <i className={`bx bxs-x-square`} id="close-icon" onClick={closeMenu}></i>
            <a href="#home" className={` ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>Home</a>
            <a href="#about" className={` ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>About</a>
            <a href="#services" className={` ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>Services</a>
            <a href="#portfolio" className={` ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>Portfolio</a>
            <a href="#contact" className={` ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>Contact</a>
        </div>
        </nav>
    </header>
     );
}

export default MyHeader;