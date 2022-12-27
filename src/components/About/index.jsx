import React from "react";

function About() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontSize: '60px'}}>About Me!</h1>
            <p className="mt-5" style={{width: '50%', fontSize: '20px'}}>Hi! My name is Dylan and I am an aspiring Software Engineer. I've always been interested in learning the infrastructure that goes into all of the programs of the modern technology we use today. I've enjoyed every second of learning about how these technologies work and I'm so excited to continue the rest of my Bootcamp!
                Originally I'm from Massachusetts but currently loving life in Orlando. I always thought I wanted to be in the culinary industry, but after working in the field for years I decided it wasn't for me. I was introduced to coding, and starting dabbling in some basic tutorials and decided I wanted to take the next step down that path!</p>
        </div>
        // const imgStyle = { height: '100px', width: '100px', borderRadius: '50%' }
    )
}

export default About;