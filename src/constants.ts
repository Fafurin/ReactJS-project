export enum Authors {
    user = 'USER',
    bot = 'BOT'
}

export interface Chat {
    id: string,
    name: string
}

export interface Message {
    author: Authors,
    text: string
}

export interface Messages {
    [key: string]: Message[];
}