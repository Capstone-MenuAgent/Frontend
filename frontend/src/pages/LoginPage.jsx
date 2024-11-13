import React, { useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Header1 from '../layout/Header/Header';
import axios from 'axios';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
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
      axios.post('/api/v1/login',
      {
          email: formData.email,
          password: formData.password
      }).then((res) => {
        if(res.status===200){
          if(localStorage.getItem("refreshtoken")){
            localStorage.removeItem("accesstoken")
            localStorage.removeItem("refreshtoken")
          }
          localStorage.setItem("accesstoken", res.headers['authorization']);
          localStorage.setItem("refreshtoken", res.headers['authorization-refresh']);
          // alert(JSON.stringify(res.data));
          navigation('/MainPage');
          // axios.defaults.headers.common[
          //   'Authorization'
          // ] = `Bearer ${res.headers['authorization']}`
        }}).catch (error => {
          alert('로그인에 실패했습니다. 아이디나 비밀번호를 확인해주세요');
          setFormData({
            password: ''
          });
        })      
      
      // navigation('/MainPage');  
  };

  return (
    <div className={styles.divStyle}>
      <Header1/>
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
                <button type="submit" className={styles.button}>로그인</button>
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