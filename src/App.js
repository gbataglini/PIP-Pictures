import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUpForm from './Login/signUp';
import LoginForm from './Login/Login';
import Denied from './Login/denied';
import ForgotPassword from './Login/forgotPassword';
// import Home from './Home';
import History from './History';
import UserHome from './userHome';
import UserProfile from './Profile';
// import ToWatch from './toWatch';

export default function App() {
    return(
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            {/* <Route path="/forgot_password" element={<ForgotPassword />} /> */}
            <Route path="/denied" element={<Denied />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* <Route path="/to_watch" element={<ToWatch />} /> */}
        </Routes>
    );
}