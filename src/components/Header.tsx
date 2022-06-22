import React from "react";
import {FC} from "react";
import {NavLink, Outlet} from "react-router-dom";

export const navigate = [
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
        name: 'About',
        to: '/about'
    },
]

export const Header: FC = () => {
    return (
        <>
            <header>
                <ul style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'bisque'}}>
                    {navigate.map(link => (
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
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
}