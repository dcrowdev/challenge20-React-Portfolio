import React from "react";
import './about.css'
import headshot from '../../images/personal.jpg'

function About() {
    return (
        <div className="about-container">
            <div className="left-side">
            <h1 style={{fontSize: '60px'}}>About Me!</h1>
            <p className="mt-5" style={{width: '80%', fontSize: '20px'}}>Hi there! First, I just want to say thank you for taking the time to look at my portfolio. My name is Dylan and I am a Full Stack Web Developer, primarily competent in the MERN stack technologies. I've always been interested in learning the infrastructure that goes into all of the programs of the modern technology we use today. I decided to take the leap and attend the University of Central Florida's Full Stack Web Development bootcamp and I've enjoyed every second of learning about how these technologies work! I'm so excited to bring my passion, determination, and cooperatative skillsets to my future employers.<br></br> <br></br>
                Originally I'm from Massachusetts but currently loving life in Orlando. I always thought I wanted to be in the culinary industry, but after working in the field for years I decided it wasn't for me. I was introduced to coding, and starting dabbling in some basic tutorials and decided I wanted to take the next step down that path!</p>
                </div>
                <img className="headshot" src={headshot}></img>
        </div>
    )
}

export default About;