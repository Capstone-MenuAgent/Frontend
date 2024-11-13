import React, { useState } from 'react';
import styles from '../styles/Signup.module.css'; // Import the CSS module
import Header1 from '../layout/Header/Header';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    mainPassword: '',
    confirmPassword: '',
    name: '',
    age: '',
    gender: '', // 성별 추가
    addr: ''
  });
  const [emailChecked, setEmailChecked] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 비밀번호 확인 로직 추가 (선택 사항)
    if (formData.mainPassword !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    axios.post("/api/v1/member/signup",
      {
        email: formData.email,
        password: formData.mainPassword,
        name: formData.name,
        addr: formData.addr,
        age: formData.age,
        gender: formData.gender
      }
    ).then((res) => {
        alert('회원 가입 성공. 다시 로그인해주세요');
        navigate('/LoginPage');
    }).catch((error) => {
        console.error("Signup error:", error);
        alert("회원가입 중 오류가 발생했습니다.");
    });
  };

  const emailCheck = (data) => {    
    data.preventDefault();
    axios.get("/api/v1/member/", {
      params: {
        email: formData.email
      }
    }).then((res) => {
      if(res.status == 400){
        setEmailChecked(true)
        alert(res.data.message)
      }
    }).catch((error)=>{      
      {error.response.status == 400
        ? alert(error.response.data.message)
        : alert('문제가 발생하였습니다. 다시 시도해주세요.')
      }

    })
  }

  return (
    <div className={styles.divStyle}>
      <Header1 />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.emailLabel}>
          이메일
          <input disabled={emailChecked} type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />
        </label>
        <button className={!emailChecked ? styles.checkButton : styles.checkedButton} onClick={emailCheck} disabled={emailChecked}>중복 확인</button>
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

        {/* 성별 라디오 버튼 */}
        <div className={styles.radioDiv}>
          성별
          <label className={styles.radioLabel}>
            <input className={styles.radioInput}
              type="radio"
              name="gender"
              value="MAN"
              checked={formData.gender === 'MAN'}
              onChange={handleChange}
            />
            남성
          </label>
          <label className={styles.radioLabel}>
            <input className={styles.radioInput}
              type="radio"
              name="gender"
              value="WOMEN"
              checked={formData.gender === 'WOMEN'}
              onChange={handleChange}
            />
            여성
          </label>
        </div>

        {/* 회원가입 버튼 */}
        <button type="submit" className={styles.button}>회원가입</button>
      </form>
    </div>
  );
}

export default SignupPage;