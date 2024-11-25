import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

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
  }
]);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RootLayout>
        <RouterProvider router={router} />
      </RootLayout>
    </AuthProvider>
  );
};

export default App;
