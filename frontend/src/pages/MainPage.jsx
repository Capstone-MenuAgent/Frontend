import React, { useState } from 'react';
import styles from '../styles/MainPage.module.css';
import axios from 'axios';
import Header2 from '../layout/Header2';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

const MainPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  // const handleMap = () => {
  //   setShow(!show);
  // }


 const handleSend = async () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        isUser: messages.length % 2 === 0, // 번갈아가며 왼쪽, 오른쪽 결정
      };
      setInput('');
      setMessages([...messages, newMessage]);

      try {
        const response = await axios.get('/agent/question', {
          params: {
            query: input,
          },
        });
        // console.log('Server response:', response.data);

        setInput('');

        const newMessage = {
          text: response.data.ans,
          isUser: messages.length % 2 === 0, // 번갈아가며 왼쪽, 오른쪽 결정
        };

        setMessages([...messages, newMessage]);


    
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
        <Header2/>
    <div className={styles.container}>
      <div className={styles.chatBox}>
        
      <div className={styles.chatContent}>
        <Alert variant="light" dismissible>
          <Alert.Heading>Tip!</Alert.Heading>
            <p>
              "점심을 알려줘"와 같은 질문을 한다면 메뉴와 식당까지 정해서 길찾기 및 예약 사이트까지 안내해드립니다.
            </p>
        </Alert>
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
          
          {/* 예약페이지 */}
          {!show&&
          <Button className='position-relative top-0 end-0' onClick={() => setShow(!show)}>예약 페이지 생성</Button>}
          {show &&
          <div>
          <iframe className={styles.iframeStyle} src='https://map.naver.com/p/search/%EC%B6%A9%EC%A3%BC%20%EC%9D%8C%EC%8B%9D%EC%A0%90/place/17505093?c=14.69,0,0,0,dh&placePath=%3Fentry%3Dbmp'></iframe>
          <Button className='float-right' style={{position: 'absolute', right: 0, marginRight: "5%"}} onClick={() => setShow(!show)}>예약 페이지 제거</Button>
          </div>
          }
        </div>
        {/* 채팅 */}
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