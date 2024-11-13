import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/MainPageSub.module.css';
import axios from 'axios';
import Header2 from '../layout/Header/loginHeader';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import api from '../lib/customAPI';

const MainPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  // Ref to access chatContent div
  const chatContentRef = useRef(null);

  // Array of show states for each message
  const [showStates, setShowStates] = useState([]);

  const scrollToBottom = () => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = async () => {


      try {
        const response = await api.get('/api/v1/agent/question', {
          params: { query: input },
        });

        const serverMessage = {
          text: response.data.answer,
          isUser: false,
          mapUrl: response.data.mapUrl || 'https://map.naver.com/p/search/%ED%95%9C%EA%B5%AD%EA%B5%90%ED%86%B5%EB%8C%80%ED%95%99%EA%B5%90%20%EC%B6%A9%EC%A3%BC%EC%BA%A0%ED%8D%BC%EC%8A%A4/place/11591647?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp' // 기본값 설정
        };

        if (input.trim()) {
          const newMessage = {
            text: input,
            isUser: true, // 사용자 메시지
            mapUrl: null // 사용자 메시지는 URL이 없음
          };
        setInput('');
          
        // 사용자 메시지를 먼저 추가
        setMessages((prevMessages) => [...prevMessages, newMessage]);
          
        // Add a new show state (false by default) for the new message
        setShowStates((prevShowStates) => [...prevShowStates, false]);

        // 서버 응답 메시지 추가
        setMessages((prevMessages) => [...prevMessages, serverMessage]);
        
        // Add a new show state for the server message as well
        setShowStates((prevShowStates) => [...prevShowStates, false]);

        scrollToBottom();
    
      }
    }catch{
      alert('사용자 질문 전송에 실패했습니다. 다시 전송해주세요.')
    }
  };

  // Toggle map visibility for a specific message and scroll to bottom after opening iframe
  const toggleMap = (index) => {
    setShowStates((prevShowStates) =>
      prevShowStates.map((show, i) => (i === index ? !show : show))
    );
    
    // Scroll to bottom after toggling the iframe
    scrollToBottom();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showStates]);

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Header2 />
      <div className={styles.container}>
        <div className={styles.chatBox}>
          
          {/* Add ref to the chatContent div */}
          <div className={styles.chatContent} ref={chatContentRef}>
            <Alert variant="light" dismissible>
              <Alert.Heading>Tip!</Alert.Heading>
              <p>
                "점심을 알려줘"와 같은 질문을 한다면 메뉴와 식당까지 정해서 길찾기 및 예약 사이트까지 안내해드립니다.
              </p>
            </Alert>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.chatDiv} ${msg.isUser ? styles.leftChatDiv : styles.rightChatDiv}`}
              >
                <div>
                  {msg.isUser ? (
                    <img className={styles.image} src={process.env.PUBLIC_URL + '/img/consider.png'} />
                  ) : (
                    <img className={styles.image} src={process.env.PUBLIC_URL + '/img/Ai.png'} />
                  )}
                </div>
                <div className={`${styles.textDiv} ${msg.isUser ? styles.leftTextDiv : styles.rightTextDiv}`}>
                  {msg.text}
                </div>
                
                {!msg.isUser && (
                  <>
                    {/* 예약 및 길찾기 버튼 */}
                    <div className={styles.buttonContainer}>
                      {!showStates[index] && msg.mapUrl && (
                        <Button variant="primary" className={styles.actionButton} onClick={() => toggleMap(index)}>
                          예약 및 길찾기
                        </Button>
                      )}
                    </div>

                    {/* iframe 표시 */}
                    {showStates[index] && msg.mapUrl && (
                      <div className={styles.iframeDiv}>
                        <iframe
                          className={styles.iframeStyle}
                          src={msg.mapUrl} // 각 메시지에 저장된 mapUrl 가져오기
                        ></iframe>
                        <Button className={styles.closeButton} onClick={() => toggleMap(index)}>
                          예약 페이지 제거
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* 채팅 입력 */}
          <div className={styles.chatFooter}>
            <input
              type="text"
              className={styles.chatInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => activeEnter(e)}
              placeholder="메시지를 입력하세요..."
            />
            <button type="submit" className={styles.chatButton} onClick={handleSend}>
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;