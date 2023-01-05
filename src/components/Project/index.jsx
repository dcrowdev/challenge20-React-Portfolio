import React from 'react';
import './projects.css';
import DLResume from '../../images/Resume2.pdf'
import htmlcssLogo from '../../images/html-css.png'
import jsLogo from '../../images/JavaScript-logo.png'
import reactLogo from '../../images/react-logo.png'
import nodeLogo from '../../images/node-logo.png'
import expressLogo from '../../images/express-logo.png'
import mongoLogo from '../../images/mongo-db-logo.png'
import mysqlLogo from '../../images/MySQL-Logo.png'
import gqlLogo from '../../images/gql-logo.png'

function Project({ projects }) {
  return (
    <div className='project-container'>
        <div className="left-side-logos">
                <img className='logos' src={htmlcssLogo} alt="HTML/CSS logos" />
                <img className='logos' src={jsLogo} alt="HTML/CSS logos" />
                <img className='logos' src={reactLogo} alt="HTML/CSS logos" />
                <img className='logos' src={nodeLogo} alt="HTML/CSS logos" />
            </div>
      
      <div className='title-map'>
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '3%',
            marginTop: '2%',
            fontSize: '60px',
            display: 'inline-block',
          }}
        >
          My Projects!
        </h1>
        <div className='map-container'>
          {projects.map((project) => (
            <div className='card custom-card' key={project.id}>
              <div
                className='hover-text fade'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-evenly',
                }}
              >
                <p
                  style={{
                    color: '#000',
                    fontWeight: 'bold',
                    zIndex: '3',
                    fontSize: '20px',
                    textShadow:
                      '-1px 0 #FF9398, 0 1px #FF9398, 1px 0 #FF9398, 0 -1px #FF9398',
                  }}
                >
                  <b
                    style={{
                      color: '#FF9398',
                      fontSize: '45px',
                      textDecoration: 'underline',
                      textShadow:
                        '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                    }}
                  >
                    Technologies:
                  </b>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  {project.technologies}
                </p>
                <a
                  style={{
                    zIndex: '4',
                    fontSize: '20px',
                    backgroundColor: '#FF9398',
                    border: '1px solid black',
                  }}
                  href={project.link}
                  className='btn btn-index'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live application
                </a>
                <a
                  style={{
                    zIndex: '4',
                    fontSize: '20px',
                    backgroundColor: '#FF9398',
                    border: '1px solid black',
                  }}
                  href={project.github}
                  className='btn btn-index'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github Repo
                </a>
              </div>
              <div className='hover-wrapper blur card-spacing'>
                <img
                  src={project.imagePath}
                  className='card-img-top'
                  alt={project.imageAlt}
                />
                <div className='card-body card-spacing'>
                  <h5
                    className='card-title'
                    style={{ textDecoration: 'underline' }}
                  >
                    {project.title}
                  </h5>
                  <p className='card-text' style={{ fontSize: 'small' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a className='fade-in-animation' href={DLResume} target='_blank' rel="noreferrer" download>Download My Resume!</a>
      <div className="right-side-logos">
                <img className='logos' src={expressLogo} alt="HTML/CSS logos" />
                <img className='logos' src={mongoLogo} alt="HTML/CSS logos" />
                <img className='logos' src={mysqlLogo} alt="HTML/CSS logos" />
                <img className='logos' src={gqlLogo} alt="HTML/CSS logos" />
            </div>
    </div>
  );
}

export default Project;
