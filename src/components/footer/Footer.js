import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="wrapper footer-wrapper">
          <nav className="footer__menu">
            <ul className="menu__list">
              <ul className="menu__list-item">
                <a href="#story" className="menu-link">My story</a>
              </ul>
              <ul className="menu__list-item">
                <a href="#projects" className="menu-link">Projects</a>
              </ul>
              <ul className="menu__list-item">
                <a href="#contact" className="menu-link">Contact me</a>
              </ul>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;