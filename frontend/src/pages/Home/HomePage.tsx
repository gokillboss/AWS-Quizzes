import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import awsExamImage from '../../assets/images/wallpaper.webp';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quizzes');
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>AWS Certification Exam | Latest AWS Practice Tests 2024</title>
                <meta name="description" content="Practice for the AWS Certification Exam with the latest 2024 practice tests. Prepare effectively for AWS certification exams." />
                <meta name="keywords" content="AWS exam, AWS certification, AWS practice tests, AWS certification 2024, AWS exam preparation" />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "AWS Certification Exam",
                      "description": "Prepare for the AWS Certification Exam with the latest practice tests and resources. Updated 2024 exams and simulations.",
                      "url": "https://aws-certification.com",
                      "keywords": "AWS exam, AWS certification, AWS practice tests, AWS certification 2024",
                      "publisher": {
                        "@type": "Organization",
                        "name": "AWS Certification Prep"
                      }
                    }
                    `}
                </script>
            </Helmet>

            <Container className="homepage-container mb-5">
                <Row className="align-items-center homepage-hero">
                    <Col md={6} className="text-md-left">
                        <h1 className="homepage-title mb-4">Prepare for Your AWS Certification</h1>
                        <p className="lead mb-4">Get ready for the exam with the latest AWS practice tests and preparation materials.</p>
                        <Button variant="primary" size="lg" className="mb-4" onClick={handleStartQuiz}>
                            Start Practicing Now
                        </Button>
                    </Col>
                    <Col md={6}>
                        <img src={awsExamImage} alt="AWS certification exam" className="img-fluid rounded homepage-image" />
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md={4}>
                        <Card className="h-100 homepage-card">
                            <Card.Body>
                                <Card.Title>Latest Practice Exams</Card.Title>
                                <Card.Text>Stay updated with the latest AWS certification practice exams for 2024.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 homepage-card">
                            <Card.Body>
                                <Card.Title>Easy to Access</Card.Title>
                                <Card.Text>Access all practice exams easily to enhance your knowledge and exam readiness.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 homepage-card">
                            <Card.Body>
                                <Card.Title>Simulated Exam Experience</Card.Title>
                                <Card.Text>Take simulated exams to get familiar with the actual AWS certification test environment.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col>
                        <h2 className="homepage-section-title">AWS Certification Exam Requirements</h2>
                        <p className="homepage-text">
                            AWS certification exams are designed to validate technical skills and cloud expertise. Prepare thoroughly to gain credentials that demonstrate your skills and commitment to the industry.
                        </p>
                        <p className="homepage-text">
                            Starting January 2024, AWS certification exams will feature updated questions and formats to reflect the latest cloud computing advancements and best practices.
                        </p>
                        <p className="homepage-text">
                            Upon application approval, candidates will receive an AWS exam handbook and instructions to schedule their exam at an authorized testing center or online.
                        </p>
                    </Col>
                </Row>

                <Row className="my-5">
                    <h2 className="homepage-section-title">Structure of the AWS Certification Exam 2024</h2>
                    <p className="homepage-list">
                        Exam Duration: 90 minutes.<br />
                        Multiple-choice Questions: 65.<br />
                        Pretest Questions: 10.<br />
                    </p>
                    <p>
                        The exam is available in several languages, but it's recommended to review{' '}
                        <a
                            href="https://aws.amazon.com/certification/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aws-link"
                        >
                            AWS terminology and guidelines
                        </a> for a successful certification journey.
                    </p>
                </Row>
            </Container>
        </HelmetProvider>
    );
};

export default HomePage;
