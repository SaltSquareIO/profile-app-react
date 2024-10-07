import React from 'react';
import RegistrationPage from './pages/RegistrationPage';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';

const router = createBrowserRouter([
  {
    path: '/register',
    element: (
      <ThemeProvider theme={theme}>
        <RegistrationPage />
      </ThemeProvider>
    )
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
