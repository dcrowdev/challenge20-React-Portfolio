import React from "react";

function Project({ projects }) {
    projects.map((project) => console.log(project.imagePath))
    return (
        <div className="container-fluid row justify-content-evenly">
            <h1 style={{ textAlign: 'center', marginBottom: '5%', fontSize: '60px'}}>My Projects!</h1>
            {projects.map((project) => (
            <div className="card" key={project.id} style={{width: '18rem'}}>
                <img src={project.imagePath} className="card-img-top" alt={project.imageAlt} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text" style={{fontSize: 'small'}}>{project.description}</p>
                        <a href={project.link} className="btn btn-primary">Click here to view application!</a>
                    </div>
            </div>
            ))}
        </div>
    )
}

export default Project;