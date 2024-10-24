import React, { useState } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody = {
      email,
      password
    };

    try {
      const response = await fetch('/auth/login', {
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
        console.error('Login failed: ', errorData);
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
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
