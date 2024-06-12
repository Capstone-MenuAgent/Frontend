import React, {useEffect, useState} from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header";
import JoinForm from "./page/JoinForm";
import LoginForm from "./page/LoginForm";
// import MatchingForm from "./page/MatchingForm";
// import CommunityForm from "./page/CommunityFrom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
				<Route path="/" element={<JoinForm />}></Route>
				<Route path="/JoinForm" element={<JoinForm />}></Route>
				<Route path="/LoginForm" element={<LoginForm />}></Route>
                {/* <Route path="/MatchingForm" element={<MatchingForm />}></Route>
                <Route path="/CommunityForm" element={<CommunityForm />}></Route> */}
			</Routes>
        </BrowserRouter>
    )

}

export default App;
