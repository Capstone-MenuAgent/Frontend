import React, { useState } from 'react';
import styles from './MainPage.module.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <div className={styles.chatHeader}>로고위치</div>
        <div className={styles.chatContent}>
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
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
          <button className={styles.chatButton} onClick={handleSend}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;