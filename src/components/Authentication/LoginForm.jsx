import React, { useState } from "react";
import { validateLogin } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const initialState = { username: "", accountType: "", password: "" };

const LoginForm = () => {

    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState(initialState);
    const { username, accountType, password } = loginFormData;

    const handleLoginFormInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    const login = (e) => {

        if (!validateLogin(username, password)) {
            console.error("Invalid creds");
            navigate("/login");
            return;
        }

        navigate("/dashboard");
    }

    return (
        <div className="LoginForm">
            <form onSubmit={login}>
                <input
                    type="text"
                    placeholder="username"
                    required
                    name="username"
                    value={username}
                    onChange={handleLoginFormInputChange}
                />
                <input
                    type="text"
                    placeholder="account type"
                    required
                    name="accountType"
                    value={accountType}
                    onChange={handleLoginFormInputChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    required
                    name="password"
                    value={password}
                    onChange={handleLoginFormInputChange}                
                />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
};

export default LoginForm;