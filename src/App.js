import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUpForm from './Login/signUp';
import LoginForm from './Login/Login';
import ForgotPassword from './Login/forgotPassword';
import Home from './Home';
import History from './History';
import Hero from './Hero';
import UserProfile from './Profile';
import ToWatch from './toWatch';

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/to-watch" element={<ToWatch />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<UserProfile />} />
                    </Routes>
    );
}