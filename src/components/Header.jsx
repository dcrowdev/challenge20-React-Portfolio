import React from "react";

const Header = ({ showAbout, showProjects, showResume, showContact }) => {

    const imgStyle = { height: '100px', width: '100px', borderRadius: '50%' }

    return (
        <div className="container-fluid d-flex justify-content-between">
            <img src='images/personal.jpg' alt='A picture of Dylan' style={imgStyle}/>
            <ul className="d-flex align-items-center">
                <li style={{listStyleType: 'none', paddingRight: '40px', cursor: 'pointer', fontSize: '33px'}} onClick={showAbout}>About</li>
                <li style={{listStyleType: 'none', paddingRight: '40px', cursor: 'pointer', fontSize: '33px'}} onClick={showProjects}>Projects</li>
                <li style={{listStyleType: 'none', paddingRight: '40px', cursor: 'pointer', fontSize: '33px'}} onClick={showResume}>Resume</li>
                <li style={{listStyleType: 'none', paddingRight: '40px', cursor: 'pointer', fontSize: '33px'}} onClick={showContact}>Contact Me</li>
            </ul>
        </div>
    )
}

export default Header;