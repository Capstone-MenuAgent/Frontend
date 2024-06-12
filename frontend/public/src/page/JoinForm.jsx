import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios";

const JoinForm = () =>{
    const { register, handleSubmit } = useForm();

    const clickjoin = data =>{
        axios.post("/api/join",
        {
            email: data.email,
            password: data.password,
            name: data.name,
            phone: data.phone,
            birth: data.birth,
            address: data.address

        }).then((res) => {
            alert(res.data)
            })
        }

    return(
        <form onSubmit={handleSubmit(clickjoin)}>
            <p><label htmlFor="email">이메일</label>
            <input id="email" type="email" placeholder="xx@email.com" {...register("email")}/></p>
            <p><label htmlFor="password">비밀번호</label>
            <input id="password" type="password" placeholder="password" {...register("password")}/></p>
            <p><label htmlFor="name">이름</label>
            <input id="name" type="text" placeholder="jong" {...register("name")}/></p>
            <p><label htmlFor="phone">전화번호</label>
            <input id="phone" type="text" placeholder="010-0000-0000" {...register("phone")}/></p>
            <p><label htmlFor="birth">생년월일</label>
            <input id="birth" type="text" placeholder="2000.04.29" {...register("birth")}/></p>
            <p><label htmlFor="address">주소</label>
            <input id="address" type="text" placeholder="대한민국 충주시" {...register("address")}/></p>
            <button type="submit">회원가입</button>
        </form>
    )

}

export default JoinForm;