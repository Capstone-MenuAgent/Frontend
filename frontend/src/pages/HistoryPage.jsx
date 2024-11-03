import React from 'react';
import Header from '../layout/Header1';
import styles from '../styles/HistoryPage.module.css'
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import Header3 from '../layout/Header3';


const HistoryPage = () =>  {

    return (
      <div>
        <Header3 />
        <div className={styles.container}>
          {/* <Sidebar /> */}
          <Content />
        </div>
      </div>
      );
    
}

export default HistoryPage;