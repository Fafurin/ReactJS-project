import React from "react";
import {FC, useState} from "react";
import {AUTHOR} from "../../constants";
import {Button} from "./components/Button";
import {Textarea} from "./components/Textarea";
import {Message} from "../../types";

interface FormProps {
    addMessage: (msg: Message) => void
}

export const Form: FC<FormProps> = ({addMessage}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addMessage({
            author: AUTHOR.user,
            text,
        });
        setText('');
    }

    const handleClickButton = () => {
        console.log('Button click');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Textarea text={text} setText={setText}/>
            <br/>
            <Button label="send" click={handleClickButton} />
        </form>
    );
};