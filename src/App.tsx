import React from 'react';
import RegistrationPage from './pages/RegistrationPage';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegistrationPage />
    </ThemeProvider>
  );
}

export default App;
