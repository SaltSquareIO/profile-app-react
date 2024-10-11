import React, { useState } from 'react';
import { OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordInputProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ id, value, setValue }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel htmlFor={id}>Password</InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
              id="password-visibility-button">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        fullWidth
        label="Password"
      />
    </FormControl>
  );
};

export default PasswordInput;
