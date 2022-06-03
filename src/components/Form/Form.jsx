import style from "../MessageList/MessageList.module.css";
import {useState} from "react";
import {AUTHOR} from "../../constants";

export const Form = ({addMessage}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: AUTHOR.user,
            text,
        });
        setText('');
    }



    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <p className={style.label}>Message:</p>
            <textarea value={text} onChange={event => setText(event.target.value)} className={style.text}/>
            <br/>
            <button>Send</button>
        </form>
    );
};