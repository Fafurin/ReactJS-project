import React, {FC, useState} from "react";
import {nanoid} from 'nanoid';
import {ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {Chat} from "../../constants";

interface ChatListProps {
    chats: Chat[],
    onAddChat: (chat: Chat) => void,
    onDeleteChat: (chatName: string) => void
}

export const ChatList: FC<ChatListProps> = ({chats, onAddChat, onDeleteChat}) => {

    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(value){
            onAddChat({
                id: nanoid(),
                name: value,
            });
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
                        <button onClick={() => {onDeleteChat(chat.name)}}>Delete Chat</button>
                    </ListItem>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <button>Create Chat</button>
            </form>
        </>
    );
};