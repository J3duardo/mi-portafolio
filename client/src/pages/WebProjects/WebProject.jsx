import React from 'react';

const WebProject = (props) => {
  const {logo, title, description, tech, projectUrl, githubUrl} = props.data;

  const techItems = () => {
    return tech.map((item, i) => {
      return <img key={i} src={item} alt="tech logo" />
    })
  }

  return (
    <div className="web-development__project-info">
      <div className="logo" style={{backgroundImage: `url(${logo})`}}></div>
      <h2>{title}</h2>
      <div className="web-development__project-info__description">
        <p>{description}</p>
      </div>
      <div className="web-development__project-info__tech">
        <h3>Tecnologías utilizadas</h3>
        <div className="imgs-container">
          {techItems()}
        </div>
      </div>
      <div className="buttons">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">Ir al proyecto</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">Ver en github</a>
      </div>
    </div>
  );
}

export default WebProject;
