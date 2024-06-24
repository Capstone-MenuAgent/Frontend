import React, { useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Header1 from '../layout/Header1';
import axios from 'axios';

function LoginPage() {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (data) => {
      data.preventDefault();
      axios.post("/user/login",
      {
          email: formData.email,
          password: formData.password

      }).then((res) => {
          alert(JSON.stringify(res.data))
          navigation('/MainPage')
          })      
  };

  return (
    <div>
        <div>
            <Header1/>
        </div>
        <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="이메일" 
            className={styles.inputField} 
            />
            <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="비밀번호" 
            className={styles.inputField} 
            />
            <div className={styles.buttonGroup}>
                {/* <Link to='/MainPage'> */}
                    <button type="submit" className={styles.button}>로그인</button>
                {/* </Link> */}
                <Link to='/SignupPage'>
                    <button type="button" className={styles.button}>회원가입</button>
                </Link>
            </div>
        </form>
        <div className={styles.snsTitle}>SNS 로그인</div>
        <div className={styles.snsIcons}>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
        </div>
        </div>
    </div>
  );
}

export default LoginPage;