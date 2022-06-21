import {StoreState} from "../index";
import {nanoid} from "nanoid";

export const selectChats = (state: StoreState) =>
        Object.keys(state.messages).map((chat) => ({
            id: nanoid(),
            name: chat,
        }));

export const selectMessages = (state: StoreState) => state.messages;

