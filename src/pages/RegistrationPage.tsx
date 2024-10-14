import React, { useState } from 'react';
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

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('First Name: ', firstName);
    console.log('Last Name: ', lastName);
    console.log('Email: ', email);
    console.log('Password: ', password);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
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
      <EmailInput id="email-input-field" value={email} setValue={setEmail} />
      <PasswordInput id="password-input-field" value={password} setValue={setPassword} />
    </Form>
  );
};
export default RegistrationPage;
