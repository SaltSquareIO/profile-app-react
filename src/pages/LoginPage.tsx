import React, { useState } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { Link } from 'react-router-dom';
import { Colors } from '../assets/styles/colors';

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

  return (
    <Form
      title="Login"
      onSubmit={handleLogin}
      submitButtonText="Login"
      navigationText={
        <>
          New user?{' '}
          <Link to="/register" style={{ textDecoration: 'none', color: Colors.green }}>
            Register here!
          </Link>
        </>
      }>
      <EmailInput id="email-input-field" value={email} setValue={setEmail} />
      <PasswordInput id="password-input-field" value={password} setValue={setPassword} />
    </Form>
  );
};
export default LoginPage;
