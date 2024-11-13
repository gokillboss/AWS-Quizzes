import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { resetPassword } from '../../services/api';
import { PasswordData } from '../../types/PasswordData';

const ResetPassword: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { token } = useParams();
    const navigate = useNavigate();

    const validatePassword = (password: string): boolean => {
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters.');
            return false;
        }
        setPasswordError(null);
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage(null);
            return;
        }

        setIsSubmitting(true);

        try {
            if (token) {
                const passwordData: PasswordData = { currentPassword: '', newPassword: password, oldPassword: '', password: password };
                await resetPassword(token, passwordData);
                setSuccessMessage('Password has been updated successfully.');
                setErrorMessage(null);
                setTimeout(() => navigate('/login'), 2000);
            } else {
                setErrorMessage('Invalid token.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container className="min-vh-100 d-flex justify-content-center" style={{ marginTop: '8rem' }}>
            <Row className="w-100">
                <Col md="6" lg="4" className="mx-auto">
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter new password"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span className="ms-2">Processing...</span>
                                </>
                            ) : (
                                "Reset Password"
                            )}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPassword;
