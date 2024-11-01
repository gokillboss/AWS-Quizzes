import React, { useState } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import { updatePassword } from "../../services/api";
import { PasswordData } from "../../types/PasswordData";

interface ChangePasswordProps {
  show: boolean;
  handleClose: () => void;
}

interface ChangePasswordProps {
  show: boolean;
  handleClose: () => void;
  className?: string; // Add className as an optional prop
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ show, handleClose }) => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isChangingPassword, setIsChangingPassword] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  // Function to handle password change
  const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate that the new password is different from the current password
    if (newPassword === currentPassword) {
      setPasswordError("The new password must be different from the current password.");
      return;
    }

    // Validate that the new password matches the confirm password
    if (newPassword !== confirmPassword) {
      setPasswordError("The new password and confirmation do not match.");
      return;
    }

    // Reset error and start the change process
    setIsChangingPassword(true);
    setPasswordError("");

    try {
      // Call the API to update the password
      const passwordData: PasswordData = { currentPassword: currentPassword, newPassword: newPassword, oldPassword: currentPassword };
      await updatePassword(passwordData);

      // Show success modal if the password update is successful
      setShowSuccessModal(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message || "Incorrect current password.";
        setPasswordError(errorMessage);
      } else {
        setPasswordError("An error occurred while changing the password.");
      }
    } finally {
      setIsChangingPassword(false);
    }
  };

  // Close the success modal
  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose(); // Close the main modal after success
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-center align-items-center w-100">
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePasswordChange}>
            <Form.Group controlId="currentPassword" className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                required
              />
            </Form.Group>

            <Form.Group controlId="newPassword" className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
              />
            </Form.Group>

            {passwordError && (
              <div style={{ color: "red", fontWeight: "bold" }} className="mb-3">
                {passwordError}
              </div>
            )}

            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="primary"
                type="submit"
                disabled={isChangingPassword}
                className="w-100"
              >
                {isChangingPassword ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="ms-2">Changing password...</span>
                  </>
                ) : (
                  "Confirm"
                )}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSuccessModal} onHide={handleSuccessClose} centered>
        <Modal.Body className="text-center">
          <p>Password changed successfully!</p>
          <Button
            className="d-flex justify-content-center align-items-center mx-auto"
            variant="primary"
            onClick={handleSuccessClose}
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChangePassword;
