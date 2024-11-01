import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';
import { confirmEmail } from '../../services/api';
import './EmailConfirmation.css';

type EmailConfirmationStatus = 'loading' | 'success' | 'error';

const EmailConfirmation: React.FC = (): JSX.Element => {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<EmailConfirmationStatus>('loading');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setMessage('Invalid or missing confirmation token.');
        setStatus('error');
        return;
      }
      try {
        const response = await confirmEmail(token);
        setMessage(response.data.message);
        setStatus('success');
      } catch (error) {
        setMessage('Email confirmation failed. Please try again or contact support.');
        setStatus('error');
      }
    };
    verifyEmail();
  }, [token]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div>
            <Spinner animation="border" variant="primary" className="mb-3" />
            <h3>Verifying your email...</h3>
          </div>
        );
      case 'success':
        return (
          <div>
            <CheckCircleFill className="text-success icon-large mb-3" />
            <h3>Email Confirmed!</h3>
          </div>
        );
      case 'error':
        return (
          <div>
            <XCircleFill className="text-danger icon-large mb-3" />
            <h3>Confirmation Failed</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="email-confirmation-container">
      <Row className="justify-content-center min-vh-100">
        <Col md={6}>
          <Card className="text-center p-5 email-confirmation-card">
            {renderContent()}
            <p className="mt-3">{message}</p>
            {status !== 'loading' && (
              <a href="/login" className="btn btn-primary mt-3">
                Go to Login
              </a>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailConfirmation;
