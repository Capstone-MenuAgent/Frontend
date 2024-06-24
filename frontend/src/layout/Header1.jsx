import React from 'react';
import styles from '../styles/Header1.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header1 = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
      <Button variant="secondary">로고위치</Button>{' '}  
      </Link>
      <div className={styles.headerButtons}>
      <Link to='/LoginPage'>  
        <button className={styles.headerButton}>로그인</button>
      </Link>
      <Link to='/SignupPage'>
        <button className={styles.headerButton}>회원가입</button>
      </Link>
      </div>
    </header>
  );
};

export default Header1;