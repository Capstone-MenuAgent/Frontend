// src/Header.js
import React from 'react';
import styles from '../styles/Header2.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Header2 = () => {
  const navigation = useNavigate()

  async function Logout() {
    const data = '';
    try {
      const reponse = await axios.get('/logout');
      data = reponse.data;
      console.log(data);
    } catch(e) {
      console.error(e);
    }
    if(data === 'success'){
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      navigation('/');
    };
    navigation('/HelloPage');
  }

  return (
    <header className={styles.header}>
      <Link to='/'>
      <Button variant="secondary">로고위치</Button>     
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