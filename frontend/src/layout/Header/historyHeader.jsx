// src/Header.js
import React from 'react';
import styles from '../../styles/Header2.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Header2 = () => {
  const navigation = useNavigate()

  async function Logout() {
    try {
      // 로그아웃 요청을 기다림
      const response = await axios.get('/logout');
      
      // 로그아웃 요청이 성공한 경우에만 토큰 삭제
      if (response.status === 200) {
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshtoken");
        navigation('/');  // 로그아웃 후 메인 페이지로 이동
      } else {
        console.error("Logout failed:", response.status);
      }
    } catch (e) {
      console.error("Error during logout:", e);
    }
    
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");    
    navigation('/');
  }

  return (
    <header className={styles.header}>
      <Link to='/'>
      <Button variant="secondary" style={{width:'5vw'}}>먹 지</Button>{' '}   
      </Link>
      <div>
        <Link to='/MainPage'>
        <Button variant='dark'>메인페이지</Button>
        </Link>
        <Button variant='dark' className='ms-2' onClick={Logout}>로그아웃</Button>
        <Link to='/InformationPage'>
        <Button variant='dark' className='ms-2'>정보수정</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header2;