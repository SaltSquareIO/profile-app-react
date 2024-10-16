import React, { useState } from 'react';
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  FormHelperText
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordInputProps {
  id: string;
  value: string;
  label: string;
  setValue: (value: string) => void;
  error?: string | null;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ id, value, label, setValue, error }) => {
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
      <InputLabel htmlFor={id} required={true} error={!!error}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        required={true}
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
        label={label}
        error={!!error}
      />
      {error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;
