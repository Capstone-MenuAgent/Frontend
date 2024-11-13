import React from 'react';
import styles from '../styles/HistoryPage.module.css'
// import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import Header3 from '../layout/Header/historyHeader';


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