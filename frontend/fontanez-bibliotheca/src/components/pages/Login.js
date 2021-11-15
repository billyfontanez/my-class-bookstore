import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import Cookies from 'js-cookie';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username === '' || password === '') {
            setError(true);
            setErrorMessage('Error: All fields must be filled in!');
        } else {
            fetch('http://127.0.0.1:5000/user/verify', {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data === 'User NOT verified.') {
                    console.log(data)
                    setError(true);
                    setErrorMessage('Invalid username or password.');
                } else if(data === 'User has been verified.') {
                    Cookies.set('username', username);
                    navigate('/');
                }
            })
            .catch(error => {
                console.log('Error with logging in.', error);
                setError(true);
                setErrorMessage('Error logging in, please try again.');
            })
        }

    }

    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[username, password])

    return (
        <div className="login-container">
            <h3>Login in here</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Username" value={username} name="username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" placeholder="Password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
        </div>
    )
}