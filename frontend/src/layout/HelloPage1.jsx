import React, { useEffect, useState } from 'react';
import Header1 from './Header/Header';
import Header2 from './Header/loginHeader';
import styles from '../styles/HelloPage.module.css';
import { Link } from 'react-router-dom';


function HelloPage1() {
  const [login, setLogin] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('accesstoken')!=undefined)
      setLogin(true);
    else
      setLogin(false);
  }, [])

  return (
    <div className={styles.divStyle}>
      <div className={styles.mainPage}>
        {login ? <Header2 /> : <Header1 />}
        <div>
          <div className={styles.mainContent}>
            <p className={styles.mainText}>
              선택하기 어려운 점심,<br />
              누군가가 결정해주면 좋을 것 같다는 생각 안해보셨나요?<br /><br />
              먹지가 해드립니다.
            </p>
            <Link to='/MainPage'>
              <button className={styles.startButton}>시작하기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloPage1;