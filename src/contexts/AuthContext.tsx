import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchUserProfile } from '../api/user';

interface AuthContextProps {
  isAuthenticated: boolean | null;
  refreshAuthentication: () => Promise<void>;
  login: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: null,
  refreshAuthentication: async () => {},
  login: () => {}
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const refreshAuthentication = async (retryCount = 0) => {
    try {
      const userProfile = await fetchUserProfile();
      setIsAuthenticated(userProfile !== null);
    } catch {
      if (retryCount < 3) {
        setTimeout(() => refreshAuthentication(retryCount + 1), 5000);
      } else {
        setIsAuthenticated(false);
      }
    }
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    refreshAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, refreshAuthentication, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
