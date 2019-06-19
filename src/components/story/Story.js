import React from 'react';
import './story.scss';
import swansea from '../../images/story/swansea.jpg';
import teaching from '../../images/story/teaching.jpg';
import adalab from '../../images/story/logo-adalab.svg';
import './story.scss';

class Story extends React.Component {
  render(){
    return(
      <section className="story" id="story">
        <div className="parallax parallax1"></div>
        <h2 className="story__title">My story</h2>
        <div className="story__box story__1">
          <h3 className="story__subtitle">Translation</h3>
          <p className="story__text">I love languages, so I studied Translation at Swansea University. I was lucky enough to spend a year abroad in Granada and Geneva, studying at the top Translation universities in Europe.</p>
          <img src={swansea} alt="Swansea Bay (UK)" className="story__image"/>
        </div>
        <div className="story__box story__2">
          <h3 className="story__subtitle">Teaching</h3>
          <p className="story__text">I worked as a primary school teacher in the UK then, when I moved to Madrid in 2017, I started teaching English. I taught first at Vaughan, then at Vizzuality and Stubhub (an eBay company).</p>
          <img src={teaching} alt="A teacher in a classroom" className="story__image"/>
        </div>
        <div className="story__box story__3">
          <h3 className="story__subtitle">Adalab</h3>
          <p className="story__text">I took part in Adalab's intensive front-end web development course and became a front-end developer! I am excited to find a team in which I can continue to grow and develop my skills...</p>
          <a href="https://adalab.es/" className="story__link"><img src={adalab} alt="Adalab Digital" className="story__image"/></a>
        </div>
        <div className="parallax parallax2"></div>
      </section>
    );
  }
};

export default Story;