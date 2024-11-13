import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { findPassword } from '../../../services/api';
import { Link } from 'react-router-dom';
import './FindPassword.css';

const FindPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [maskedEmail, setMaskedEmail] = useState<string>('');
    const [timer, setTimer] = useState<number>(0);
    const [canResend, setCanResend] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const maskEmail = (email: string): string => {
        const [name, domain] = email.split('@');
        return `${name[0]}*****@${domain}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;
  
      setIsSubmitting(true);
      try {
          const response = await findPassword(email);
          console.log('API Response:', response);
  
          // Check if the response contains a message instead of a success field
          if (response.data && response.data.message) {
              setMaskedEmail(maskEmail(email));
              setSuccessMessage(response.data.message); // Display the message from the response
              setErrorMessage(null);
              setCanResend(false);
              setTimer(90);
          } else {
              setErrorMessage('Account does not exist. Please try again.');
              setSuccessMessage(null);
          }
      } catch (error) {
          setErrorMessage('An error occurred. Please try again.');
          setSuccessMessage(null);
          console.error('Find Password Error:', error);
      }
      setIsSubmitting(false);
  };
  
  

    const handleResend = () => {
        if (!canResend) return;
        setTimer(90);
        handleSubmit(new Event('resend') as unknown as React.FormEvent);
    };

    return (
        <Container className="min-vh-100 bg-light">
            <Row className="w-100 justify-content-center">
                <Col md="6" lg="5" className="mx-auto">
                    <div className="shadow-lg p-4 bg-white rounded find-password-card">
                        <h2 className="text-center mb-4 text-primary">Forgot Password</h2>
                        {errorMessage && <Alert variant="danger" className="text-center">{errorMessage}</Alert>}
                        {!successMessage ? (
                            <Form onSubmit={handleSubmit} className="needs-validation">
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label className="text-muted">Enter your email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email"
                                        required
                                        className="p-3"
                                        style={{ fontSize: '1rem' }}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="find-password-btn w-100" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processing...' : 'Reset Password'}
                                </Button>
                            </Form>
                        ) : (
                            <div className="text-center">
                                <Alert variant="success" className="mt-4">
                                    <p>{successMessage}</p>
                                    <p>Please check your email <strong>{maskedEmail}</strong> to reset your password.</p>
                                    <p>If you don't receive the email, please check your spam folder or try resending it later.</p>
                                </Alert>
                                <Button variant="secondary" onClick={handleResend} disabled={!canResend} className="w-100 p-3">
                                    {canResend ? 'Resend Email' : `Resend in ${timer} seconds`}
                                </Button>
                                <div className="text-center mt-3">
                                    <Link to="/login" className="text-decoration-none">Back to Login</Link>
                                </div>
                                <div className="text-center mt-3">
                                    <p>If you encounter issues, please contact <a href="mailto:support.thinail@gmail.com" className="text-decoration-none">support.thinail@gmail.com</a>.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FindPassword;
