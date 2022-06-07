import style from './MessageList.module.css'

export const MessageList = ({messages}) => {
    return (
        <ul>
            {messages.map((message, index) => (
            <li key={index} className={style.message}>
                {message.author}: {message.text}
            </li>
            ))}
        </ul>
    );
};