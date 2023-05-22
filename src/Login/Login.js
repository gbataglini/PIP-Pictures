import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import StyledButton from '../button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
<<<<<<< HEAD
import Navbar from '../components/NavBar.js';
=======
>>>>>>> a9440a1 (updated login and denied files)

export default function LoginForm() {
    const [valueA, setValueA] = useState("");
    const [valueB, setValueB] = useState("");
    const nav = useNavigate();

    const handleChangeA = e => {
      setValueA(e.target.value);
    };

    const handlechangeB = e => {
      setValueB(e.target.value);
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            const link = authenticate();
            nav(link);
        }
    };

    function authenticate() {
        const username = 'CFGSpring'
        const password = '2023!'
        if (valueA === username && valueB === password) {
          console.log(`yes`)
            return "/home";
        } else {
          console.log(`no`)
            return "/denied";
        }
      }

    return (
    <>
<<<<<<< HEAD
    <Navbar />
=======
>>>>>>> a9440a1 (updated login and denied files)
    <header>
        <h1>Welcome back!</h1>
    </header>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <div class="container">
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
        </div>
    </Box>
    <Link to={authenticate()}>
      <StyledButton text="login"></StyledButton>
    </Link>
    </>
  );
}