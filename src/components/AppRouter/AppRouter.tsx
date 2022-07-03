import React, {FC, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "../Header";
import {Main} from "../../pages/Main";
import {PrivateRoute} from "../PrivateRoute";
import {Articles} from "../../pages/Articles";
import {AboutWithConnect} from "../../pages/About";
import {PublicRoute} from "../PablicRoute";
import {SignIn} from "../../pages/SignIn";
import {SignUp} from "../../pages/SignUp";
import {ChatList} from "../ChatList/ChatList";
import {ChatPage} from "../../pages/ChatPage/ChatPage";
import {Profile} from "../../pages/Profile";
import {firebaseAuth, messagesRef} from "../../services/firebase";
import {useDispatch} from "react-redux";
import {changeAuth} from "../../store/profile/slice";
import {onValue} from "firebase/database";

export const AppRouter: FC = () => {
    const dispatch = useDispatch();
    const [chats, setChats] = useState<any[]>([]);
    const [messagesDB, setMessagesDB] = useState<any>({});

    useEffect(() => {
       const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            if(user){
                dispatch(changeAuth(true));
            }else{
                dispatch(changeAuth(false));
            }
        });
       return unsubscribe;
    }, [dispatch]);


    useEffect(()=>{
        const unsubscribe = onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const newChats = Object.entries(data).map((item: any) => ({
                id: item[0],
                name: item[1].name,
            }));

            setChats(newChats);
            setMessagesDB(data);
        });
        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<Main/>}/>
                <Route path="profile" element={<PrivateRoute component={<Profile/>}/>}/>
                <Route path="articles" element={<Articles/>}/>
                <Route path="about" element={<AboutWithConnect/>}/>
                <Route path="signin" element={<PublicRoute component={<SignIn/>}/>}/>
                <Route path="signup" element={<PublicRoute component={<SignUp/>}/>}/>
                <Route path="chats" element={<PrivateRoute/>}>
                    <Route index element={<ChatList chats={chats} messagesDB={messagesDB}/>}/>
                    <Route path=":chatId" element={<ChatPage chats={chats} messagesDB={messagesDB}/>}/>
                </Route>
            </Route>
            <Route path="*" element={<h2>404 page</h2>}/>
        </Routes>
    );
};