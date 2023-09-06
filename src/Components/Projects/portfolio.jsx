import React from "react";
import './portfolio.css';

import project1 from '../../Assets/project1.jpg';
import MusicLibrary from '../../Assets/MusicLibrary.png';


const Portfolio = () => {
    return ( 
    <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Projects</span></h2>
        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src={MusicLibrary} alt=""/>
                <h4 class="portfolio-title">Gamer Music Library</h4>
                <div class="portfolio-layer">                
                    <p>A music library for video game soundtracks. Ability to add and delete songs as well as search for other songs in the database.</p>
                    <p>Tech Stack: Python/Django, MySQL, JavaScript/React</p>
                    <a href="https://github.com/cajun-cody/Music_Library_Frontend"><i class='bx bxl-github'></i></a>
                    <a href="https://github.com/cajun-cody/Music_Library_Backend"><i class='bx bxl-github'></i></a>
                </div>
            </div>
            <div class="portfolio-box">
                <img src={project1} alt=""/>
                <h4 class="portfolio-title">Capstone</h4>
                <div class="portfolio-layer">                
                    <p>A music library for video game soundtracks. Ability to add and delete songs as well as search for other songs in the database.</p>
                    <p>Tech Stack: Python/Django, MySQL, JavaScript/React</p>
                    <a href="https://github.com/cajun-cody/Music_Library_Frontend"><i class='bx bxl-github'></i></a>
                    <a href="https://github.com/cajun-cody/Music_Library_Backend"><i class='bx bxl-github'></i></a>
                </div>
            </div>
            <div class="portfolio-box">
                <img src={project1} alt=""/>
                <h4 class="portfolio-title">RouxTube Full Stack-Python</h4>
                <div class="portfolio-layer">
                    <p>Video streaming site using youtube api. Upon login the site displays a set of cajun cooking videos. There is also the ability to search for any type of video as well as leave comments and reply to ther comments. </p>
                    <a href="https://github.com/cajun-cody/YouTube_Clone"><i class='bx bxl-github'></i></a>
                </div>
            </div>
            <div class="portfolio-box">
                <img src={project1} alt=""/>
                <h4 class="portfolio-title">Book Nook Full Stack-C#</h4>
                <div class="portfolio-layer">              
                    <p>Video streaming site using youtube api. Upon login the site displays a set of cajun cooking videos. There is also the ability to search for any type of video as well as leave comments. </p>
                    <a className="portfolio-link" href="https://github.com/cajun-cody/BookNook_Frontend/tree/main/Frontend"><i class='bx bxl-github'></i></a>
                    <a className="portfolio-link" href="https://github.com/cajun-cody/BookNook_Backend"><i class='bx bxl-github'></i></a>
                </div>
            </div>
            <div class="portfolio-box">
                <img src={project1} alt=""/>
                <h4 class="portfolio-title">Lemonade Stand- C#</h4>
                <div class="portfolio-layer">
                    <p>Backend terminal game in C#. This game allows a user to shop for products to make lemonage and sell it to customers. The experience even takes into account weather.</p>
                    <p></p>
                    <a href="https://github.com/cajun-cody/Lemonade_Stand"><i class='bx bxl-github'></i></a>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Portfolio;