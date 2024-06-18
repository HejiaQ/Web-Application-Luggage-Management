import React, {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css"

//handle the login frontend behavipr
const Login = () => {

    //current state + function to update
    const [username, setName] = useState('');
    const [password, setPass] = useState('');

    const handleLogin = async (e) => {
        //prevent the default communication to backend
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        // console.log(username);
        // console.log(password);
        
    };

    return (
        <div>
            <h1>WELCOME TO LUGGAGE MANAGEMENT APP</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username
                </label>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <label>
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                />

                <br></br>
                <button id="login-button" type="submit">Login</button>

                <p>Haven't got an account yet? Click <Link to="/signup">Here</Link>! </p>

            </form>
        </div>
        
    );


};

export default Login;
