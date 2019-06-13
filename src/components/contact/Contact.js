import React from 'react';
import './contact.scss';

class Contact extends React.Component {
  render(){
    return(
      <section id="contact" className="contact">
        <h2 className="contact__title">Please get in touch!</h2>
        <ul className="contact__list">
          <li className="contact__list-item">
            <a href="mailto:megmyfedwards@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__link email">
              <i className="fas fa-envelope email__icon" />
            </a>
          </li>
          <li className="contact__list-item">
            <a href="tel:00 34 644 75 21 07" target="_blank" rel="noopener noreferrer" className="contact__link phone">
              <i className="fas fa-phone phone__icon" />
            </a>
          </li>
          <li className="contact__list-item">
            <a href="https://github.com/m-m-e" target="_blank" rel="noopener noreferrer" className="contact__link github">
              <i className="fab fa-github-alt github__icon" />
            </a>
          </li>
          <li className="contact__list-item">
            <a href="https://www.linkedin.com/in/meganmyfanwyedwards/" target="_blank" rel="noopener noreferrer" className="contact__link linkedin">
              <i className="fab fa-linkedin-in linkedin__icon" />
            </a>
          </li>
          <li className="contact__list-item">
            <a href="https://twitter.com/Miss_MME23" target="_blank" rel="noopener noreferrer" className="contact__link twitter">
              <i className="fab fa-twitter twitter__icon" />
            </a>
          </li>
        </ul>
      </section>
    );
  }
};

export default Contact;