import React from "react";
import {FC} from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../store/profile/selectors";
import {logOut} from "../services/firebase";

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
    {
        id: 7,
        name: 'SignUp',
        to: '/signup'
    },
]

export const Header: FC = () => {
    const isAuth = useSelector(selectAuth);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/signin', {replace: true});
    }

    const handleSignUp = () => {
        navigate('/signup', {replace: true});
    }

    const handleLogOut = async () => {
        await logOut();
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
                <div>
                    {!isAuth && (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <button onClick={handleSignUp}>Sign Up</button>
                        </>
                    )}
                    {isAuth && (
                        <>
                            <button onClick={handleLogOut}>Log Out</button>
                        </>
                    )}
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
}