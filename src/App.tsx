import {FC, useEffect, useState} from 'react';
import {MessageList} from "./components/MessageList/MessageList";
import {Form} from "./components/Form";
import {AUTHOR} from "./constants";
import {Message} from "./types";
import React from 'react';

export const App: FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const addMessage = (newMessage: Message) => {
        setMessages([...messages, newMessage]);
    };

    useEffect(() => {
        if (messages.length > 0 &&
            messages[messages.length - 1].author === AUTHOR.user) {
            const timeout = setTimeout(() => {
                        addMessage({
                        author: AUTHOR.bot,
                        text: 'Hello, Im BOT',
                    })
                }, 1000);

            return ()=>{clearTimeout(timeout)};
        }
    }, [messages]);

    return (
        <div className="app">
            <MessageList messages={messages}/>
            <Form addMessage={addMessage}/>
        </div>
    )
}