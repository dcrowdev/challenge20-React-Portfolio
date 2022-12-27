import React from "react";
import './header.css'

const Header = ({ showAbout, showProjects, showResume, showContact }) => {


    return (
        <div className="container-fluid d-flex justify-content-between header-background">
            <div className="name-header">
            <h2>Dylan</h2><h2 className="last-name">Crowley</h2>
            </div>
            <ul className="header-ul">
                <li className="header-ul-li" onClick={showAbout}>About</li>
                <li className="header-ul-li" onClick={showProjects}>Projects</li>
                <li className="header-ul-li" onClick={showResume}>Resume</li>
                <li className="header-ul-li" onClick={showContact}>Contact Me</li>
            </ul>
        </div>
    )
}

export default Header;