import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TermOfService.css';

const TermsOfService: React.FC = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate(-1);  // Navigate back to the previous page
    };

    return (
        <Container className="terms-page my-5">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Card className="shadow-sm p-4 terms-card">
                        <Card.Body>
                            <h1 className="text-center mb-4">Terms of Service</h1>
                            <p className="text-muted text-center mb-5">Last Updated: September 26, 2024</p>

                            <section>
                                <h3>1. Introduction</h3>
                                <p>
                                    The <strong>AWS Certification Practice Platform</strong> provides an online practice exam environment designed to help users prepare and improve their skills for AWS certification exams. The platform includes features such as practice tests, automated results, and personalized study resources.
                                </p>
                            </section>

                            <section>
                                <h3>2. Acceptance of Terms</h3>
                                <p>
                                    By creating an account and/or using our services, you agree to the terms and conditions listed here. If you do not agree with any part of the terms, please do not use the service.
                                </p>
                            </section>

                            <section>
                                <h3>3. Account Registration</h3>
                                <p>
                                    To access certain features of the platform, you are required to create an account. By creating an account, you agree to:
                                </p>
                                <ul>
                                    <li>Provide accurate, complete, and up-to-date information.</li>
                                    <li>Be responsible for the security of your account, including your password and login credentials.</li>
                                    <li>Not share your account with anyone else.</li>
                                </ul>
                            </section>

                            <section>
                                <h3>4. Payments and Refund Policy</h3>
                                <p>
                                    If you subscribe to our paid services, including purchasing official practice exams:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Payment:</strong> You agree to provide accurate and complete payment information when making purchases.
                                    </li>
                                    <li>
                                        <strong>Refunds:</strong> Payments are non-refundable once the transaction is completed, unless explicitly stated otherwise in our refund policy or as required by local law.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h3>5. Limitation of Liability</h3>
                                <p>
                                    The platform is provided "as is" without any warranties regarding availability, accuracy, or continuous operation. We are not liable for any damages resulting from the use of our service.
                                </p>
                                <p>We do not collect or use any additional user data beyond the platform's essential operation.</p>
                            </section>

                            <section>
                                <h3>6. Contact Us</h3>
                                <p>
                                    If you have any questions regarding the Terms of Service, please contact us via email at{' '}
                                    <a href="mailto:support.awscert@example.com">support.awscert@example.com</a>.
                                </p>
                            </section>

                            <div className="text-center mt-4">
                                <Button variant="primary" onClick={handleContinue}>
                                    Continue
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TermsOfService;
