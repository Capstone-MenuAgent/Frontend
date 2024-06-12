// src/HelloPage.js
import React from 'react';
import Header from '../layout/Header1';
import styles from '../styles/HelloPage.module.css';
import { Link } from 'react-router-dom';

function HelloPage() {
  return (
    <div className={styles.HelloPage}>
      <Header />
      <div className={styles.HelloContent}>
        <p className={styles.HelloText}>
          선택하기 어려운 점심,<br />
          누군가가 결정해주면 좋을 것 같다는 생각 안해보셨나요?<br /><br />
          ****가 해드립니다.
        </p>
        <Link to='/LoginPage'>
          <button className={styles.startButton}>시작하기</button>
        </Link>
        <div className={styles.indicatorContainer}>
          <div className={styles.indicator}></div>
          <div className={`${styles.indicator} ${styles.indicatorInactive}`}></div>
        </div>
      </div>
    </div>
  );
}

export default HelloPage;