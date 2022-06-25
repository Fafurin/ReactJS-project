import React, {memo} from "react";
import {FC, useState} from "react";
import {Button} from "./components/Button";
import {Textarea} from "./components/Textarea";
import {useDispatch} from "react-redux";
import {addMessageWithReply} from "../../store/messages/actions";
import {useParams} from "react-router-dom";
import {Authors} from "../../constants";
import {ThunkDispatch} from "redux-thunk";

export const Form: FC = memo(() => {

    const [text, setText] = useState('');

    const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
    const {chatId} = useParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            dispatch(addMessageWithReply(chatId, {author: Authors.user, text}));
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