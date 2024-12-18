import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegistrationPage />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      }
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
