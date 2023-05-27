import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'


export default function LoginForm() {
  const [triggered, setTriggered] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const nav = useNavigate();

  const handleChangeUsername = e => {
    setUsernameInput(e.target.value);
  };

  const handleChangePassword = e => {
    setPasswordInput(e.target.value);
  };

  const handleChangeFirstName = e => {
    setFirstnameInput(e.target.value);
  };

  const handleChangeLastName = e => {
    setLastnameInput(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmailInput(e.target.value);
  };

  const fetchCreds = async () => {
    console.log(`doing something`)

    let userID='';

    try {
      const response = await fetch('http://localhost:4000/user_new', {
        method: "POST",
        body: JSON.stringify({
            firstName: firstnameInput,
            lastName: lastnameInput,
            email: emailInput,
            username: usernameInput,
            password: passwordInput,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
      })
      console.log(response);
      const jsonData = await response.json();
      userID = (jsonData.user_id);
      console.log(jsonData)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
    nav('/home')
  }

  useEffect( () => {
    console.log(`doing something`)
  }, [triggered]); 

  const handleTrigger = () => {
    setTriggered(true);
    fetchCreds()
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleTrigger();
    }
  };

  return (
    <div>
      <div className="container flex">
        // TODO:
        // Add photo
      <div className="item">(photo)</div>

      <div className="item">
        <header>
          <h2>Join the club!</h2>
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
            id="firstnameInput"
            label="First Name"
            value={firstnameInput}
            type="firstname"
            onChange={handleChangeFirstName}
            onKeyDown={handleKeyPress}
            />
            </FormControl>
            <FormControl>
            <TextField
            id="lastnameInput"
            label="Last Name"
            value={lastnameInput}
            type="lastname"
            onChange={handleChangeLastName}
            onKeyDown={handleKeyPress}
            />
            </FormControl>
            <FormControl>
            <TextField
            id="emailInput"
            label="Email"
            value={emailInput}
            type="email"
            onChange={handleChangeEmail}
            onKeyDown={handleKeyPress}
            />
            </FormControl>
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
        <button onClick={handleTrigger}>Sign Up</button>
      </div>
    </div>
    </div>
    
  );
}