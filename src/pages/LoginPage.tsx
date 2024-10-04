import React from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '40%'
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
  );
};
export default LoginPage;
