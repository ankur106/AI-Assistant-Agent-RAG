import { useEffect, useRef, useState } from 'react';
import './ChatWindow.scss'
import { Header } from '../Header/Header';
import { ChatInput } from '../../components/ChatInput/ChatInput';
import { SiCircle } from "react-icons/si";
import { UserInput } from '../../components/input/userInput/userInput';
import { ChatResponse } from '../../components/input/charResponse/ChatResponse';
import { CHAT, Ichat, MessageTypeEnum } from '../../healper/healper';
import { useDispatch, useSelector } from 'react-redux';
import { currentChat , addMessages, updateChat, removeChat} from '../../store/chat.slice';
import { nanoid } from 'nanoid';

export const ChatWindow: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isContent, setisContent] = useState<boolean>(false);
    const [isLoading, setisLoading] = useState<boolean>(false);

    const chat: Ichat[] = useSelector(currentChat);
    const dispatch = useDispatch();
    useEffect(() => {
        if (chat.length > 0) setisContent(true);
        if (containerRef.current) {
                    
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }

    }, [chat]);


    const sendMessage = (message : string)=>{
        // const message = "tell me about Ankur";
        const userMessage = getUserMessage();
        userMessage[CHAT.MESSAGE] = message;
        const assistantMessage = getAssistantMessage();
        setisLoading(true);

        const ChatHistory = chat.map((item)=>{
            const obj = {
                role : item[CHAT.USER],
                content : item[CHAT.MESSAGE]
            }
            return obj;
        });
        dispatch(addMessages([userMessage, assistantMessage]));

        fetch('https://ybiaghphzhohf2vcdmdy2v5fvi0aictl.lambda-url.us-east-1.on.aws/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                ChatHistory : ChatHistory
            })
        }).then((response) => {
            const reader = response.body!.getReader();
            const decoder = new TextDecoder('utf-8');
            let message = "";
            function readStream(): any {
                return reader.read().then(({ done, value }) => {
                    if (done) {
                        console.log('Stream complete');
                        setisLoading(false);
                        dispatch(updateChat({id : assistantMessage[CHAT.ID], message : message, isLoading : false}));
                        return;
                    }
                    // if (containerRef.current) {
                    
                    //     containerRef.current.scrollTop = containerRef.current.scrollHeight;
                    // }
                    message = message + decoder.decode(value, { stream: true })
                    console.log(message);
                    // Process the chunk (value) here
                    dispatch(updateChat({id : assistantMessage[CHAT.ID], message : message, isLoading : true}));
                    // Read the next chunk
                    return readStream();
                }).catch((error: any) => {
                    console.error('Stream reading error:', error);
                    alert("Error while data streaming");
                    dispatch(removeChat(assistantMessage[CHAT.ID]));
                });
            }

            // Start reading the stream
            readStream();
        }).catch((e)=>{
            console.log(e);
            alert("Internal Server Erorr");
            dispatch(removeChat(assistantMessage[CHAT.ID]));
        })
    }


    return (
        <div className='  grow relative flex flex-col max-w-full flex-1 overflow-hidden dark:bg-darkTheme-dark-light dark:text-darkTheme-text'>
            {/* <div>Add Extra Elements</div> */}
            <div className="flex h-full flex-col ">
                <div className="chat-view flex-1 overflow-hidden">

                    <div className="relative h-full ">
                        <div className="chat-header absolute left-0 right-0 ">
                            <Header></Header>
                        </div>
                        <div className="chat-content flex h-full flex-col items-center justify-center">
                            {/* <div className="relative">
                                <div className="mb-3 h-12 w-12"></div>
                            </div> */}
                            {isContent ?
                                <div className='w-full h-full flex flex-col  items-center pb-7 mt-10 max-h-[calc(100vh-200px)] justify-end chats' ref={containerRef}>
                                    <div className='w-[97%] md:w-[50%] max-h-full'>

                                        {chat.map((item: Ichat) => {
                                            if (item[CHAT.USER] == MessageTypeEnum.USER) {
                                                return <UserInput message={item[CHAT.MESSAGE]} isloading={item[CHAT.ISLOAING]} key={item[CHAT.ID]} />
                                            } else if (item[CHAT.USER] == MessageTypeEnum.ASSISTANT) {
                                                return <ChatResponse message={item[CHAT.MESSAGE]} isloading={item[CHAT.ISLOAING]} key={item[CHAT.ID]} />
                                            }
                                            return null;
                                        })}
                                        {/* <UserInput/>
                                    <ChatResponse/> */}
                                    </div>
                                </div>
                                :
                                <div>
                                    <SiCircle size="5rem" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="chat-input p-3">
                    <div className="mx-auto flex flex-1 gap-3 text-base max-w-[48rem]">
                        <ChatInput isLoading = {isLoading} sendMessage={sendMessage} />
                    </div>
                    <div className='flex grow-1 justify-center text-xs py-[5px] text-lightTheme-text-light dark:text-darkTheme-text-light'>Checkout the code at &nbsp;<a href="https://github.com/ankur106/AI-Assistant-Agent-RAG" target='_blank' className="text-link-blue visited:text-link-purple">github.com/ankur106/AI-Assistant-Agent-RAG</a></div>
                </div>
            </div>
            {/* <div>Add Extra Elements</div> */}
        </div>
    );
}


function getUserMessage(){
    return {
        [CHAT.ISLOAING]: false,
        [CHAT.ID]: nanoid(),
        [CHAT.USER]: MessageTypeEnum.USER,
        [CHAT.MESSAGE]: ""
    }
}

function getAssistantMessage(){
    return {
        [CHAT.ISLOAING]: false,
        [CHAT.ID]: nanoid(),
        [CHAT.USER]: MessageTypeEnum.ASSISTANT,
        [CHAT.MESSAGE]: "",
    }
}

