import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
import { Link } from 'react-router-dom';
import { Colors } from '../assets/styles/colors';

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
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

  return (
    <Form
      title="Registration"
      onSubmit={handleRegistration}
      isSubmitButtonDisabled={!isFormValid}
      submitButtonText="Register"
      navigationText={
        <>
          Already have an account?{' '}
          <Link to="/" style={{ textDecoration: 'none', color: Colors.green }}>
            Log in here!
          </Link>
        </>
      }>
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
