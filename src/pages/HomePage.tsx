import React from 'react';
import homeBackground from '../assets/images/homeBackground.jpg';
import { Box } from '@mui/material';
import CustomAppBar from '../components/CustomAppBar';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <CustomAppBar />
    </Box>
  );
};

export default HomePage;
