import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import QuestionDisplay from './securityQuestion';

export default function ForgotPassword() {
    const [emailInput, setEmailInput] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [displayQuestion, setDisplayQuestion] = useState(false);
    
    
    const handleChangeEmail = (e) => {
        setEmailInput(e.target.value);
    };

    const SecurityCheck = async () => {
        console.log(`Doing something`)

        let securityQ = '';
        let securityA = '';

        try {
            const response = await fetch(`http://localhost:4000/security_get/${emailInput}`)
            console.log(response);
            const jsonData = await response.json();
            securityQ = (jsonData.security_q);
            securityA = (jsonData.security_a);
            setDisplayQuestion(true);
        } catch (error) {
            console.log('Error fetching data:', error);
            alert("Email address not recognised.");
        }
        setDisplayQuestion(true);
        setSecurityQuestion(securityQ);
        setSecurityAnswer(securityA);
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await SecurityCheck();
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
                onKeyDown= {handleKeyPress}/>
                </FormControl>
                </Box>
                {displayQuestion && <QuestionDisplay question={securityQuestion} answer={securityAnswer} />}
            </div>
        </div>
    )
}