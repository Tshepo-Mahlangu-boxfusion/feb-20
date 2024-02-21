import React, { useContext, useReducer, useState } from 'react';
import { useThemeState } from './providers/provider.jsx'
import { ThemeSelector } from './components/ThemeSelector';
import { loginAction } from './providers/authProvider/actions.js';
import { loginReducer } from './providers/authProvider/reducers.js';
import { AuthContext } from './providers/authProvider/contexts.js';
const Grocery = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { theme } = useThemeState();

    const { user, login, logout } = useContext(AuthContext);
    console.log("passed down user", user);

    function makeLogin(e) {
        e.preventDefault();
        if (username.length > 0) {
            login({
                username,
                password
            });
        }
    }

    return (
        <div style={{backgroundColor: theme, height: "100vh"}}>
            <ThemeSelector />
            {user?.username === "teboho" ? 
                <div>
                    <h1>Welcome</h1>
                    <button type='button' onClick={() => logout()}>Logout</button>
                </div>
            : 
                <form action="#" onSubmit={makeLogin}>
                    <input type="text" name="username" placeholder='username' value={username} onChange={(e) => setUsername((prev => e.target.value))} />
                    <input type="text" name='password' placeholder='password' value={password} onChange={e => setPassword(prev => e.target.value)}/>
                    <button type='submit'>Login</button>
                </form>
            }
        </div>
    );
}

export default Grocery;