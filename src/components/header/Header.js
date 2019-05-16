import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className="language-options"></div>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="#story" className="menu-link">My story</a>
            </li>
            <li className="menu__list-item">
              <a href="#projects" className="menu-link">Projects</a>
            </li>
            <li className="menu__list-item">
              <a href="#contact" className="menu-link">Contact me</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;