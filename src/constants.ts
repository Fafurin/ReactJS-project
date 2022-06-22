export enum Authors {
    user = 'USER',
    bot = 'BOT'
}

export interface Message {
    author: Authors,
    text: string
}