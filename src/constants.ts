export enum Authors {
    user = 'USER',
    bot = 'BOT'
}

export interface Message {
    author: Authors,
    text: string
}

export type MessageWithId = {id: string} & Message;

export interface AddMessage {
    chatName: string,
    message: Message,
}

export const api = 'https://api.spaceflightnewsapi.net/v3/articles';
