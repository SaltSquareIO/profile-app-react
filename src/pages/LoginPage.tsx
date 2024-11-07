import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { loginUser } from '../api/auth';
import { fetchUserProfile } from '../api/user';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userProfile = await fetchUserProfile();
        if (userProfile) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking authentication ', error);
      }
    };
    checkAuthentication();
  }, [navigate]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody = {
      email,
      password
    };

    try {
      const response = await loginUser(requestBody);

      if (response.ok) {
        navigate('/');
      } else {
        setLoginError('Incorrect email or password.');
      }
    } catch (error) {
      setLoginError('Incorrect email or password.');
    }
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => {
    setter(value);
    if (loginError) {
      setLoginError(null);
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
      <EmailInput
        id="email-input-field"
        value={email}
        setValue={(value) => handleInputChange(setEmail, value)}
      />
      <PasswordInput
        id="password-input-field"
        value={password}
        label="Password"
        setValue={(value) => handleInputChange(setPassword, value)}
      />
      {loginError && (
        <Typography color="error" align="center" sx={{ marginTop: '0.5rem' }}>
          {loginError}
        </Typography>
      )}
    </Form>
  );
};
export default LoginPage;
