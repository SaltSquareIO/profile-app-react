import { useState } from 'react';

interface PasswordValidationProps {
  password: string;
  confirmPassword: string;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  passwordError: string | null;
  confirmPasswordError: string | null;
  handlePasswordBlur: () => void;
  handleConfirmPasswordBlur: () => void;
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

  const handlePasswordBlur = () => {
    if (!validatePasswordFormat(password)) {
      setPasswordError(
        'Password must have between 6 and 100 characters, at least one uppercase letter, one digit and one special character.'
      );
    } else {
      setPasswordError(null);
    }
  };
  const handleConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError(null);
    }
  };

  return {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    passwordError,
    confirmPasswordError,
    handlePasswordBlur,
    handleConfirmPasswordBlur
  };
};
