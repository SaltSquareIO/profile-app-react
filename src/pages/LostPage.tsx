import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import { Box, Typography } from '@mui/material';

const LostPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary.main'
      }}>
      <Typography
        variant="h2"
        sx={{
          position: 'absolute',
          top: '3rem',
          textShadow: '0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.4)',
          fontWeight: 'bold',
          fontSize: '2.5rem'
        }}>
        Oops, are you lost?
      </Typography>
      <BackgroundVideo />
    </Box>
  );
};

export default LostPage;
