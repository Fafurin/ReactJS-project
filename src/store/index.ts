import {combineReducers} from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {profileReducer} from "./profile/slice";
import {messagesReducer} from "./messages/slice";
import {articlesReducer} from "./articles/slice";
import {configureStore} from "@reduxjs/toolkit";
// import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

// export type StoreState = ReturnType<typeof rootReducer>;

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: []
// }

export const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    articles: articlesReducer
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoredActions: [FLUSH, REHYDRATE, PAUSE,  PERSIST, PURGE, REGISTER]
    //     }
    // })
});

// export const persistor = persistStore(store);