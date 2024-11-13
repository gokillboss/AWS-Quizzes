import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { register } from "../../../services/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EnvelopeCheckFill } from "react-bootstrap-icons";
import "./SignUp.css";

// eslint-disable-next-line
interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    setError(null);

    // Check if password is less than 8 characters
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email address.");
      return;
    }

    setIsSubmitting(true); // Disable button while submitting

    try {
      await register({ firstName, lastName, email, password });
      setShowConfirmationModal(true);
    } catch (error: any) {
      setIsSubmitting(false); // Enable button if there's an error
      if (error.response && error.response.status === 409) {
        setError("Email is already in use.");
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
    navigate("/login");
  };

  // Navigate to Terms of Service page
  const handleTermsOfServiceClick = () => {
    navigate("/terms-of-service");
  };

  return (
    <Container className="register-container min-vh-100">
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card className="p-5 shadow-lg border-0 register-card">
            <h2 className="text-center mb-4 register-title">Create Account</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName" className="mb-3">
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      required
                      className="rounded-pill"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName" className="mb-3">
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      required
                      className="rounded-pill"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  isInvalid={!!emailError}
                  required
                  className="rounded-pill"
                />
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password field with show/hide icon */}
              <Form.Group controlId="formPassword" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="rounded-pill"
                    isInvalid={!!passwordError}
                  />

                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="icon-button d-flex align-items-center mx-3"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {passwordError}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    isInvalid={!!passwordError}
                    required
                    className="rounded-pill"
                  />
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="icon-button d-flex align-items-center mx-3"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </InputGroup>
              </Form.Group>

              {/* Terms of Service and checkbox */}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      I have read and agree to the{" "}
                      <span
                        style={{
                          color: "blue",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        onClick={handleTermsOfServiceClick}
                      >
                        Terms of Service
                      </span>
                    </>
                  }
                  checked={isAgree}
                  onChange={() => setIsAgree(!isAgree)}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 rounded-pill register-btn"
                disabled={!isAgree || isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <Modal show={showConfirmationModal} onHide={handleCloseModal} centered className="confirmation-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="w-100 text-center">Email Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <EnvelopeCheckFill className="text-primary mb-3" size={50} />
          <h4 className="mb-3">Thank you for registering!</h4>
          <p className="mb-2">
            We have sent a confirmation email to:
          </p>
          <p className="email-highlight mb-3">{email}</p>
          <p>
            Please check your inbox and click the confirmation link to complete your registration.
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center pb-4">
          <Button variant="primary" onClick={handleCloseModal} className="px-4 py-2">
            Close and Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SignUp;
