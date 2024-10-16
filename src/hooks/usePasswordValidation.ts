import { useState } from 'react';

interface PasswordValidationProps {
  password: string;
  confirmPassword: string;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  passwordError: string | null;
  confirmPasswordError: string | null;
  validatePassword: () => boolean;
}

export const usePasswordValidation = (): PasswordValidationProps => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

  const validatePasswordFormat = (passwordFormat: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{6,100}$/;
    return passwordRegex.test(passwordFormat);
  };

  const validatePassword = (): boolean => {
    setPasswordError(null);
    setConfirmPasswordError(null);

    let isValid = true;

    if (!validatePasswordFormat(password)) {
      setPasswordError(
        'Password must have between 6 and 100 characters, at least one uppercase letter, one digit and one special character.'
      );
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    return isValid;
  };

  return {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    passwordError,
    confirmPasswordError,
    validatePassword
  };
};
