import React from 'react';
import './main.scss';
import meg from '../../images/MMEprofessional.png';

class Main extends React.Component {
  render() {
    return(
      <main className="main-content">
        <div className="wrapper main-wrapper">
          <h1 className="title">Megan M Edwards</h1>
          <img src={meg} alt="Megan Edwards" className="profile-image"/>
        </div>
      </main>
    );
  }
}

export default Main;