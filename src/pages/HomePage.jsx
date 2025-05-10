import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateLoginPage = () => {
        navigate('/login');
    }

    const navigateRegisterPage = () => {
        navigate('/register')
    }
    
    return (
        <div className="HomePage">
            <h1> Welcome to HomePage</h1>
            <button onClick={navigateLoginPage}>Go to Login</button>
            <button onClick={navigateRegisterPage}>Register</button>
        </div>
    )
};

export default HomePage;