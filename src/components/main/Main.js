import React from 'react';
import './main.scss';
import AboutMe from '../aboutMe/AboutMe';
import Story from '../story/Story';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

class Main extends React.Component {
  render() {
    return(
      <main className="main__content" id="topOfPage">
        <div className="wrapper main__wrapper">
          <AboutMe />
          <Story />
          <Projects />
          <Contact />
        </div>
      </main>
    );
  }
}

export default Main;