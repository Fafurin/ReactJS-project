import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../../store/messages/slice";
import {ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {selectChats} from "../../store/messages/selectors";

export const ChatList: FC = () => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const chats = useSelector(
        selectChats,
        (prev, next) => prev.length === next.length
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(value){
            dispatch(addChat({name: value}));
            setValue('');
        }
    };

    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                        <button onClick={() => dispatch(deleteChat({name: chat.name}))}>Delete Chat</button>
                    </ListItem>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button>Create Chat</button>
            </form>
        </>
    );
};