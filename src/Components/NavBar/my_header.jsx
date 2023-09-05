import React, {useState} from "react";
import './my_header.css';


const MyHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return ( 
    <header class="header">
        <a href="#portfolio" class="logo">Portfolio</a>
        
        {/* <i class='bx bx-menu' id="menu-icon"></i>  */}
        <i className={`bx bx-menu`} id="menu-icon" onClick={toggleMenu}></i>
        <nav class="navbar">
            <a href="#home" className={` ${isMenuOpen ? 'active' : ''}`}>Home</a>
            <a href="#about" className={` ${isMenuOpen ? 'active' : ''}`}>About</a>
            <a href="#services" className={` ${isMenuOpen ? 'active' : ''}`}>Services</a>
            <a href="#portfolio" className={` ${isMenuOpen ? 'active' : ''}`}>Portfolio</a>
            <a href="#contact" className={` ${isMenuOpen ? 'active' : ''}`}>Contact</a>
        </nav>
    </header>
     );
}
 
export default MyHeader;