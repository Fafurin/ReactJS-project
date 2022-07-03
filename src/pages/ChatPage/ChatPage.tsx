import React, {FC} from 'react';
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form";
import {ChatList} from "../../components/ChatList/ChatList";
import {Navigate, useParams} from "react-router-dom";
import {WithClasses} from "../../HOC/WithClasses";

import style from './ChatPage.module.css';

interface ChatPageProps {
    chats: any[],
    messagesDB: any,
}

export const ChatPage: FC<ChatPageProps> = ({chats, messagesDB}) => {
    const {chatId} = useParams();
    const MessageListWithClass = WithClasses(MessageList);

    if (chatId && !messagesDB.find((chat: any) => chat?.name === chatId)) {
        return <Navigate to="/chats"/>;
    }

    const messages = Object.entries(
        messagesDB.find((chat: any) => chat?.name === chatId).messageList).map((message: any) => ({
        id: message[0],
        text: message[1].text,
        author: message[1].author
    }));

    return (
        <>
            <ChatList chats={chats} messagesDB={messagesDB}/>
            <MessageListWithClass messages={chatId ? messages : []} classes={style.border}/>
            <Form/>
        </>
    )
}