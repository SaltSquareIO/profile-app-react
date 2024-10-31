import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { verifyAuthentication } from '../api/auth';

const ProtectedRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    const checkAuthentication = async () => {
      const response = await verifyAuthentication();
      setIsAuthenticated(response);
    };
    checkAuthentication();
  }, []);

  if (isAuthenticated === null) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
