import { useState } from 'react';

interface EmailValidationProps {
  email: string;
  setEmail: (email: string) => void;
  emailError: string | null;
  handleEmailBlur: () => void;
}

export const useEmailValidation = (): EmailValidationProps => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmailFormat = (emailFormat: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailFormat);
  };

  const handleEmailBlur = () => {
    if (!validateEmailFormat(email) && email.trim() !== '') {
      setEmailError('Invalid email address format.');
    } else {
      setEmailError(null);
    }
  };

  return {
    email,
    setEmail,
    emailError,
    handleEmailBlur
  };
};
