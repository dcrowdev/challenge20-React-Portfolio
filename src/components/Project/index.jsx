import React from "react";
import './projects.css'

function Project({ projects }) {
    return (
        <div className="project-container">
            <h1 style={{ textAlign: 'center', marginBottom: '3%', marginTop: '2%', fontSize: '60px', display: 'inline-block'}}>My Projects!</h1>
            <div className="map-container">
            {projects.map((project) => (
            <div className="card custom-card" key={project.id}>
                <div className="hover-text fade" style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-evenly'}}>
                <p style={{color: '#cbfff5', fontWeight: 'bold', zIndex: '3', fontSize: '20px'}}><b style={{color: '#cbfff5', fontSize: '45px', textDecoration: 'underline', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Technologies:</b><br></br><br></br><br></br><br></br>{project.technologies}</p>
                <a style={{zIndex: '4'}} href={project.link} className="btn btn-primary btn-index" target='_blank' rel="noreferrer">Live application</a>
                <a style={{zIndex: '4'}} href={project.github} className="btn btn-primary btn-index" target='_blank' rel="noreferrer">Github Repo</a>
                </div>
                <div className="hover-wrapper blur card-spacing">
                <img src={project.imagePath} className="card-img-top" alt={project.imageAlt} />
                    <div className="card-body card-spacing">
                        <h5 className="card-title" style={{textDecoration: 'underline'}}>{project.title}</h5>
                        <p className="card-text" style={{fontSize: 'small'}}>{project.description}</p>
                    </div>
                    </div>
            </div>
            ))}
            </div>
        </div>
    )
}

export default Project;