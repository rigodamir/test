import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onLogIn = () => {
        const user = {
            username: username,
            password: password
        }
        axios.post('https://api.getcountapp.com/api/v1/authenticate', user).then((response) => {
            localStorage.setItem('user', response.data)
            history.push("/home");
        }).catch(() => {
            setError("Failed to login!")
        })
    }

    console.log("LEA")

    return(
        <>
            <input onChange={(data) => {setUsername(data.target.value)}} />
            <input onChange={(data) => {setPassword(data.target.value)}} />

            <button onClick={onLogIn}>LogIn</button>
            <h2 style={{color: 'red'}} >{error}</h2>
        </>
    )
}

export default LogIn;