import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import { useEmailValidation } from '../hooks/useEmailValidation';

const RegistrationPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const { email, setEmail, emailError, handleEmailBlur } = useEmailValidation();

  const {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    passwordError,
    confirmPasswordError,
    validatePassword
  } = usePasswordValidation();

  useEffect(() => {
    setIsFormValid(email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '');
  }, [email, password, confirmPassword]);

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    if (!validatePassword()) {
      hasError = true;
    }

    if (!hasError) {
      console.log('First Name: ', firstName);
      console.log('Last Name: ', lastName);
      console.log('Email: ', email);
      console.log('Password: ', password);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
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
        error={emailError}
        onBlur={handleEmailBlur}
      />
      <PasswordInput
        id="password-input-field"
        value={password}
        label="Password"
        setValue={setPassword}
        error={passwordError}
      />
      <PasswordInput
        id="confirm-password-input-field"
        value={confirmPassword}
        label="Confirm"
        setValue={setConfirmPassword}
        error={confirmPasswordError}
      />
    </Form>
  );
};

export default RegistrationPage;
