import React from "react";
import './about.css'
import headshot from '../../images/personal.jpg'

function About() {
    return (
        <div className="about-container">
            <div className="left-side">
            <h1 style={{fontSize: '60px'}}>About Me!</h1>
            <p className="mt-5" style={{width: '80%', fontSize: '20px'}}>Hi! My name is Dylan and I am an aspiring Software Engineer. I've always been interested in learning the infrastructure that goes into all of the programs of the modern technology we use today. I've enjoyed every second of learning about how these technologies work and I'm so excited to continue the rest of my Bootcamp!
                Originally I'm from Massachusetts but currently loving life in Orlando. I always thought I wanted to be in the culinary industry, but after working in the field for years I decided it wasn't for me. I was introduced to coding, and starting dabbling in some basic tutorials and decided I wanted to take the next step down that path!</p>
                </div>
                <img className="headshot" src={headshot}></img>
        </div>
    )
}

export default About;