import React from "react";
import './resume.css'
import MyResume from '../../images/ResumeScreenshot.PNG'
import DLResume from '../../images/Resume.pdf'



function Resume () {
    return (
        <div className="resume-container">
        <img src={MyResume} style={{height: '60%', width: '20%'}} alt='Dylan Crowley Resume' />
        <button className="btn btn-primary"><a style={{color: 'white', fontWeight: 'bold'}} href={DLResume} target='_blank' rel="noreferrer" download>Download My Resume!</a></button>
        </div>
    )
}

export default Resume;