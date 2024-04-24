import React, { useState } from 'react';
import Map from './Map'; // Import the Map component
import {  useNavigate } from 'react-router-dom'; // Import useHistory from React Router

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); // Initialize useHistory

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Here you can add your login logic, for example, checking username and password validity
        // For demonstration purposes, let's assume the login is successful
        setIsLoggedIn(true);
        // Redirect to map page
        navigate('/map'); // Redirect to '/map' route
    };

    return (
        <div>
            {!isLoggedIn && (
                <div id="login-container">
                    <h2>Login to Student Portal</h2>
                    <form onSubmit={handleLogin}>
                        <input type="text" name="roll_number" placeholder="Roll Number" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="submit" value="Login" className="button" />
                    </form>
                </div>
            )}
            {isLoggedIn && <Map />}
        </div>
    );
}

export default Login;
