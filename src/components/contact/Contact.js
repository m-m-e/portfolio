import React from 'react';

class Contact extends React.Component {
  render(){
    return(
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
    );
  }
};

export default Contact;