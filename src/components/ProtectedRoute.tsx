import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { fetchUserProfile } from '../api/user';

const ProtectedRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userProfile = await fetchUserProfile();
        if (userProfile === null) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch {
        setIsAuthenticated(true);
      }
    };
    checkAuthentication();
  }, []);

  if (isAuthenticated === null) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
