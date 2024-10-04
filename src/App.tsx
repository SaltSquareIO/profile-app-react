import React from 'react';
import LoginPage from './pages/LoginPage';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
