import React from 'react';
import './main.scss';
import meg from '../../images/MMEprofessional.png';
import arrow from '../../images/down-arrow.png';

class Main extends React.Component {
  render() {
    return(
      <main className="main__content">
        <div className="wrapper main__wrapper">
          <section className="aboutMe">
            <h1 className="title">Megan M Edwards</h1>
            <img src={meg} alt="Megan Edwards" className="profile__image"/>
            <a href="#story" className="arrow__container">
              <img src={arrow} alt="Go to next section" className="down__arrow"/>
            </a>
          </section>

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

          <section id="projects" className="projects">
            <h2 className="projects__title">My projects</h2>
            <div className="projects__container">

            </div>
          </section>

          <section id="contact" className="contact">
            <h2 className="contact__title">Please get in touch!</h2>
            <div className="contact-email">
              <img src="" alt="" className="email__icon"/>
              <p className="email">megmyfedwards@gmail.com</p>
            </div>
            <div className="contact-phone">
              <img src="" alt="" className="phone__icon"/>
              <p className="phone">(00 34) 644 75 21 07</p>
            </div>
            <div className="contact-github">
              <img src="" alt="" className="github__icon"/>
              <p className="github">https://github.com/m-m-e</p>
            </div>
            <div className="contact-linkedin">
            <img src="" alt="" className="linkedin__icon"/>
              <p className="linkedin">https://www.linkedin.com/in/meganmyfanwyedwards/</p>
            </div>
            <div className="contact-twitter">
              <img src="" alt="" className="twitter__icon"/>
              <p className="twitter">@Miss_MME23</p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;