import React, { useState } from 'react';
import styles from '../styles/Signup.module.css'; // Import the CSS module
import Header1 from '../layout/Header1';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    mainPassword: '',
    confirmPassword: '',
    age: '',
    gender : '',
    addr: ''
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/user/signup",
      {
        email : formData.email,
        password : formData.mainPassword,
        name : formData.name,
        addr : formData.addr,
        age : formData.age,
        gender : formData.gender
      }
    ).then((res) => {
        alert(res.data);
        navigation('/LoginPage');
    })
  };

  return (
    <div>
        <Header1/>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.label}>
            이메일
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            비밀번호
            <input type="password" name="mainPassword" value={formData.mainPassword} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            비밀번호 확인
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            이름
            <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            주소
            <input type="text" name="addr" value={formData.addr} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            나이
            <input type="text" name="age" value={formData.age} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            성별
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} className={styles.input} />
        </label>
        <Link to='/MainPage'>
        <button type="submit" className={styles.button}>회원가입</button>
        </Link>
        </form>
    </div>
  );
}

export default SignupPage;