import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default'
      }}>
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.1875rem',
          boxShadow: '0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.3)'
        }}>
        <Typography variant="h5" sx={{ padding: '1rem', color: 'text.primary' }}>
          Error
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          An error occurred while loading the requested data. Please try again later.
        </Typography>
        <Button
          id="back-to-home-button"
          variant="contained"
          onClick={() => navigate('/')}
          sx={{ marginTop: '1.5rem' }}>
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
