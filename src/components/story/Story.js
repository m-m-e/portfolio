import React from 'react';
import './story.scss';

class Story extends React.Component {
  render(){
    return(
      <section className="story" id="story">
        <h2 className="story__title">My story</h2>
        <div className="story__1">
          <h3 className="story__subtitle">Translation</h3>
          <p className="story__text">Studied Translation at Swansea University, with a year abroad in Granada and Geneva.</p>
          <img src="" alt="" className="story__image"/>
        </div>
        <div className="story__2">
          <h3 className="story__subtitle">Teaching children</h3>
          <p className="story__text">Worked as a primary school teacher in the UK</p>
          <img src="" alt="" className="story__image"/>
        </div>
        <div className="story__3">
          <h3 className="story__subtitle">Teaching English</h3>
          <p className="story__text">Taught English in Madrid, first at Vaughan, then as 'autonomo' (freelance) for Vizzuality and Stubhub(an eBay company).</p>
          <img src="" alt="" className="story__image"/>
        </div>
        <div className="story__4">
          <h3 className="story__subtitle">Adalab</h3>
          <p className="story__text">Took part in Adalab's intensive front-end web development course.</p>
          <img src="" alt="" className="story__image"/>
        </div>
      </section>
    );
  }
};

export default Story;