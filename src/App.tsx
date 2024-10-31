import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <HomePage /> }]
      },
      {
        path: '/register',
        element: <RegistrationPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/profile',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <ProfilePage /> }]
      }
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
