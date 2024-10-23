import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import { useEmailValidation } from '../hooks/useEmailValidation';
import ErrorModal from '../components/ErrorModal';

const RegistrationPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [emailFieldError, setEmailFieldError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [resetField, setResetField] = useState<boolean>(false);

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
    if (resetField) {
      setResetField(false);
    }
  }, [email, password, confirmPassword, resetField]);

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
        console.log(requestBody);
        const response = await fetch('/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });

        if (response.ok) {
          window.location.href = '/home';
        } else {
          const errorData = await response.json();

          if (response.status === 406) {
            setEmailFieldError('User with this email already exists.');
          } else {
            setServerError('Something went wrong, please try again!');
            setIsModalOpen(true);
          }
          console.error('Failed to register', errorData);
        }
      } catch (error) {
        console.error('An error occurred during registration', error);
        setServerError('Something went wrong, please try again!');
        setIsModalOpen(true);
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setEmailFieldError(null);
    setResetField(true);
  };

  const navigationText = (
    <>
      Already have an account?{' '}
      <Link component={RouterLink} to="/">
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
        />
        <PasswordInput
          id="password-input-field"
          value={password}
          label="Password"
          setValue={setPassword}
          error={passwordError}
          onBlur={handlePasswordBlur}
          reset={resetField}
        />
        <PasswordInput
          id="confirm-password-input-field"
          value={confirmPassword}
          label="Confirm"
          setValue={setConfirmPassword}
          error={confirmPasswordError}
          onBlur={handlePasswordBlur}
          reset={resetField}
        />
      </Form>
      <ErrorModal isOpen={isModalOpen} description={serverError} onClose={handleModalClose} />
    </>
  );
};

export default RegistrationPage;
