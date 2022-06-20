import React, {Suspense, useMemo, useState} from "react";
import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {ChatList} from "./components/ChatList/ChatList";
import {Header} from "./components/Header";
import {ChatPage} from "./pages/ChatPage/ChatPage";
import {Chat, Messages, Message} from "./constants";
import {nanoid} from "nanoid";
import {defaultContext} from "./utils/ThemeContext";
import {ThemeContext} from "./utils/ThemeContext";
import {store} from "./store";
import {Provider} from "react-redux";
// import {Profile} from "./pages/Profile";

// const Profile = React.lazy(()=> import('./pages/Profile').then(component => ({
//     default: component.Profile
// })));

const Profile = React.lazy(()=> import('./pages/Profile').then(({Profile}) => ({
    default: Profile
})));

const defaultMessages: Messages = {
    default: [],
};

export const App: FC = () => {
    const [messages, setMessages] = useState(defaultMessages);
    const [theme, setTheme] = useState(defaultContext.theme);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

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

    const onDeleteChat = (chatName: string) => {
        const newMessages = {... messages};
        delete newMessages[chatName];
        setMessages(newMessages);
    }

    const onAddMessage = (chatId: string, newMessage: Message) => {
        setMessages({
            ...messages,
            [chatId]: [...messages[chatId], newMessage],
        });
    };

    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <ThemeContext.Provider
                    value={{
                        theme,
                        toggleTheme
                    }}
                >
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
                </ThemeContext.Provider>
            </Suspense>
        </Provider>
    );
};