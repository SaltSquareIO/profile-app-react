import React, { useState } from 'react';
import Form from '../components/Form';
import Input from '../components/Input';

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
    <Form title="Login" onSubmit={handleLogin} submitButton="Login">
      <Input id="email-input-field" label="Email" type="text" value={email} setValue={setEmail} />
      <Input
        id="password-input-field"
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />
    </Form>
  );
};
export default LoginPage;
