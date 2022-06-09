import {FC} from "react";
import {Message} from "../../types";

interface MessageListProps {
    messages: Message[]
}

export const MessageList: FC<MessageListProps> = ({messages}) => (
        <ul>
            {messages.map((message, index) => (
            <li key={index}>
                {message.author}: {message.text}
            </li>
            ))}
        </ul>
);