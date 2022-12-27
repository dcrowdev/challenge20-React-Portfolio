import React from "react";
import MyResume from '../../images/ResumeScreenshot.PNG'
import DLResume from '../../images/Resume.pdf'



function Resume () {
    return (
        <>
        <button><a href={DLResume} target='_blank' download>Download</a></button>
        <img src={MyResume} style={{height: '70%'}}/>
        </>
    )
}

export default Resume;