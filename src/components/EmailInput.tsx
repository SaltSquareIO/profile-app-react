import React from 'react';
import { TextField } from '@mui/material';

interface EmailInputProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
  error?: string | null;
}

const EmailInput: React.FC<EmailInputProps> = ({ id, value, setValue, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      error={!!error}
      helperText={error}
      required
    />
  );
};

export default EmailInput;
