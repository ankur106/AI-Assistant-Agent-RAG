import './ChatInput.scss'

function ChatInput(){
    return(
        <div className='flex w-full items-center'>
            <div className='flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 bg-[#f4f4f4] dark:bg-[#2f2f2f]'>
                <div className="flex item-end gap-1.5 md:gap-2">
                    <div>icon</div>
                    <div className='flex min-w-0 flex-1 flex-col'>
                        <textarea name="" id="chat-input" rows={1} placeholder='Ask Question' dir='auto' tabIndex={0} className='m-0 resize-none border-0 bg-transparent px-0 py-[0.50rem]  overflow-y-scroll focus:outline-none '></textarea>
                    </div>
                    <button> Button</button>
                </div>
            </div>
        </div>
    );
}

export default ChatInput;