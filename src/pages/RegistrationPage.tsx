import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateEmail = (emailFormat: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailFormat);
  };

  const validatePassword = (passwordFormat: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{6,100}$/;
    return passwordRegex.test(passwordFormat);
  };

  useEffect(() => {
    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmailError(null);
    setPasswordError(null);
    let hasError = false;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address format.');
      hasError = true;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must have between 6 and 100 characters, at least one uppercase letter, one digit and one special character.'
      );
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
      <EmailInput id="email-input-field" value={email} setValue={setEmail} error={emailError} />
      <PasswordInput
        id="password-input-field"
        value={password}
        setValue={setPassword}
        error={passwordError}
      />
    </Form>
  );
};

export default RegistrationPage;
