import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoginPopup from './LoginPopup';

const ProtectedRoute = ({ children }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    // Kiểm tra authentication khi component mount hoặc location thay đổi
    if (!isAuthenticated) {
      setShowLoginPopup(true);
    } else {
      setShowLoginPopup(false);
    }
  }, [location, isAuthenticated]);

  const handleCloseLoginPopup = () => {
    // Nếu đã đăng nhập sau khi đóng popup, ẩn popup
    if (isAuthenticated) {
      setShowLoginPopup(false);
    }
  };

  // Nếu chưa đăng nhập, hiển thị LoginPopup
  if (!isAuthenticated) {
    return (
      <>
        {children}
        <LoginPopup 
          isOpen={showLoginPopup} 
          onClose={handleCloseLoginPopup}
        />
      </>
    );
  }

  // Nếu đã đăng nhập, hiển thị nội dung được bảo vệ
  return children;
};

export default ProtectedRoute; 