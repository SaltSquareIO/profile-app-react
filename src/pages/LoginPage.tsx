import React from 'react';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';

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
        <Paper
          elevation={3}
          sx={{ padding: 4, width: '100%', backgroundColor: 'background.paper' }}>
          <Typography variant="h4" gutterBottom align="center" color="primary">
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
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Login
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
