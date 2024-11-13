import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accesstoken'); // 로컬스토리지에서 토큰 확인

  if (token === null || token === undefined) {
    return <Navigate to="/LoginPage" />; // 토큰이 없으면 로그인 페이지로 리다이렉트
  }

  return children; // 토큰이 있으면 해당 컴포넌트 렌더링
};

export default ProtectedRoute;