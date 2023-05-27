import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ForgotPassword() {
    const [emailInput, setEmailInput] = useState("");
    const [securityQ, setSecurityQ] = useState("");
    const [securityA, setSecurityA] = useState("");
    const [answerInput, setAnswerInput] = useState("");
    
    
    const handleChangeEmail = (e) => {
        setEmailInput(e.target.value);
    };

    const handleChangeAnswer = (e) => {
        setAnswerInput(e.target.value);
    };

    const SecurityCheck = async () => {
        console.log(`Doing something`)

        // let securityQ = '';
        // let securityA = '';

        try {
            const response = await fetch(`http://localhost:4000/security_get/${emailInput}`)
            console.log(response);
            const jsonData = await response.json();
            setSecurityQ = (jsonData.security_q);
            setSecurityA = (jsonData.security_a);
            console.log(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
            alert("Email address not recognised.");
        }
    }

    const handleKeyPressA = e => {
        if (e.key === 'Enter') {
          SecurityCheck();
        }
      };

      const handleKeyPressB = e => {
        if (e.key === 'Enter') {
          SecurityCheck();
        }
      };

    return (
        <div className='container'>
            <div className='item'>
                <header>
                    <h3>Please enter your email address</h3>
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
                id="emailImport"
                label="Email"
                value={emailInput}
                type="email"
                onChange={handleChangeEmail}
                onKeyDown= {handleKeyPressA}/>
                </FormControl>
                {securityQ && <p>{securityQ}</p>}
                {securityQ && 
                <FormControl>
                <TextField
                id="answerInput"
                label="Answer"
                value={answerInput}
                type="answer"
                onChange={handleChangeAnswer}
                onKeyDown= {handleKeyPressB}/>
                </FormControl>}
                </Box>
            </div>
        </div>
    )
}