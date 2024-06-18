import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Signup = () => {

    const [username, setName] = useState('');
    const [password, setPass] = useState('');
    const [retype, setRetype] = useState('');

    const handleSignup = async (e) => {
        //prevent the default communication to backend
        e.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:5000/signup', {
        //         username,
        //         password,
        //         retype
        //     });
        //     console.log(response.data);
        // } catch (error) {
        //     console.error(error);
        // }
      

        // console.log(username);
        // console.log(password);

    };

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignup}>
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
                <label>
                    Re-type Password
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    value={retype}
                    onChange={(e) => setRetype(e.target.value)}
                />

                <br></br>
                <button id="signup-button" type="submit">Signup</button> 

            </form>
        </div>
    );

}

export default Signup;