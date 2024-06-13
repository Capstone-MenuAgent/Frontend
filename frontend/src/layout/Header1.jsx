import React from 'react';
import styles from '../styles/Header1.module.css';
import { Link } from 'react-router-dom';

const Header1 = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <div className={styles.logo}>로고위치</div>
      </Link>
      <div className={styles.headerButtons}>
      <Link to="/LoginPage">
        <button className={styles.headerButton}>로그인</button>
      </Link>
      <Link to="/SignupPage">
        <button className={styles.headerButton}>회원가입</button>
        </Link>
      </div>
    </header>
  );
};

export default Header1;