import {FC, useCallback, useEffect} from 'react';
import {MessageList} from "../components/MessageList/MessageList";
import {Form} from "../components/Form";
import {Chat} from "../constants";
import {Authors, Message, Messages} from "../constants";
import React from 'react';
import {ChatList} from "../components/ChatList/ChatList";
import {Navigate, useParams} from "react-router-dom";

interface ChatPageProps {
    chats: Chat[],
    onAddChat: (chat: Chat) => void,
    messages: Messages,
    onAddMessage: (id: string, msg: Message) => void,
    onDeleteChat: (chatId: string) => void
}

export const ChatPage: FC<ChatPageProps> = ({chats, onAddChat, messages, onAddMessage, onDeleteChat}) => {
    const { chatId } = useParams();

    useEffect(() => {
        if (chatId && messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === Authors.user) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: Authors.bot,
                    text: 'Hello, Im BOT',
                })
            }, 1000);

            return ()=>{clearTimeout(timeout)};
        }
    }, [chatId, messages]);

    const handleAddMessage = useCallback((message: Message) => {
        if(chatId){
            onAddMessage(chatId, message);
        }
    }, [chatId]);

    if(chatId && !messages[chatId]){
        return <Navigate to="/chats"/>;
    }

    return (
        <>
            <ChatList chats={chats} onAddChat={onAddChat} onDeleteChat={onDeleteChat}/>
            <MessageList messages={chatId ? messages[chatId] : []}/>
            <Form addMessage={handleAddMessage}/>
        </>
    )
}