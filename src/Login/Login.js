import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


export default function LoginForm() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const nav = useNavigate();

  const handleChangeUsername = e => {
    setUsernameInput(e.target.value);
  };

  const handleChangePassword = e => {
    setPasswordInput(e.target.value);
  };

  const fetchCreds = async () => {
    console.log(`doing something`)

    let userID='';
    let username='';
    let password='';
    let data = '';

    try {
      const response = await fetch(`http://localhost:4000/username_get/${usernameInput}`)
      console.log(response);
      const jsonData = await response.json();
      userID = (jsonData.user_id);
      username = (jsonData.username);
      password = (jsonData.password);
    } catch (error) {
      console.log('Error fetching data:', error);
    }

    if (usernameInput === '' || passwordInput === '') {
      console.log(`hi`);
      alert("It doesn't look like you have an account with us :(")
    }

    else if (username === usernameInput && password === passwordInput) {
      console.log(`yes`)
      nav("/home");
    } else {
      console.log(`no`)
      console.log(username)
      console.log(usernameInput)
      console.log(data)
      alert("It doesn't look like you have an account with us :(")
      return
    }
  }

  const handleLogin = () => {
    fetchCreds();
  };

  const handleForgotPass = () => {
    nav("/forgot_password");
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      fetchCreds();
    }
  };

  return (
    <div>
      <div className="container flex">

      <div className="item">
        <header>
          <h2>Welcome back!</h2>
        </header>
        <Box
        component="form"
        className="FormBox"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {color: '#FFEC3E'},
        '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {color: '#FFEC3E'},
        '& .MuiFormLabel-colorPrimary': {color: '#FFEC3E'},
        '& .MuiInputLabel-animated': {color: '#FFEC3E'}
        }}
        noValidate
        autoComplete="off"
        >
          <FormControl>
            <TextField
            id="usernameInput"
            label="Username"
            value={usernameInput}
            type="username"
            onChange={handleChangeUsername}
            onKeyDown={handleKeyPress}
            />
          </FormControl>
          <FormControl>
            <TextField
            id="passwordInput"
            label="Password"
            value={passwordInput}
            type="password"
            onChange={handleChangePassword}
            onKeyDown={handleKeyPress}
            />
          </FormControl>
        </Box>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleForgotPass}>Forgot Password</button>
      </div>
    </div>
    </div>
    
  );
}
