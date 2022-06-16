import React, {useMemo, useState} from "react";
import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {Profile} from "./pages/Profile";
import {ChatList} from "./components/ChatList/ChatList";
import {Header} from "./components/Header";
import {ChatPage} from "./pages/ChatPage";
import {Chat, Messages, Message} from "./constants";
import {nanoid} from "nanoid";

const defaultMessages: Messages = {
    default: [],
};

export const App: FC = () => {
    const [messages, setMessages] = useState(defaultMessages);

    const chats = useMemo(
        () =>
        Object.keys(messages).map((chat) => ({
            id: nanoid(),
            name: chat,
        })),
        [Object.keys(messages).length]
    );

    const onAddChat = (newChat: Chat) => {
        setMessages({
            ...messages,
            [newChat.name]: [],
        })
    };

    const onDeleteChat = (chatId: string) => {
        const index = chats.findIndex(n => n.id === chatId);
        if (index !== -1) {
            chats.splice(index, 1);
        }
    }

    const onAddMessage = (chatId: string, newMessage: Message) => {
        setMessages({
            ...messages,
            [chatId]: [...messages[chatId], newMessage],
        });
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Main/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="chats">
                        <Route
                            index element={<ChatList chats={chats} onAddChat={onAddChat} onDeleteChat={onDeleteChat}/>}
                        />
                        <Route
                            path=":chatId"
                            element={
                                <ChatPage
                                    chats={chats}
                                    onAddChat={onAddChat}
                                    messages={messages}
                                    onAddMessage={onAddMessage}
                                    onDeleteChat={onDeleteChat}
                                />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<h2>404 page</h2>}/>
            </Routes>

        </BrowserRouter>
    );
};