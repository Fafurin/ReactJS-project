import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../store/profile/slice";
import {useNavigate} from "react-router-dom";

export const SignIn: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        if(login === 'gb' && password === 'gb') {
            dispatch(auth(true));
            navigate('/', {replace: true});
        } else {
            setError(true);
        }
    };

    return (
        <>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <p>Login</p>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
            {error && <p style={{color: 'red'}}>Login or password is uncorrected</p>}
        </>
    )
}