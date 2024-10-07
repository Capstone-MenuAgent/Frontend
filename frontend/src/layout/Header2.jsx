// src/Header.js
import React from 'react';
import styles from '../styles/Header2.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header2 = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
      <Button variant="secondary">로고위치</Button>{' '}     
      </Link>
      <div>
        <Link to='/InformationPage'>
        <Button variant='dark'>정보수정</Button>
        </Link>
        <Link to='/HistoryPage'>
        <Button variant='dark' className='ms-2'>사용기록</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header2;