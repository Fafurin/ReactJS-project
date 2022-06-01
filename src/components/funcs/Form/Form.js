import React from "react";

import {useState} from 'react'

import style from './Form.module.css'

export const Form = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <p className={style.background}>{count}</p>
            <button onClick={handleClick}>click</button>
        </>
    )
}