import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchUserProfile } from '../api/user';
import { logoutUser } from '../api/auth';

interface AuthContextProps {
  isAuthenticated: boolean | null;
  refreshAuthentication: () => Promise<void>;
  login: () => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: null,
  refreshAuthentication: async () => {},
  login: () => {},
  logout: async () => {}
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error during logout:', error);
    }
    setIsAuthenticated(false);
  };

  const refreshAuthentication = async (retryCount = 0) => {
    try {
      const userProfile = await fetchUserProfile();
      setIsAuthenticated(userProfile !== null);
      retryCount = 0;
    } catch {
      if (retryCount < 3) {
        console.log('retry ', retryCount);
        setTimeout(() => refreshAuthentication(retryCount + 1), 5000);
      } else {
        await logout();
      }
    }
  };

  const login = async () => {
    setIsAuthenticated(true);
    await refreshAuthentication();
  };

  useEffect(() => {
    refreshAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, refreshAuthentication, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
