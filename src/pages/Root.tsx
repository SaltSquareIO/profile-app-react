import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from '../assets/styles/theme';

const RootLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default RootLayout;
