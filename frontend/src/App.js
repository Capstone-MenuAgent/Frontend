import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header2';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage.jsx';
import SignupPage from './pages/SignupPage';
import HelloPage from './pages/HelloPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx'
import InformationPage from './pages/InformationPage.jsx';
import MainPageSub from './pages/MainPageSub.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloPage />}></Route>
        <Route path="/Hellopage" element={<HelloPage />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/SignupPage" element={<SignupPage />}></Route>
        <Route path="/Mainpage" element={<MainPage />}></Route>
        <Route path="/MainpageSub" element={<MainPageSub />} />
        <Route path="/HistoryPage" element={<HistoryPage />}></Route>
        <Route path="/InformationPage" element={<InformationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
