import React from "react";
import './projects.css'

function Project({ projects }) {
    return (
        <div className="project-container">
            <h1 style={{ textAlign: 'center', marginBottom: '3%', marginTop: '2%', fontSize: '60px', display: 'inline-block'}}>My Projects!</h1>
            <div className="map-container">
            {projects.map((project) => (
            <div className="card custom-card" key={project.id}>
                <p className="hover-text fade" style={{height: '100%', color: '#0B0B45', fontWeight: 'bold', zIndex: '3'}}><a href={project.link} target='_blank' style={{textDecoration: 'none', height: '100%', color: '#0B0B45', fontWeight: 'bold', zIndex: '3'}}>Technologies Used: <br></br><br></br><br></br>{project.technologies}</a></p>
                <div className="hover-wrapper blur card-spacing">
                <img src={project.imagePath} className="card-img-top" alt={project.imageAlt} />
                    <div className="card-body card-spacing">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text" style={{fontSize: 'small'}}>{project.description}</p>
                        <a href={project.link} className="btn btn-primary btn-index" target='_blank'>Live application!</a>
                    </div>
                    </div>
            </div>
            ))}
            </div>
        </div>
    )
}

export default Project;