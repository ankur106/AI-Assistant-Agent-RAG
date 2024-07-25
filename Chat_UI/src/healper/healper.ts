export type MessageType = "user" | "assistant" | "system" | "memory";

export enum MessageTypeEnum {
    USER = "user",
    ASSISTANT  = "assistant",
    SYSTEM = "system",
    MEMORY = "memory"
}

export enum CHAT{
    USER = "user",
    MESSAGE = 'message',
    ID = 'id',
    ISLOAING = 'isLoading',
    STREAM = 'stream'
}

export interface Ichat{
    [CHAT.USER] : MessageType,
    [CHAT.MESSAGE] : string,
    [CHAT.ID] : string,
    [CHAT.ISLOAING] : boolean
    [CHAT.STREAM] ?: ReadableStream | undefined
}