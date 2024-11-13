// src/Header.js
import React from 'react';
import styles from '../../styles/Header2.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Header2 = () => {
  const navigation = useNavigate()

  async function Logout() {
    // try {
    //   // 로그아웃 요청을 기다림
    //   const response = await axios.get('/api/v1/member/quit');
      
    //   // 로그아웃 요청이 성공한 경우에만 토큰 삭제
    //   if (response.status === 200) {
    //     localStorage.removeItem("accesstoken");
    //     localStorage.removeItem("refreshtoken");
    //     navigation('/');  // 로그아웃 후 메인 페이지로 이동
    //   } else {
    //     console.error("Logout failed:", response.status);
    //   }
    // } catch (e) {
    //   console.error("Error during logout:", e);
    // }
    
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");    
    navigation('/');
    window.location.reload();
    alert('로그아웃 되었습니다.');
  }

  return (
    <header className={styles.header}>
      <Link to='/'>
      <Button variant="secondary" style={{width:'5vw'}}>먹 지</Button>{' '}   
      </Link>
      <div>
        <Button variant='dark' onClick={Logout}>로그아웃</Button>
        <Link to='/InformationPage'>
        <Button variant='dark' className='ms-2'>정보수정</Button>
        </Link>
        <Link to='/HistoryPage'>
        <Button variant='dark' className='ms-2'>사용기록</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header2;