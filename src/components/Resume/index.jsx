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
                <img className='logos' src={htmlcssLogo} alt="HTML/CSS logos" style={{ height: '100px', width: '100px' }} />
                <img className='logos' src={jsLogo} alt="HTML/CSS logos" style={{ height: '100px', width: '100px' }} />
                <img className='logos' src={reactLogo} alt="HTML/CSS logos" style={{ height: '100px', width: '100px' }} />
                <img className='logos' src={nodeLogo} alt="HTML/CSS logos" style={{ height: '100px', width: '100px' }} />
            </div>
            <div className="resume-btn-container">
            <img src={MyResume} style={{ height: '70%', width: '50%' }} alt='Dylan Crowley Resume' />
            <button className="btn btn-primary"><a style={{ color: 'white', fontWeight: 'bold' }} href={DLResume} target='_blank' rel="noreferrer" download>Download My Resume!</a></button>
            </div>
            <div className="right-side-logos">
                <img className='logos' src={expressLogo} alt="HTML/CSS logos" style={{ height: '100px', width: '100px' }} />
                <img className='logos' src={mongoLogo} alt="HTML/CSS logos" style={{ height: '100px', width: '110px' }} />
                <img className='logos' src={mysqlLogo} alt="HTML/CSS logos" style={{ height: '100px', width: '100px' }} />
                <img className='logos' src={gqlLogo} alt="HTML/CSS logos" style={{ height: '110px', width: '130px' }} />
            </div>
        </div>
    )
}

export default Resume;