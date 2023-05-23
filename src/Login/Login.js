import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState, useEffect } from 'react';
import StyledButton from '../button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import Navbar from '../components/NavBar.js';
// import authentication from './UserAuthentication'


export default function LoginForm() {
  const [triggered, setTriggered] = useState(false);
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [data,setData] = useState([]);
  const [userID, setUserID] = useState("");
  const [usernameTrue, setUsernameTrue] = useState("");
  const [passwordTrue, setPasswordTrue] = useState("");
    
  const nav = useNavigate();

  const handleChangeA = e => {
    setValueA(e.target.value);
  };

  const handlechangeB = e => {
    setValueB(e.target.value);
  };

  useEffect(() => {
    const fetchCreds = async () => {
      try {
        const response = await fetch('http://localhost:3306/user_get/1')
        console.log(response);
        const jsonData = await response.json();
        setUserID(jsonData.user_id);
        setUsernameTrue(jsonData.username);
        setPasswordTrue(jsonData.password);
      } catch (error) {
        console.log('Error fetching data:', error);
      }

      if (usernameTrue === valueA && passwordTrue === valueB) {
        console.log(`yes`)
        nav(<link to="/home"></link>);
      } else {
        console.log(`no`)
        nav(<link to="/denied"></link>)
      }
    }
  }, [triggered]);

  const handleTrigger = () => {
    setTriggered(true);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      const link = {handleTrigger};
        nav(link);
    }
  };

  return (
    <div className="container flex">
      <div className="item">(photo)</div>

      <div className="item">
        <header>
          <h2>Welcome back!</h2>
        </header>
        <Box
        component="form"
        className="FormBox"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <FormControl>
            <TextField
            id="usernameInput"
            label="Username"
            value={valueA}
            type="username"
            onChange={handleChangeA}
            onKeyDown={handleKeyPress}
            />
          </FormControl>
          <FormControl>
            <TextField
            id="passwordInput"
            label="Password"
            value={valueB}
            type="password"
            onChange={handlechangeB}
            onKeyDown={handleKeyPress}
            />
          </FormControl>
        </Box>
        <StyledButton className="button" onClick={handleTrigger}>Login</StyledButton>
      </div>
    </div>
  );
}