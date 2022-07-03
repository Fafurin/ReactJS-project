import React, {memo} from "react";
import {FC, useState} from "react";
import {Button} from "./components/Button";
import {Textarea} from "./components/Textarea";
import {useParams} from "react-router-dom";
import {Authors} from "../../constants";
import {getMessageListById} from "../../services/firebase";
import {push} from "firebase/database";

export const Form: FC = memo(() => {

    const [text, setText] = useState('');

    const {chatId} = useParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            push(getMessageListById(chatId), {
                text,
                author: Authors.user
            });
        }
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Textarea text={text} setText={setText}/>
            <br/>
            <Button>Send</Button>
        </form>
    );
});