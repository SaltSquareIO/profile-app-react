import React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        padding={2}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button>Login</Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
