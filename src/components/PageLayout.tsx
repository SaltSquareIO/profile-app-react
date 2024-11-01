import React from 'react';
import homeBackground from '../assets/images/homeBackground.jpg';
import CustomAppBar from './CustomAppBar';
import { Box } from '@mui/material';

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
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
      {children}
    </Box>
  );
};

export default PageLayout;
