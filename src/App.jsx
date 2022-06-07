import {useEffect, useState} from 'react';
import {MessageList} from "./components/MessageList/MessageList";
import {Form} from "./components/Form/Form";
import {AUTHOR} from "./constants";

// export const arr = [{
//     author: AUTHOR.user,
//     text: 'Hello!',
//     }
// ];

export const App = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage) => {
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