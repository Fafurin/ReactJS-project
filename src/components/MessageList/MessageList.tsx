import React from "react";
import {FC} from "react";
import {Message} from "../../constants";

interface MessageListProps {
    messages: Message[]
}

export const MessageList: FC<MessageListProps> = ({messages}) => {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>
                    {message.author}: {message.text}
                </li>
            ))}
        </ul>
    );
};


