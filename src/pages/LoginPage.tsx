import React, { useState } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Email: ', email);
    console.log('Password: ', password);

    setEmail('');
    setPassword('');
  };

  const navigationText = (
    <>
      New user?{' '}
      <Link component={RouterLink} to="/register">
        Register here!
      </Link>
    </>
  );

  return (
    <Form
      title="Login"
      onSubmit={handleLogin}
      submitButtonText="Login"
      navigationText={navigationText}>
      <EmailInput id="email-input-field" value={email} setValue={setEmail} />
      <PasswordInput
        id="password-input-field"
        value={password}
        label="Password"
        setValue={setPassword}
      />
    </Form>
  );
};
export default LoginPage;
