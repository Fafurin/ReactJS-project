import style from "../MessageList/MessageList.module.css";
import {useState} from "react";
import {AUTHOR} from "../../constants";
import {Button} from "./components/Button";
import {Textarea} from "./components/Textarea";

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
            <Textarea text={text} setText={setText}/>
            <br/>
            <Button label="send"/>
        </form>
    );
};