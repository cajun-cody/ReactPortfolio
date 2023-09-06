import React from "react";
import './SkillsAndTechnologies.css';

const SkillsAndTechnologies = () => {
    return ( 
        <section class="services" id="services">
        <h2 class="heading">Skills <span>& Technologies</span></h2>
        <div class="services-container">
            <div class="services-box">
                <i class='bx bx-code-alt' ></i>
                <h3>Backend Development</h3>
                <p>Skills and Technologies</p>
                <ul>
                    <li>C#</li>
                    <li>Python</li>
                    <li>ASP.NET MVC Core</li>
                    <li>ASP.NET Web API</li>
                    <li>LINQ</li>
                    <li>Django Rest API</li>
                </ul>
            </div>
            <div class="services-box">
                <i class='bx bx-search-alt'></i>
                <h3>Frontend Development</h3>
                <p>Skills and Technologies</p>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div class="services-box">
                <i class='bx bx-purchase-tag-alt' ></i>
                <h3>Support Technologies</h3>
                <p>Skills and Technologies</p>
                <ul>
                    <li>Git/Github</li>
                    <li>Visual Studio</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>MySQL</li>
                    <li>Figma</li>
                </ul>
            </div>

        </div>
    </section>
     );
}
 
export default SkillsAndTechnologies;