import React from 'react';
import './story.scss';
import swansea from '../../images/story/swansea.jpg';
import teaching from '../../images/story/teaching.jpg';
import programming from '../../images/story/programming.jpg';
import './story.scss';

class Story extends React.Component {
  render(){
    return(
      <section className="story" id="story">
        <h2 className="story__title">My story</h2>
        <div className="story__box story__1">
          <h3 className="story__subtitle">Translation</h3>
          <p className="story__text">I studied Translation at Swansea University, with a year abroad in Granada and Geneva.</p>
          <img src={swansea} alt="Swansea Bay (UK)" className="story__image"/>
        </div>
        <div className="story__box story__2">
          <h3 className="story__subtitle">Teaching</h3>
          <p className="story__text">I worked as a primary school teacher in the UK then, when I moved to Madrid, I started teaching English. I taught first at Vaughan, then as 'autonoma' (freelance) for Vizzuality and Stubhub (an eBay company).</p>
          <img src={teaching} alt="A teacher in a classroom" className="story__image"/>
        </div>
        <div className="story__box story__3">
          <h3 className="story__subtitle">Adalab</h3>
          <p className="story__text">I took part in Adalab's intensive front-end web development course and became a front-end developer! I am excited to find a team in which I can continue to grow and develop my skills...</p>
          <img src={programming} alt="I hate programming joke" className="story__image"/>
        </div>
      </section>
    );
  }
};

export default Story;