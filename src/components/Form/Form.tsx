import React, {memo} from "react";
import {FC, useState} from "react";
import {Authors, Message} from "../../constants";
import {Button} from "./components/Button";
import {Textarea} from "./components/Textarea";

interface FormProps {
    addMessage: (msg: Message) => void
}

export const Form: FC<FormProps> = memo(({addMessage}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addMessage({
            author: Authors.user,
            text,
        });
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Textarea text={text} setText={setText}/>
            <br/>
            <Button>
                Send
            </Button>
        </form>
    );
});