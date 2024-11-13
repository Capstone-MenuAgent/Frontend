import React from 'react';
import styles from '../../styles/Header1.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header1 = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
      <Button variant="secondary" className={styles.logo}>먹 지</Button>{' '}  
      </Link>
      <div className={styles.headerButtons}>
      <Link to='/LoginPage'>  
        <Button variant='dark'>로그인</Button>
      </Link>
      <Link to='/SignupPage'>
        <Button variant='dark' className='ms-2'>회원가입</Button>
      </Link>
      </div>
    </header>
  );
};

export default Header1;