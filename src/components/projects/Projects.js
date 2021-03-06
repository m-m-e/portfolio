import React from 'react';
import './projects.scss';
import {projectData} from '../../data/projectData';
import ProjectCard from '../projectCard/ProjectCard';
import css from '../../images/icons/css3_logo.png';
import git from '../../images/icons/Git_logo.png';
import html from '../../images/icons/HTML_Logo.png'; 
import js from '../../images/icons/JavaScript_logo.png'; 
import npm from '../../images/icons/Npm-logo.png'; 
import react from '../../images/icons/react_logo.png'; 
import sass from '../../images/icons/sass-logo.png'; 

class Projects extends React.Component {
  render(){
    return(
      <section id="projects" className="projects">
        <h2 className="projects__title">My projects</h2>
        <h3 className="projects__subtitle">Here are a few of my individual projects. For group projects please see my <a href="https://www.linkedin.com/in/meganmyfanwyedwards/" title="Linked In - MME" target="_blank" rel="noopener noreferrer">LinkedIn</a>! These were created using...</h3>
        <div className="skills__icons__box">
          <img src={css} alt="CSS3" className="skills__icon"/>
          <img src={git} alt="Git" className="skills__icon"/>
          <img src={html} alt="HTML5" className="skills__icon"/>
          <img src={js} alt="JavaScript" className="skills__icon"/>
          <img src={npm} alt="Npm" className="skills__icon"/>
          <img src={react} alt="React" className="skills__icon"/>
          <img src={sass} alt="SASS" className="skills__icon"/>
        </div>
        <ul className="projects__list">
          {projectData
          .filter(item=> item.url !== '' ? item : false)
          .map(item => {
            return(
              <li className="projects__list-item" key={item.id}>
                <ProjectCard item={item} />
              </li> 
            )
            })}
        </ul>
      </section>
  );
  }
}

export default Projects;