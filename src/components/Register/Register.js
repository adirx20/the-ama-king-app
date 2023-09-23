import React, { useState } from 'react';
import firebase from './firebaseConfig';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('User created! : ', userCredential);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    };

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    return (
        <div>
            <h2>
                Register
            </h2>
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
            />
            <button
                onClick={handleRegistration}
            >
                Sign up
            </button>
        </div>
    );
}

export default Register;