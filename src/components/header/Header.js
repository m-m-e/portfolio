import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className="language-options"></div>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">My story</li>
            <li className="menu__list-item">Projects</li>
            <li className="menu__list-item">Contact me</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;