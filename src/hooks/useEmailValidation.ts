import { useState } from 'react';

interface EmailValidationProps {
  email: string;
  setEmail: (email: string) => void;
  emailError: string | null;
  validateEmail: () => boolean;
}

export const useEmailValidation = (): EmailValidationProps => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmailFormat = (emailFormat: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailFormat);
  };

  const validateEmail = (): boolean => {
    setEmailError(null);

    if (!validateEmailFormat(email)) {
      setEmailError('Invalid email address format.');
      return false;
    }

    return true;
  };

  return {
    email,
    setEmail,
    emailError,
    validateEmail
  };
};
