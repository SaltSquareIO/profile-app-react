import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import LostPage from './pages/LostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegistrationPage />
  },
  {
    path: '/are-you-lost',
    element: <LostPage />
  },
  {
    path: '*',
    element: <Navigate to="/are-you-lost" replace />
  }
]);

const App: React.FC = () => {
  return (
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  );
};

export default App;
