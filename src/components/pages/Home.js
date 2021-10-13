import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [message, setMessage] = useState("Please Log In!")
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem('user')){
            setMessage("Welcome")
        }
    }, []);

    const onLogOut = () => {
        localStorage.removeItem('user');
        history.push('/')
    }
    
    return(
        <>
            <h1>{message}</h1>
            <button onClick={onLogOut}>Log Out</button>
        </>
    )
}

export default Home;