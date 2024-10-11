import React from 'react';
import { TextField } from '@mui/material';

interface EmailInputProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ id, value, setValue }) => {
  return (
    <TextField
      id={id}
      label="Email"
      margin="normal"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EmailInput;
