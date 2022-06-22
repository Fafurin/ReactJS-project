import {FC} from 'react';
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form";
import React from 'react';
import {ChatList} from "../../components/ChatList/ChatList";
import {Navigate, useParams} from "react-router-dom";
import {WithClasses} from "../../HOC/WithClasses";
import {shallowEqual, useSelector} from "react-redux";
import {selectMessages} from "../../store/messages/selectors";

import style from './ChatPage.module.css';


export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const MessageListWithClass = WithClasses(MessageList);

    const messages = useSelector(selectMessages, shallowEqual);

    // useEffect(() => {
    //     if (chatId && messages[chatId]?.length > 0 &&
    //         messages[chatId][messages[chatId].length - 1].author === Authors.user) {
    //         const timeout = setTimeout(() => {
    //             onAddMessage(chatId, {
    //                 author: Authors.bot,
    //                 text: 'Hello, Im BOT',
    //             })
    //         }, 1000);
    //
    //         return ()=>{clearTimeout(timeout)};
    //     }
    // }, [chatId, messages]);

    if(chatId && !messages[chatId]){
        return <Navigate to="/chats"/>;
    }

    return (
        <>
            <ChatList/>
            <MessageListWithClass messages={chatId ? messages[chatId] : []} classes={style.border}/>
            <Form/>
        </>
    )
}