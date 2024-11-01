import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../assets/styles/theme';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default RootLayout;
