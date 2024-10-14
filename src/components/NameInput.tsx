import React from 'react';
import { TextField } from '@mui/material';

interface NameInputProps {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ id, label, value, setValue }) => {
  return (
    <TextField
      id={id}
      label={label}
      margin="normal"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default NameInput;
