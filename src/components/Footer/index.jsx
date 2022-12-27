import React from "react";

function Footer() {
    return (
        <div className="container-fluid mt-5">
            <ul className="d-flex justify-content-center">
                <li style={{ listStyleType: 'none', paddingRight: '30px', cursor: 'pointer', fontSize: '22px' }}><a href="https://twitter.com/dcrowdev">Twitter</a></li>
                <li style={{ listStyleType: 'none', paddingRight: '30px', cursor: 'pointer', fontSize: '22px' }}><a href="https://github.com/dcrowdev">Github</a></li>
                <li style={{ listStyleType: 'none', paddingRight: '30px', cursor: 'pointer', fontSize: '22px' }}><a href="https://www.linkedin.com/in/dylan-crowley-3974b8252/">LinkedIn</a></li>
            </ul>
        </div>
    )
}

export default Footer;