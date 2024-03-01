import React, { useContext } from 'react'
import { AuthContext } from '../providers/authProvider/contexts';

export default function Home(props) {
    const {logout} = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome</h1>
            <p>Logged in as {props.name} {props.surname}</p>
            <button type='button' onClick={() => logout()}>Logout</button>
        </div>
    );
}