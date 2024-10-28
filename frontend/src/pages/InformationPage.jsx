import React, { useState, useEffect } from 'react';
import styles from '../styles/InformationPage.module.css'; // Import the CSS module
import Header2 from '../layout/Header2';
import axios from 'axios';

function InformationPage() {
  const [formData, setFormData] = useState({
    email: '',
    mainPassword: '',
    confirmPassword: '',
    addr: '',
    age: '',
    gender : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    axios.post("/user/information",
      {
        email : formData.email,
        password : formData.password,
        name : formData.name,
        age : formData.age,
        address : formData.address,
        gender : formData.gender
      }
    ).then((res) => {
        alert(res.data);
    })
  };

  useEffect(() => {
    axios.get('user/information',{
      params : {
        userId : 1
      }
    })
      .then(response => {
        setFormData({
          email: response.data.email,
          mainPassword: response.data.password,
          confirmPassword: response.data.password,
          name : response.data.name,
          gender: response.data.gender,
          addr: response.data.addr,
          age: response.data.age,
        });
      })
      .catch (error => {
          console.error('Error sending message:', error);
        })
  }, []);

  return (
    <div className={styles.divStyle}>
        <Header2/>
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
            나이
            <input type="text" name="age" value={formData.age} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            성별
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            주소
            <input type="text" name="addr" value={formData.addr} onChange={handleChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>정보수정</button>
        </form>
    </div>
  );
}

export default InformationPage;