import React, { useEffect } from 'react';
import styles from '../styles/Content.module.css';
import axios from "axios";

const Content = () => {
  const [Logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('user/chatlog', {
        param : {
          userId : 1
        }
    }).then(res=>{
      setLogs(res.Logs)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  })

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.logItem}>
          <div className={styles.leftSide}>
            {item.role === 'human' ? item.log : ''}
          </div>
          <div className={styles.rightSide}>
            {item.role !== 'human' ? item.log : ''}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
