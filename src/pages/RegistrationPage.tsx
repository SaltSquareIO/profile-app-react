import React, { useState } from 'react';
import Form from '../components/Form';
import Input from '../components/Input';

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

  return (
    <Form title="Registration" onSubmit={handleRegistration} submitButtonText="Register">
      <Input
        id="first-name-input-field"
        label="First Name"
        type="text"
        value={firstName}
        setValue={setFirstName}
      />
      <Input
        id="last-name-input-field"
        label="Last Name"
        type="text"
        value={lastName}
        setValue={setLastName}
      />
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
export default RegistrationPage;
