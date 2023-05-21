import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from './login/signUp';
import Login from './login/Login';
import Denied from './login/Denied';
import ForgotPassword from './login/forgotPassword';
import Home from './Home';
import History from './History';
import UserHome from './userHome';
import UserProfile from './Profile';
import ToWatch from './toWatch';

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/denied" element={<Denied />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/to_watch" element={<ToWatch />} />
        </Routes>
    );
}