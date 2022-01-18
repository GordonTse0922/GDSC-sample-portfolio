import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { text, btnName, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{text || 'Want to get in touch?'}</p>
            <a
              target="_blank" // this will open up in a new page
              rel="noopener noreferrer" // security pratice
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://www.linkedin.com/in/ho-yin-tse/'}
            >
              {btnName || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
