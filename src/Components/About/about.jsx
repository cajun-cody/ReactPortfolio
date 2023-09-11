import React, {useState} from "react";
import './about.css';
import myImage from '../../Assets/profile.png';
import ScrollReveal from 'scrollreveal';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleContent = () => {
        setShowMore(!showMore);
    }

    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    return (
        <section className="about" id="about">
            <div className="about-img">
                {/* <img src="./src/Assets/MyPro.png" alt="my-img" /> */}
                <img src={myImage} alt="my-img" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Full Stack Developer</h3>
                <p>
                I have been in the medial world for close to 20 years. Beginning my journey as an Paramedic, I quickly learned the value of technology used in patient care. This was the spark that dwelled within me which would later become a passion. 
                <br></br>
                <br></br>
                Later in my professional career I was drawn to companies that were on the cutting edge of technology in their respected fields. I  began to involve myself more on the technological side of the medical world to better understand the tools used by medical professionals. 
                <br></br>
                <br></br>
                {showMore ? (
                    <>
                My path began to take me toward a supporting role in patient care. While working I had the opportunity to see behind the curtain as to how these tools worked. My interest peaked while beta testing software on how it could be used in field applications. I wondered what other ways could I discover to use technology. 
                <br></br>
                <br></br>
                I started learning SQL to better serve needs that were associated with large amounts of data. Later I jumped into Python to lay my foundation in programming.  The opportunity to take my learning to the next level soon followed. I took the plunge into Full Stack Development and have not looked back. I am motivated each morning to see what new ideas and capabilities are out there in the rapidly changing tech world. This drive pushes me well into the night, often while wondering what new possibilities will there be once I wake up. 
                <br></br>
                <br></br>
                I was then given the great opportunity to pass on what I had learned to new developers as a full time Instructor with the camp I graduated.  This path offered tremendous learning opportunities. Before long I was checking off new boxes for new technologies all while guiding others to my same goal.  
                <br></br>
                <br></br>
                Current Languages and Technologies include: C#, ASP.NET, MySQL, Python, JavaScript, Django REST, React, GIT, along with multiple libraries. 
                <br></br>
                <br></br>
                Far and away the best prize that life offers is the chance to work hard at work worth doing. – Theodore Roosevelt
                 </>
                ) : (  
                    " [Show more...]"
                )}
                </p>
                <a href="#about" className="btn" onClick={toggleContent}>
                    {showMore ? "Read Less" : "Read More"}
                </a>
            </div>
        </section>
    );
}

export default About;
