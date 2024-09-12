import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginRegister() {
    // State to manage password visibility for register and login forms separately
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showLoginPassword, setShowLoginPassword] = useState(false);

    // State to manage form input
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    // State to manage API response messages
    const [loginMessage, setLoginMessage] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    // Function to toggle password visibility for register form
    const toggleRegisterPasswordVisibility = (e) => {
        e.preventDefault(); // Prevent form submission
        setShowRegisterPassword(!showRegisterPassword);
    };

    // Function to toggle password visibility for login form
    const toggleLoginPasswordVisibility = (e) => {
        e.preventDefault(); // Prevent form submission
        setShowLoginPassword(!showLoginPassword);
    };

    // Function to handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Validate inputs
        if (!loginEmail || !loginPassword) {
            setLoginMessage('Please enter both email and password.');
            return;
        }
    
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginEmail,
                    password: loginPassword
                }),
            });
    
            // Assuming that a successful response is indicated by status code 201
            if (response.ok) {
                const data = await response.json();
                setLoginMessage('Login successful!');
                // You can redirect the user or perform other actions here
            } else {
                // Handle login error based on response status
                setLoginMessage('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginMessage('An error occurred. Please try again.');
        }
    };
    

    // Function to handle register form submission
    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate inputs
        if (!registerName || !registerEmail || !registerPassword) {
            setRegisterMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', { // Replace with actual registration API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: registerName,
                    email: registerEmail,
                    password: registerPassword
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setRegisterMessage('Registration successful!');
                // You can redirect the user or perform other actions here
            } else {
                setRegisterMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setRegisterMessage('An error occurred. Please try again.');
        }
    };

    // This function switches between Login and Register forms.
    function SwitchContent() {
        // Get the content container
        const content = document.getElementById('content');
        // Get buttons to switch between register and login forms
        const registrationBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        // Add event listener to the register button to show the register form
        registrationBtn.addEventListener('click', () => {
            content.classList.add("active"); // Adds active class which will trigger CSS transitions
        });

        // Add event listener to the login button to show the login form
        loginBtn.addEventListener('click', () => {
            content.classList.remove("active"); // Removes active class to revert to login form
        });
    }

    return (
        <div className="content justify-content-center align-center d-flex shadow-lg" id="content">
            {/*---------------Register form-----------------*/}
            <div className="col-md-6 d-flex justify-content-center" style={{ marginTop: '150px' }}>
                {/* Added margin-top to move the register form down */}
                <form>
                    <div className="header-text mb-4">
                        <h1>Create Account</h1>
                    </div>
                    {/* Name Input Field */}
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control form-control-lg bg-light fs-6"
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                        />
                    </div>
                    {/* Email Input Field */}
                    <div className="input-group mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control form-control-lg bg-light fs-6"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                    </div>
                    {/* Password Input Field */}
                    <div className="input-group mb-3 position-relative">
                        <input
                            type={showRegisterPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="form-control form-control-lg bg-light fs-6"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn position-absolute end-0 top-50 translate-middle-y"
                            onClick={toggleRegisterPasswordVisibility}
                            style={{ 
                                background: 'transparent',
                                border: 'none',
                                color: '#822578',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 10px 20px 0',
                                cursor: 'pointer'
                            }}
                        >
                            {showRegisterPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    {/* Register Button */}
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn border-black text-black w-50 fs-6" onClick={handleRegister}>Register</button>
                    </div>
                    {/* Registration Message */}
                    <div className="text-center text-danger">{registerMessage}</div>
                </form>
            </div>

            {/*---------------Login form-----------------*/}
            <div className="col-md-6 right-box" style={{ marginTop: '80px' }}>
                <form>
                    <div className="header-text mb-4">
                        <h1>Sign In</h1>
                    </div>
                    {/* Email Input Field for Login */}
                    <div className="input-group mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control form-control-lg bg-light fs-6"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                    </div>
                    {/* Password Input Field for Login */}
                    <div className="input-group mb-3 position-relative">
                        <input
                            type={showLoginPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="form-control form-control-lg bg-light fs-6"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn position-absolute end-0 top-50 translate-middle-y"
                            onClick={toggleLoginPasswordVisibility}
                            style={{ 
                                background: 'transparent',
                                border: 'none',
                                color: '#822578',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 10px 20px 0',
                                cursor: 'pointer'
                            }}
                        >
                            {showLoginPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    {/* Remember me checkbox and forgot password link */}
                    <div className="input-group mb-5 d-flex justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label htmlFor="formcheck" className="form-check-label text-secondary">
                                <small>Remember me</small>
                            </label>
                        </div>
                        <div className="forgot">
                            <small><a href="#">Forgot Password?</a></small>
                        </div>
                    </div>
                    {/* Login Button */}
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn border-black text-black w-50 fs-6" onClick={handleLogin}>Login</button>
                    </div>
                    {/* Login Message */}
                    <div className="text-center text-danger">{loginMessage}</div>
                </form>
            </div>

            {/*--------------------Switch panel-----------------*/}
            <div className="switch-content">
                <div className="switch">
                    {/* Left Panel for Login */}
                    <div className="switch-panel switch-left">
                        <h1>Hello, Again</h1>
                        <p>We are happy to see you back</p>
                        <button className="hidden btn border-white text-black w-50 fs-6" id="login" onClick={SwitchContent}>
                            Login
                        </button>
                    </div>
                    {/* Right Panel for Register */}
                    <div className="switch-panel switch-right">
                        <h1>Welcome</h1>
                        <p>Join Our Unique Platform, Explore a New Experience</p>
                        <button className="hidden btn border-white text-black w-50 fs-6" id="register" onClick={SwitchContent}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg"></div>
        </div>
    );
}

export default LoginRegister;
