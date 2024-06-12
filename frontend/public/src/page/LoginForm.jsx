import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginForm = () =>{
    const {register, handleSubmit} = useForm();

    const clickLogin = data =>{
        axios.post("/api/login",
        {
            email: data.email,
            password: data.password

        }).then((res) => {
            alert(res.data)
            })
        }

    return(
        <form onSubmit={handleSubmit(clickLogin)}>
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" placeholder="xx@email.com" {...register("email")}/>
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" placeholder="password" {...register("password")}/>
            <button type="submit">로그인</button>
        </form>
    )

}

export default LoginForm;