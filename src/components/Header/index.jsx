import React, { useState } from "react";
import './header.css'

const Header = ({ showAbout, showProjects, showResume, showContact }) => {

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleToggle = () => {
        setMobileOpen(prev => !prev)
      }
      
      const closeMenu = () => {
        setMobileOpen(false)
      }

    return (
        <div className="container-fluid d-flex justify-content-between header-background">
            <div className="name-header">
                <h2>Dylan</h2><h2 className="last-name">Crowley</h2>
            </div>
            <h2 className="title">Web Developer</h2>
            <ul className="header-ul">
                <li className="header-ul-li" onClick={showAbout}>About</li>
                <li className="header-ul-li" onClick={showProjects}>Projects</li>
                <li className="header-ul-li" onClick={showResume}>Resume</li>
                <li className="header-ul-li" onClick={showContact}>Contact Me</li>
            </ul>

            <nav className="navBar">
                <button onClick={handleToggle}>{mobileOpen ? <i className="fa-solid fa-x header-icons" style={{color: '#82fff3'}}></i> : <i className="fa-solid fa-bars header-icons"></i>}</button>
                <ul className={`menuNav ${mobileOpen ? " showMenu" : ""}`}>
                    <li className="header-ul-li menustyles" onClick={() => {showAbout(); closeMenu()}}>About</li>
                    <li className="header-ul-li menustyles" onClick={() => {showProjects(); closeMenu()}}>Projects</li>
                    <li className="header-ul-li menustyles" onClick={() => {showResume(); closeMenu()}}>Resume</li>
                    <li className="header-ul-li menustyles" onClick={() => {showContact(); closeMenu()}}>Contact Me</li>
                </ul>
            </nav>

        </div>
    )
}

export default Header;