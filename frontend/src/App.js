import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header2';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage.jsx';
import SignupPage from './pages/SignupPage';
import HelloPage from './pages/HelloPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloPage />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/SignupPage" element={<SignupPage />}></Route>
        {/* <Route path="/Mainpage" element={<MainPage />}></Route>
        <Route path="/History" element={<History />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
