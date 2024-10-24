import React from 'react';
import homeBackground from '../assets/images/homeBackground.jpg';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></Box>
  );
};

export default HomePage;
