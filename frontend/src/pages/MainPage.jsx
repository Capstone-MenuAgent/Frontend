import React, { useState } from 'react';
import styles from '../styles/MainPage.module.css';
import axios from 'axios';
import Header1 from '../layout/Header1';

const MainPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const url = "/user/quest";

 const handleSend = async () => {
    if (input.trim()) {
      try {
        const response = await axios.get('/user/question', {
          params: {
            query: input,
            age: "20",
            gender: "남",
            loc: "충주"
          },
        });
        console.log('Server response:', response.data);
      const newMessage = {
        text: input,
        isUser: messages.length % 2 === 0, // 번갈아가며 왼쪽, 오른쪽 결정
      };

      setMessages([...messages, newMessage]);
      setInput('');
    

        // 메시지를 추가하고 입력 필드를 초기화
        setMessages([...messages, input]);
        setInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div>
        <Header1/>
    <div className={styles.container}>
      <div className={styles.chatBox}>
      <div className={styles.chatContent}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.messageBubble} ${
                msg.isUser ? styles.leftBubble : styles.rightBubble
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className={styles.chatFooter}>
          <input
            type="text"
            className={styles.chatInput}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지를 입력하세요..."
          />
          <button type='submit' className={styles.chatButton} onClick={handleSend}>
            전송
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainPage;