import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CHAT, Ichat } from "../healper/healper";
import { RootState } from "./store";

// const initial: Ichat[] = [
//     {
//         [CHAT.ISLOAING]: false,
//         [CHAT.ID]: nanoid(),
//         [CHAT.USER]: MessageTypeEnum.ASSISTANT,
//         [CHAT.MESSAGE]: "Hello, I am AI assitant. I can answer any question about Ankur. I can also help in scheduling meeting. Pleaser let me know any queries."
//     },
//     {
//         [CHAT.ISLOAING]: false,
//         [CHAT.ID]: nanoid(),
//         [CHAT.USER]: MessageTypeEnum.USER,
//         [CHAT.MESSAGE]: "tell me about Ankur's background"
//     }
// ];

const initial2 : Ichat[] = []



const chatSlice = createSlice({
    name: 'chat',
    // initialState: initial,
    initialState: initial2,

    reducers: {
        updateChat(state, action: PayloadAction<{id:string, message:string, isLoading: boolean}>) {

            const newState = state.map((item) => {
                if (item[CHAT.ID] === action.payload.id) {
                    return {
                        ...item,
                        [CHAT.MESSAGE]: action.payload.message,
                        [CHAT.ISLOAING] : action.payload.isLoading
                    };
                }
                return item;
            });
            console.log(newState);
            return newState;
        },
        removeChat(state, action : PayloadAction<string>) {
            const newState =  state.filter((item)=> item[CHAT.ID] != action.payload);
            return [...newState];
        },
        addMessages(state, action: PayloadAction<Ichat[]>) {
            return [...state, ...action.payload];
        }
    }
});

export const currentChat = (state: RootState) => state.chat;


export const { updateChat, removeChat, addMessages } = chatSlice.actions
export default chatSlice.reducer
