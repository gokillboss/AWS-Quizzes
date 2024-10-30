import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle, BoxArrowRight, Clipboard, PencilSquare } from "react-bootstrap-icons";
import { jwtDecode } from "jwt-decode";
import "./Navbar.css";

// Define the type for the decoded token
interface DecodedToken {
  exp: number;
}

const Header: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
      const decodedToken = jwtDecode<DecodedToken>(token);
      return decodedToken.exp > Date.now() / 1000;
    } catch (error) {
      localStorage.removeItem("token");
      return false;
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-weight-bold">
          AWS Certification
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {isAuthenticated() ? (
              <>
                <Nav.Link as={Link} to="/quizzes" className="custom-link mx-2">
                  <Clipboard className="me-1" /> Quizzes
                </Nav.Link>
                <Nav.Link as={Link} to="/exam" className="custom-link mx-2">
                  <PencilSquare className="me-1" /> Practice Exam
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="custom-link mx-2">
                  <PersonCircle size={30} />
                </Nav.Link>
                <Button
                  variant="outline-light"
                  onClick={handleLogout}
                  className="custom-button ms-2"
                >
                  <BoxArrowRight size={15} />
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="custom-link mx-2">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="custom-link mx-2">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
