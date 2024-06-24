import React from 'react';
import styles from '../styles/Content.module.css';

const Content = () => {
  const items = [
    '점심 메뉴 추천해줘',
    '한식으로 추천해줘',
    '한식, 중식, 양식, 일식중에 선택해주세요',
    '한식으로는, 1. 불고기 2. 김치찌개 3. 된장찌개 4. 잡채 등이 있습니다.'
  ];

  return (
    <div className={styles.content}>
      {items.map((item, index) => (
        <p key={index} className={index % 2 === 0 ? styles.left : styles.right}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Content;
