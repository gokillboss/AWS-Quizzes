import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="footer-section bg-dark text-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <div className="about-section">
              <h5 className="text-uppercase">About AWS Certification Prep</h5>
              <p className="about-text">
                We are dedicated to helping you pass your AWS certification exams with ease. 
                Our platform provides comprehensive practice tests, study tips, and a supportive community to guide you every step of the way.
              </p>
            </div>
          </Col>
          <Col lg="6" md="12" className="mb-4">
            <div className="contact-section p-3 rounded">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled contact-list"> 
                <li>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> 
                    <a href="mailto:support.awscertprep@gmail.com" className="text-light">Email: support.awscertprep@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon icon={faFacebook} className="contact-icon" /> 
                    <a href="https://facebook.com/awscertificationprep" className="text-light">Facebook: AWS Certification Prep</a>
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom text-center p-3">
        © 2024 AWS Certification Prep. All rights reserved:    
        <a className="text-light mx-2" href="https://awscertprep.com/" target="_blank" rel="noopener noreferrer">
          awscertprep.com
        </a>
        <span className="mx-2">|</span>
        <span 
          className="text-light ms-2" 
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => handleNavigate('/terms-of-service')}
        >
          Terms of Service
        </span>
      </div>
    </footer>
  );
};

export default Footer;
