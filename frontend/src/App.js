import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header/loginHeader.jsx';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage.jsx';
import SignupPage from './pages/SignupPage';
import HelloPage from './pages/HelloPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx'
import InformationPage from './pages/InformationPage.jsx';
import MainPageSub from './pages/MainPage.jsx';
import ProtectedRoute from './route/ProtectRoute.jsx'; // ProtectedRoute 임포트

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공개된 경로 */}
        <Route path="/" element={<HelloPage />} />
        <Route path="/Hellopage" element={<HelloPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />

        {/* 보호된 경로 */}
        <Route path="/Mainpage" element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        } />
        <Route path="/MainpageSub" element={
          <ProtectedRoute>
            <MainPageSub />
          </ProtectedRoute>
        } />
        <Route path="/HistoryPage" element={
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        } />
        <Route path="/InformationPage" element={
          <ProtectedRoute>
            <InformationPage />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;