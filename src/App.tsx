import React from 'react';
import LoginPage from './pages/LoginPage';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#16423C'
    },
    secondary: {
      main: '#6A9C89'
    },
    background: {
      paper: '#E9EFEC'
    },
    text: {
      primary: '#16423C'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
