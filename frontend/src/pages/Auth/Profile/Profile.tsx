import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { getUserProfile, updateUserProfile } from "../../../services/api";
import ChangePassword from "../../../components/ChangePassword/ChangePassword";
import "./Profile.css";

// Define the structure of the user profile
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);

  // Close the password modal
  const handleClosePasswordModal = () => setShowPasswordModal(false);

  // Open the password modal
  const handleShowPasswordModal = () => setShowPasswordModal(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const res = await getUserProfile();
        setProfile(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setPhone(res.data.phoneNumber);
      } catch (error) {
        console.error("Error fetching profile", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    // Send JSON data instead of FormData
    const profileData = {
      firstName,
      lastName,
      phone,
    };

    try {
      const res = await updateUserProfile(profileData);
      setProfile(res.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="profile-page d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Container fluid>
        <Row className="justify-content-center mt-5 min-vh-100">
          <Col md={8} lg={6} xl={5}>
            <div className="profile-card">
              <div className="profile-header d-flex justify-content-between align-items-center">
                <h1>Profile Information</h1>
                {!isEditing && (
                  <Button
                    variant="link"
                    onClick={() => setIsEditing(true)}
                    className="edit-button"
                    disabled={isSaving}
                  >
                    <PencilSquare size={40} />
                  </Button>
                )}
              </div>
              <div className="profile-body">
                {!isEditing ? (
                  <div className="profile-info">
                    <div className="info-item">
                      <span className="info-label">Full Name</span>
                      <span className="info-value">
                        {profile?.firstName} {profile?.lastName}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email</span>
                      <span className="info-value">{profile?.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone Number</span>
                      <span className="info-value">{profile?.phoneNumber}</span>
                    </div>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName" className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                        disabled={isSaving}
                      />
                    </Form.Group>

                    <Form.Group controlId="formLastName" className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                        disabled={isSaving}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mb-4">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        disabled={isSaving}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            <span className="ms-2">Saving...</span>
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => setIsEditing(false)}
                        disabled={isSaving}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
              <div className="profile-footer">
                <Button
                  variant="outline-primary"
                  className="change-password-btn"
                  onClick={handleShowPasswordModal}
                  disabled={isEditing || isSaving}
                >
                  Change Password
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Call ChangePassword component */}
      <ChangePassword
        show={showPasswordModal}
        handleClose={handleClosePasswordModal}
        className="d-flex justify-content-center align-items-center mx-auto"
      />
    </div>
  );
};

export default Profile;
