import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return(
      <header id="topOfPage" className="header">
        <div className="wrapper header-wrapper">
          <div className="language-options"></div>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a href="#story" className="menu-link" title="My story">My story</a>
              </li>
              <li className="menu__list-item">
                <a href="#projects" className="menu-link" title="Projects">Projects</a>
              </li>
              <li className="menu__list-item">
                <a href="#contact" className="menu-link" title="Contact Me">Contact me</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;