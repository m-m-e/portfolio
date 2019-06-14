import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="wrapper footer-wrapper">
        <a href="#topOfPage" className="up__arrow" title="Return to top of page"><i className="fas fa-hand-point-up"/></a>
          <nav className="footer__menu">
            <ul className="menu__list">
              <ul className="menu__list-item">
                <a href="#story" className="menu-link" title="My story">My story</a>
              </ul>
              <ul className="menu__list-item">
                <a href="#projects" className="menu-link" title="Projects">Projects</a>
              </ul>
              <ul className="menu__list-item">
                <a href="#contact" className="menu-link" title="Contact Me">Contact me</a>
              </ul>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;