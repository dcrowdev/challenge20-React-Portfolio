import React from "react";
import './resume.css'
import MyResume from '../../images/ResumeScreenshot.PNG'
import DLResume from '../../images/Resume.pdf'


import htmlcssLogo from '../../images/html-css.png'
import jsLogo from '../../images/JavaScript-logo.png'
import reactLogo from '../../images/react-logo.png'
import nodeLogo from '../../images/node-logo.png'
import expressLogo from '../../images/express-logo.png'
import mongoLogo from '../../images/mongo-db-logo.png'
import mysqlLogo from '../../images/MySQL-Logo.png'
import gqlLogo from '../../images/gql-logo.png'


function Resume() {
    return (
        <div className="resume-container">
            <div className="left-side-logos">
                <img className='logos' src={htmlcssLogo} alt="HTML/CSS logos" />
                <img className='logos' src={jsLogo} alt="HTML/CSS logos" />
                <img className='logos' src={reactLogo} alt="HTML/CSS logos" />
                <img className='logos' src={nodeLogo} alt="HTML/CSS logos" />
            </div>
            <div className="resume-btn-container">
                <div className="zoom-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70%'}}>
                    <img className="resume-image" src={MyResume} style={{ height: '100%', width: '90%', border: '2px solid', borderRadius: '5px' }} alt='Dylan Crowley Resume' />
                    </div>
                    <button className="btn btn-primary"><a style={{ color: 'white', fontWeight: 'bold' }} href={DLResume} target='_blank' rel="noreferrer" download>Download My Resume!</a></button>
            </div>
            <div className="right-side-logos">
                <img className='logos' src={expressLogo} alt="HTML/CSS logos" />
                <img className='logos' src={mongoLogo} alt="HTML/CSS logos" />
                <img className='logos' src={mysqlLogo} alt="HTML/CSS logos" />
                <img className='logos' src={gqlLogo} alt="HTML/CSS logos" />
            </div>
        </div>
    )
}

export default Resume;