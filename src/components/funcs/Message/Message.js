import React from 'react';
import {useState} from 'react'

import style from './Message.module.css'

export const Message = () => {
    const [message, setMessage] = useState('Lesson 1');

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <>
            <p className={style.p}>Message: {message}</p>
            <input className={style.input} type="text" onChange={handleChange} value={message}/>
        </>
    )
}