import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {logIn} from "../services/firebase";

export const SignIn: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
            setLoading(true);
            setError('');
            await logIn(email, password);
            navigate('/chats', {replace: true});
        }catch (err){
            setError((err as Error).message);
        }finally {
            setLoading(false)
        }
    };

    return (
        <>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <p>Login</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
            {loading && <div>Loading...</div>}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    )
}