import React, { useState, useEffect} from 'react';
import styles from '../styles/Content.module.css';
import axios from "axios";

const Content = () => {
  const [Logs, setLogs] = useState([]);

  const data = [
    {
      "role" : "human",
      "log" : "점심 추천해줘"
    },
    {
      "role" : "AI",
      "log" : "오늘 날씨는 선선하네요, 두꺼비네의 순대 국밥을 추천드려요."
    },
    {
      "role" : "AI",
      "log" : "아니면 생각나는 감자탕의 뼈해장국은 어떠신가요?"      
    },
    {      
      "role" : "AI",
      "log" : "아니면 한솥의 치킨마요 덮밥은 어떠신가요?"
    }
  ]

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
      <div className={styles.chatBox}>
        <div className={styles.chatContent}>
      {data.map((item, index) => (
        <div 
        className={`${styles.messageBubble} ${
          item.role == "human" ? styles.leftBubble : styles.rightBubble
        }`}>
          {item.log}
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
