import React from "react";
import {FC} from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../store/profile/selectors";
import {auth} from "../store/profile/slice";

export const nav = [
    {
        id: 1,
        name: 'Main',
        to: '/'
    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile'
    },
    {
        id: 3,
        name: 'Chats',
        to: '/chats'
    },
    {
        id: 4,
        name: 'Articles',
        to: '/articles'
    },
    {
        id: 5,
        name: 'About',
        to: '/about'
    },
    {
        id: 6,
        name: 'SignIn',
        to: '/signin'
    },
]

export const Header: FC = () => {
    const isAuth = useSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        navigate('/signin', {replace: true});
    }

    return (
        <>
            <header>
                <ul style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'bisque'}}>
                    {nav.map(link => (
                        <li key={link.id}>
                            <NavLink
                                to={link.to}
                                style={({isActive}) => ({color: isActive ? 'burlywood' : 'olivedrab'})}
                            >
                                    {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div>{isAuth && <button onClick={() => dispatch(auth(false))}>Logout</button>}</div>
                <div>{!isAuth && <button onClick={handleLogin}>Login</button>}</div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
}