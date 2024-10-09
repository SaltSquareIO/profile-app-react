import React, { useState } from 'react';
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Input: React.FC<{
  id: string;
  label: string;
  type: 'text' | 'password';
  value: string;
  setValue: (value: string) => void;
}> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return props.type === 'password' ? (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <OutlinedInput
        id={props.id}
        type={showPassword ? 'text' : 'password'}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
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
        label={props.label}
      />
    </FormControl>
  ) : (
    <TextField
      id={props.id}
      label={props.label}
      margin="normal"
      variant="outlined"
      fullWidth
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
};

export default Input;
