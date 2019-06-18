import React from 'react';
import './projectCard.scss';

class ProjectCard extends React.Component {
  render(){
    const {item} = this.props;
    return(
      <div className="card__container">
        <p className="project__name">{item.name}</p>
        <p className="project__description">{item.description}</p>
        <a className="project__link" target="_blank" rel="noopener noreferrer" href={item.url}>
          <img src={item.image} alt={`Link to ${item.name}`} title={`Link to ${item.name}`} className="project__link-image"/>
        </a>
        <a className="project__link-GH" target="_blank" rel="noopener noreferrer" href={item.urlGH}>See code on GitHub >></a>
      </div>
    );
  }
}

export default ProjectCard;