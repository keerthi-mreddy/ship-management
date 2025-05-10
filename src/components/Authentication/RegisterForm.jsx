import React, { useState } from "react";
import { useNavigate } from "react-router";
import { validateRegister } from "../../contexts/AuthContext";

const initialState = { username: "", accountType: "", fullName: "", password: "" };

const RegisterForm = () => {

    const navigate = useNavigate();
    const [RegisterFormData, setRegisterFormData] = useState(initialState);
    const { username, accountType, fullName, password } = RegisterFormData;

    const handleRegisterFormInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterFormData({ ...RegisterFormData, [name]: value });
    };

    const register = (e) => {

        if (!validateRegister(username, accountType, fullName, password)) {
            console.error("Retry login!");
            navigate("/register");
            return;
        }

        navigate("/dashboard");
    }

    return (
        <div className="RegisterForm">
            <form onSubmit={register}>
                <input
                    type="text"
                    placeholder="username"
                    required
                    name="username"
                    value={username}
                    onChange={handleRegisterFormInputChange}
                />
                <input
                    type="text"
                    placeholder="Account type"
                    required
                    name="accountType"
                    value={accountType}
                    onChange={handleRegisterFormInputChange}
                />
                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    name="fullName"
                    value={fullName}
                    onChange={handleRegisterFormInputChange}                
                />
                <input
                    type="password"
                    placeholder="password"
                    required
                    name="password"
                    value={password}
                    onChange={handleRegisterFormInputChange}                
                />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
};

export default RegisterForm;