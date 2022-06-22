<<<<<<< HEAD
import React from "react";
import {FC} from "react";
import {Message} from "../../store/messages/reducer";
=======
import {FC} from "react";
import {Message} from "../../types";
>>>>>>> master

interface MessageListProps {
    messages: Message[]
}

<<<<<<< HEAD
export const MessageList: FC<MessageListProps> = ({messages}) => {
    return (
=======
export const MessageList: FC<MessageListProps> = ({messages}) => (
>>>>>>> master
        <ul>
            {messages.map((message, index) => (
            <li key={index}>
                {message.author}: {message.text}
            </li>
            ))}
        </ul>
<<<<<<< HEAD
    );
};
=======
);
>>>>>>> master
