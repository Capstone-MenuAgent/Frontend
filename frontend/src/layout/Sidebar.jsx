import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const [show2024, setShow2024] = useState(false);
  const [showApril, setShowApril] = useState(false);
  const [show8th, setShow8th] = useState(false);

  return (
    <div className={styles.sidebar}>
      <ul>
        <li>2023</li>
        <li><p className={`${show2024 ? styles.clickP : ''}`} onClick={() => setShow2024(!show2024)}>2024</p>
          {show2024 && (
            <ul>
              <li>3월</li>
              <li><p className={`${showApril ? styles.clickP : ''}`} onClick={() => setShowApril(!showApril)}>4월</p>
                {showApril && (
                    <ul>
                        <li><p className={`${show8th ? styles.clickP : ''}`} onClick={() => setShow8th(!show8th)}>8일</p>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;