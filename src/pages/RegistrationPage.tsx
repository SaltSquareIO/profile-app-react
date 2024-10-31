import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import { useEmailValidation } from '../hooks/useEmailValidation';
import ErrorModal from '../components/ErrorModal';
import { registerUser } from '../api/auth';

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [emailFieldError, setEmailFieldError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { email, setEmail, emailError, handleEmailBlur } = useEmailValidation();

  const {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    passwordError,
    confirmPasswordError,
    handlePasswordBlur
  } = usePasswordValidation();

  useEffect(() => {
    setIsFormValid(email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '');
  }, [email, password, confirmPassword]);

  const handleRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    if (emailError || passwordError || confirmPasswordError) {
      hasError = true;
    }

    if (!hasError) {
      const requestBody = {
        email,
        password,
        firstName: firstName || 'FName',
        lastName: lastName || 'LName',
        gender: 'DECLINE_TO_IDENTIFY'
      };
      try {
        const response = await registerUser(requestBody);

        if (response.ok) {
          navigate('/');
        } else {
          if (response.status === 406) {
            setEmailFieldError('User with this email already exists.');
          } else {
            setServerError('Something went wrong, please try again!');
            setIsModalOpen(true);
          }
        }
      } catch (error) {
        setServerError('Something went wrong, please try again!');
        setIsModalOpen(true);
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const clearFieldError = () => {
    setEmailFieldError(null);
  };

  const navigationText = (
    <>
      Already have an account?{' '}
      <Link component={RouterLink} to="/login">
        Log in here!
      </Link>
    </>
  );

  return (
    <>
      <Form
        title="Registration"
        onSubmit={handleRegistration}
        isSubmitButtonDisabled={!isFormValid}
        submitButtonText="Register"
        navigationText={navigationText}>
        <NameInput
          id="first-name-input-field"
          label="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <NameInput
          id="last-name-input-field"
          label="Last Name"
          value={lastName}
          setValue={setLastName}
        />
        <EmailInput
          id="email-input-field"
          value={email}
          setValue={setEmail}
          error={emailFieldError ?? emailError}
          onBlur={handleEmailBlur}
          clearFieldError={clearFieldError}
        />
        <PasswordInput
          id="password-input-field"
          value={password}
          label="Password"
          setValue={setPassword}
          error={passwordError}
          onBlur={handlePasswordBlur}
        />
        <PasswordInput
          id="confirm-password-input-field"
          value={confirmPassword}
          label="Confirm"
          setValue={setConfirmPassword}
          error={confirmPasswordError}
          onBlur={handlePasswordBlur}
        />
      </Form>
      <ErrorModal isOpen={isModalOpen} description={serverError} onClose={handleModalClose} />
    </>
  );
};

export default RegistrationPage;
