import React, { useState, useRef } from 'react';
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleClickShowPassword = () => {
    if (passwordInputRef.current) {
      const cursorPosition = passwordInputRef.current.selectionStart;
      setShowPassword((prev) => !prev);
      setTimeout(() => {
        if (passwordInputRef.current) {
          passwordInputRef.current.setSelectionRange(cursorPosition!, cursorPosition!);
        }
      }, 0);
    }
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '45%'
      }}>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: 400,
          height: 350,
          margin: 'auto',
          borderRadius: 2,
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)'
        }}>
        <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ padding: 2 }}>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            inputRef={passwordInputRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};
export default LoginPage;
