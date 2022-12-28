import React from "react";
import './footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <ul className="footer-ul">
                <li className="footer-li"><a href="https://twitter.com/dcrowdev" target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                <li className="footer-li"><a href="https://github.com/dcrowdev" target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                <li className="footer-li"><a href="https://www.linkedin.com/in/dylan-crowley-3974b8252/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer;