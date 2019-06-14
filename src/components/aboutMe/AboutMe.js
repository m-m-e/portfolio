import React from 'react';
import './aboutMe.scss';
import meg from '../../images/MMEprofessional.png';
import arrow from '../../images/down-arrow.png';

class AboutMe extends React.Component {
  render(){
    return(
      <section className="aboutMe">
        <h1 className="title">Megan M Edwards</h1>
        <img src={meg} alt="Megan Edwards" className="profile__image"/>
        <a href="#story" className="arrow__container" title="Go straight to my story">
          <img src={arrow} alt="Go to next section" className="down__arrow"/>
        </a>
      </section>
    );
  }
};

export default AboutMe;