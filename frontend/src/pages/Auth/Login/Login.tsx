import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { login } from '../../../services/api';
import { jwtDecode } from "jwt-decode";
import './Login.css';

// Define interfaces for response data
interface LoginResponse {
    token: string;
}

interface DecodedUser {
    exp: number;
    // Add any other fields your decoded token may have
}

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await login({ email, password }) as { data: LoginResponse };
            const { token } = response.data;
            localStorage.setItem('token', token);
            
            const user = jwtDecode<DecodedUser>(token); // Decoding the token
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/'); // Redirect to home page or any other page
            window.location.reload(); // Refresh to update header state
        } catch (error) {
            setError('Incorrect email or password.'); // Update error message in English
            console.error('Login error', error);
        }
    };

    return (
        <Container fluid className="d-flex mt-5 justify-content-center min-vh-100">
            <Row className="justify-content-md-center w-100">
                <Col md="6" lg="4">
                    <Card className="p-4 shadow-lg login-card">
                        <h2 className="text-center mb-4 login-title">Login</h2>
                        <div className='d-flex justify-content-center align-items-center'>
                            {error && <p style={{color:'red'}}>{error}</p>}
                        </div>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 rounded-pill login-btn mt-3">
                                Login
                            </Button>
                        </Form>

                        <div className="d-flex justify-content-between mt-3">
                            <Link to="/find-password" className="text-decoration-none">
                                Forgot Password?
                            </Link>
                            <Link to="/register" className="text-decoration-none">
                                Register
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
