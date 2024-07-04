import { useState } from 'react';
import './ChatWindow.scss'
import Header from '../Header/Header';
import ChatInput from '../../components/ChatInput/ChatInput';

function ChatWindow() {

    const [isContent, setisContent] = useState(false);
    return (
        <div className='w-1/10 border border-bdr-color grow relative flex flex-col max-w-full flex-1 overflow-hidden bg-white dark:bg-dark-light dark:text-white'>
            {/* <div>Add Extra Elements</div> */}
            <div className="flex h-full flex-col ">
                <div className="chat-view flex-1 overflow-hidden">

                    <div className="relative h-full">
                        <div className="chat-header absolute left-0 right-0 border">
                            <Header></Header>
                        </div>
                        <div className="chat-content flex h-full flex-col items-center justify-center border border-green">
                            <div className="relative">
                                <div className="mb-3 h-12 w-12"></div>
                            </div>
                            {isContent ?
                                <div>
                                    ifContent
                                </div>
                                :
                                <div>
                                    ifNotContent
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="chat-input border p-3">
                    <div className="mx-auto flex flex-1 gap-3 text-base max-w-[48rem]">
                        <ChatInput/>
                    </div>
                    
                </div>
            </div>
            {/* <div>Add Extra Elements</div> */}
        </div>
    );
}

export default ChatWindow