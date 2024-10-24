import React from 'react';
import { TextField } from '@mui/material';

interface EmailInputProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
  error?: string | null;
  onBlur?: () => void;
  clearFieldError?: () => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  id,
  value,
  setValue,
  error,
  onBlur,
  clearFieldError
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (clearFieldError) {
      clearFieldError();
    }
  };

  return (
    <TextField
      id={id}
      label="Email"
      margin="normal"
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      error={!!error}
      helperText={error}
      required
    />
  );
};

export default EmailInput;
