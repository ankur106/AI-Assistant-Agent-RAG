import { useState } from 'react';
import './ChatWindow.scss'
import {Header} from '../Header/Header';
import {ChatInput} from '../../components/ChatInput/ChatInput';
import { SiCircle } from "react-icons/si";
import { UserInput } from '../../components/input/userInput/userInput';
import { ChatResponse } from '../../components/input/charResponse/ChatResponse';

export const  ChatWindow : React.FC = () => {

    const [isContent, setisContent] = useState(true);
    return (
        <div className='  grow relative flex flex-col max-w-full flex-1 overflow-hidden dark:bg-darkTheme-dark-light dark:text-darkTheme-text'>
            {/* <div>Add Extra Elements</div> */}
            <div className="flex h-full flex-col ">
                <div className="chat-view flex-1 overflow-hidden">

                    <div className="relative h-full ">
                        <div className="chat-header absolute left-0 right-0 ">
                            <Header></Header>
                        </div>
                        <div className="chat-content flex h-full flex-col items-center justify-center ">
                            {/* <div className="relative">
                                <div className="mb-3 h-12 w-12"></div>
                            </div> */}
                            {isContent ?
                                <div className='w-full h-full flex  flex-col justify-center items-center pb-7 overflow-y-auto mt-10'>
                                    <div className='w-[75%] h-full'>
                                    <UserInput/>
                                    <ChatResponse/>

                                    <UserInput/>
                                    <ChatResponse/>

                                    <UserInput/>
                                    <ChatResponse/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <SiCircle size="5rem"/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="chat-input p-3">
                    <div className="mx-auto flex flex-1 gap-3 text-base max-w-[48rem]">
                        <ChatInput/>
                    </div>
                    <div className='flex grow-1 justify-center text-xs py-[5px] text-lightTheme-text-light dark:text-darkTheme-text-light'>Checkout the code at &nbsp;<a href="https://github.com/ankur106/AI-Assistant-Agent-RAG" target='_blank' className="text-link-blue visited:text-link-purple">github.com/ankur106/AI-Assistant-Agent-RAG</a></div>
                </div>
            </div>
            {/* <div>Add Extra Elements</div> */}
        </div>
    );
}

