import React from "react";
import './header.css'

const Header = ({ showAbout, showProjects, showResume, showContact }) => {


    return (
        <div className="container-fluid d-flex justify-content-between header-background">
            <div className="name-header">
            <h2>Dylan</h2><h2 className="last-name">Crowley</h2>
            </div>
            <ul>
                <li onClick={showAbout}>About</li>
                <li onClick={showProjects}>Projects</li>
                <li onClick={showResume}>Resume</li>
                <li onClick={showContact}>Contact Me</li>
            </ul>
        </div>
    )
}

export default Header;