import React from 'react';
import Header from '../layout/Header1';
import styles from '../styles/HistoryPage.module.css'
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import Header2 from '../layout/Header2';


const HistoryPage = () =>  {

    return (
      <div>
        <Header2 />
        <div className={styles.container}>
          <Sidebar />
          <Content />
        </div>
      </div>
      );
    
}

export default HistoryPage;