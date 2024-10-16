import React from 'react';
import Header1 from './Header1';
import styles from '../styles/HelloPage3.module.css';
import { Link } from 'react-router-dom';


function HelloPage3() {

  return (
    <div className={styles.outsideContainer}>
      <div className={styles.insideContainer}>
        <div className={styles.sideDiv}>
          <img className={styles.img}  style={{paddingRight:"1vh"}} src={process.env.PUBLIC_URL+'/img/consider.png'} alt='고민 아이콘'/>
        </div>
        <div className={styles.centerDiv}>
          <div className={`${styles.bubble} ${styles.right}`}>
            오늘 점심을 추천해줘
          </div>
          <div className={`${styles.bubble} ${styles.left}`}>
            오늘 날씨가 쌀쌀하니 국밥을 추천하고 싶어요.<br />
            주변 추천 국밥집으로<br/>
            1.두꺼비네의 순대국밥            
          </div>
          <div className={styles.buttonList}>
          <div className={styles.button}>길찾기</div> 
            <div className={styles.button}>예약</div>
          </div>
          <div className={`${styles.bubble} ${styles.left}`}>
          2.생각나는 감자탕의 뼈해장국이 있습니다.<br />
          </div>
          <div className={styles.buttonList}>
          <div className={styles.button}>길찾기</div>
            <div className={styles.button}>예약</div>
          </div>
        </div>
        <div className={styles.sideDiv}> 
          <img className={styles.img}  style={{paddingLeft:'1vh'}} src={process.env.PUBLIC_URL+'/img/Ai.png'} alt='AI 아이콘' />
        </div>
      </div>
    </div>
  );
}

export default HelloPage3;