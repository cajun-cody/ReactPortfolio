
import React from 'react';
import Typed from 'react-typed';
import './home.css';

const Home = () => {
    return ( 
    <section class="home" id="home">
        <div class="home-content">
            {/* <h3>Hello, It's Me</h3> */}
            <h1>Cody Dugas</h1>
            <h4><i>The Backward Cajun</i></h4>
            <h3>And I'm a <span class="multiple-text">
            <Typed
                strings={['Creator', 'Full Stack Developer', 'Software Tester']}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1000}
                loop
                className="typed-text"
            /></span></h3>
            <div class="social-media">
                <a href="https://www.facebook.com/cody.dugas.7"><i class='bx bxl-facebook' ></i></a>
                <a href="https://www.linkedin.com/in/cody-dugas-390b4473/"><i class='bx bxl-linkedin'></i></a>
                <a href="https://github.com/cajun-cody"><i class='bx bxl-github'></i></a>
                <a href="https://www.reddit.com/user/cajun-cody"><i class='bx bxl-reddit'></i></a>
            </div>
            <a href="#contact" class="btn">Contact Me</a>
        </div>
    </section>
     );
}
 
export default Home;