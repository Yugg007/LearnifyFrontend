import React, { useState } from 'react'

import './style/AuthPage.css'

const AuthPage = ({ setUserDetail }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState(); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => { 
        setPassword(e.target.value);
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handlePostRequest = async (url) => {
        try {
            const response = await fetch(`http://localhost:8000/${url}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "username": email, "password": password, "firstName": firstName, "lastName": lastName }),
            });

            let userData = await response.json();
            if (userData?.authenticated) {
                setUserDetail(userData);
            }
            else {
                throw new Error('Failed to submit form data.');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            alert('Authentication failed...')
        }
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            alert("Fill empty fields")
        }
        else{
            handlePostRequest("login");
        }
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if(!firstName || !lastName || !email || !password){
            alert("Fill empty fields")
        }
        else{
            handlePostRequest("signup");
        }
    }

    return (
        <>
            <div className="container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
                        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
                        <a href="https://www.google.com">Forgot password?</a>
                        <input type="submit" className="button" value="Login" />
                    </form>
                    <div className="signup">
                        <span className="signup">Don't have an account?
                            <label for="check">Signup</label>
                        </span>
                    </div>
                </div>
                <div className="registration form">
                    <header>Signup</header>
                    <form onSubmit={handleSignUpSubmit}>
                        <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" />
                        <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
                        <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />
                        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                        <input type="submit" className="button" value="Signup" />
                    </form>
                    <div className="signup">
                        <span className="signup">Already have an account?
                            <label for="check">Login</label>
                        </span>
                    </div>
                </div>


                <div className='centered-div'>
                    <br /> <br />
                    <a href='http://localhost:8000/auth/google' style={{ color: 'black' }} onMouseEnter={(e) => { e.target.style.color = 'blue' }} onMouseLeave={(e) => { e.target.style.color = 'black' }}>
                        <img style={{ width: 15, height: 15 }} src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default AuthPage





