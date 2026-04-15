import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  const checkAuth = () => {
    const address = localStorage.getItem('a');
    const hasValidAddress = address && address.trim() !== '';
    setIsAuthenticated(hasValidAddress);
    setWalletAddress(hasValidAddress ? address : null);
    return hasValidAddress;
  };

  const login = (address) => {
    localStorage.setItem('a', address);
    setIsAuthenticated(true);
    setWalletAddress(address);
  };

  const logout = () => {
    localStorage.removeItem('a');
    setIsAuthenticated(false);
    setWalletAddress(null);
  };

  useEffect(() => {
    checkAuth();
    
    // Listen for storage changes (in case localStorage is modified from another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'a') {
        checkAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return {
    isAuthenticated,
    walletAddress,
    checkAuth,
    login,
    logout
  };
}; 