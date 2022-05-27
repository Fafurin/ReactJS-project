import React from 'react';
import {useState} from 'react'

import style from './Toggle.module.css'
import { List } from "../List/List";

export const Toggle = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <>
            <button className={style.button} onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
            {toggle && <List/>}
        </>
    )
}