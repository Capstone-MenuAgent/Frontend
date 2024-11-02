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
        {data.map((msg, index) => (              
            <div
              key={index}
              className={`${styles.chatDiv} ${
                msg.role==="human" ? styles.leftChatDiv : styles.rightChatDiv
              }`}
            >
              <div>
                {msg.role==="human" ? 
                  <img className={styles.image} src={process.env.PUBLIC_URL+'/img/consider.png'} /> : 
                  <img className={styles.image} src={process.env.PUBLIC_URL+'/img/Ai.png'} />}
              </div>
              <div className={`${styles.textDiv} ${
                msg.role==="human" ? styles.leftTextDiv : styles.rightTextDiv
              }`}>
                {msg.log}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
