import React from 'react';
import Header1 from './Header1';
import styles from '../styles/HelloPage2.module.css';
import { Link } from 'react-router-dom';


function HelloPage2() {

  return (
    <div className={styles.outsideContainer}>
      <div className={styles.insideContainer}>
        <div className={styles.oddDiv}>
          <p className={styles.title}>원하는 종류 추천</p>
          <img className={styles.img} src={process.env.PUBLIC_URL+'/img/consider.png'}></img>
          <p className={styles.text}>점심, 저녁 등 추천</p>
          <p className={styles.text}>운동 추천</p>
          <p className={styles.text}>의사결정이 힘든 종류</p>
        </div>
        <div className={styles.evenDiv}>
          <p className={styles.title}>선택지 제공</p>
          <img className={styles.img} src={process.env.PUBLIC_URL+'/img/choice.png'}></img>      
          <p className={styles.text}>위치를 고려한 선택지</p>
          <p className={styles.text}>날씨를 고려한 선택지</p>
          <p className={styles.text}>과거를 고려한 선택지</p>    
        </div>
        <div className={styles.oddDiv}>
          <p className={styles.title}>예약 연계 시스템</p>
          <img className={styles.img} src={process.env.PUBLIC_URL+'/img/book.png'}></img>   
          <p className={styles.text}>예약 페이지로 연계</p>
          <p className={styles.text}>전화번호 안내</p>
        </div>
        <div className={styles.evenDiv}>
          <p className={styles.title}>길찾기 시스템</p>
          <img className={styles.img} src={process.env.PUBLIC_URL+'/img/map.png'}></img>   
          <p className={styles.text}>지도상에 위치 안내</p>
          <p className={styles.text}>현재 위치 활용 길안내</p>
          <p className={styles.text}>도보, 차량 등 길안내</p>       
        </div>
      </div>
    </div>
  );
}

export default HelloPage2;