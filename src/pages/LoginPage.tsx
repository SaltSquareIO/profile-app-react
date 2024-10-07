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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Email: ', email);
    console.log('Password: ', password);

    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '45vw'
      }}>
      <Paper
        elevation={3}
        sx={{
          padding: '3rem',
          width: '25rem',
          margin: '2rem 2rem',
          borderRadius: 3,
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)'
        }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          color="primary"
          sx={{
            fontSize: '2rem'
          }}>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginBottom: '2rem'
          }}>
          <TextField
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              inputRef={passwordInputRef}
              onChange={(e) => setPassword(e.target.value)}
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
              fullWidth
              label="Password"
              required
            />
          </FormControl>
          <Button variant="contained" color="primary" sx={{ marginTop: '1rem' }} type="submit">
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
export default LoginPage;
