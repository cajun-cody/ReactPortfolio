import React,{useState, useEffect}  from "react";
import './SkillsAndTechnologies.css';


const SkillsAndTechnologies = () => {

    const [animateLifeGoal, setAnimateLifeGoal] = useState(false);

    useEffect(() => {
        // Trigger the animation after a delay or when a certain event occurs
        const timer = setTimeout(() => {
            setAnimateLifeGoal(true);
        }, 1000); // Delay for 1 second (adjust as needed)

        // Clean up the timer to prevent memory leaks
        return () => clearTimeout(timer);
    }, []);


    return ( 
        <section class="services" id="services">
        <h2 class="heading">Skills <span>& Technologies</span></h2>
        <div class="services-container">
            <div class="services-box">
                <i class='bx bx-code-alt' ></i>
                <h3>Backend Development</h3>
                <ul>
                    <li>C#</li>
                    <li>Python</li>
                    <li>ASP.NET MVC Core</li>
                    <li>ASP.NET Web API</li>
                    <li>LINQ</li>
                    <li>Django</li>
                    <li>Django Rest API</li>
                </ul>
            </div>
            <div class="services-box">
                <i class='bx bxl-react'></i>
                <h3>Frontend Development</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>JSON</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div class="services-box">
                <i class='bx bx-purchase-tag-alt' ></i>
                <h3>Support Technologies</h3>
                <ul>
                    <li>Git/Github</li>
                    <li>Visual Studio</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>MySQL</li>
                    <li>SQL</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>
        <div class={`life-goal ${animateLifeGoal ? 'animate' : ''}`}>Life Goals-- Learn Something New Everyday!!</div>
    </section>
     );
}
 
export default SkillsAndTechnologies;