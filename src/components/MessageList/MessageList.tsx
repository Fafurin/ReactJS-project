<<<<<<< HEAD
import React from "react";
import {FC} from "react";
import {Message} from "../../constants";
=======

import React from "react";
import {FC} from "react";
import {Message} from "../../store/messages/reducer";
>>>>>>> master

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
<<<<<<< HEAD
};
=======
}; 
>>>>>>> master
