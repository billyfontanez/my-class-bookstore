import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import Cookies from 'js-cookie';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username === '' || password === '' || confirmPassword === '') {
            setError(true);
            setErrorMessage('Error: All fields must be filled in!');
        } else if(password !== confirmPassword) {
            setError(true);
            setErrorMessage('Error: The passwords are not the same. ');
        } else {
            fetch('http://127.0.0.1:5000/user/add', {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then(data => {
                if(data === 'Error: That username is Taken.') {
                    setError(true);
                    setErrorMessage('Error: That username is Taken.');
                } else {
                    setError(false);
                    setErrorMessage('');
                    Cookies.set('username', username);
                    navigate('/');
                }
            })
            .catch(error => {
                console.log('Error creating your user', error);
                setError(true);
                setErrorMessage('Error adding user! Try again please.');
            })
        }

    }

    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[username, password, confirmPassword])

    return (
        <div className="signup-container">
            <h3>Fill out the form to sign-up!</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Username" value={username} name="username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" placeholder="Password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="text" placeholder="Confirm Password" value={confirmPassword} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button className ="submit-btn" type="submit">Submit</button>
            </form>
            <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
        </div>
    )
}