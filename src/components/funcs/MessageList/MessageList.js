import {useState} from "react";

import style from './MessageList.module.css'

export const MessageList = () => {

    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const result = messages.map((message, index) => {
        return (
            <div key={index} className={style.message}>
                <p className={style.name}>{message.name}</p>
                <p>{message.text}</p>
            </div>
        );
    });

    return (
        <div className={style.block}>
            <div className={style.form}>
                <p className={style.label}>Name:</p>
                    <input value={name} onChange={event => setName(event.target.value)} type="text" className={style.input}/>
                <p className={style.label}>Message:</p>
                    <textarea value={message} onChange={event => setMessage(event.target.value)} className={style.text}/>
                <br/>
                <button onClick={() => setMessages([...messages, {'name': name, 'text': message}])} className={style.button}>Send</button>
            </div>
            {result}
        </div>
    );
}