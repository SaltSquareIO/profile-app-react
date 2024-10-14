import React from 'react';
import { TextField } from '@mui/material';

interface EmailInputProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ id, value, setValue }) => {
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
      required
    />
  );
};

export default EmailInput;
