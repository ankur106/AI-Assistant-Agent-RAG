import './ChatInput.scss';
import { FaCircleArrowUp } from "react-icons/fa6";;
import { SiCircle } from "react-icons/si";

export const ChatInput : React.FC =()=>{
    return(
        <div className='flex w-full items-center'>
            <div className='flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 bg-[#f4f4f4] dark:bg-[#2f2f2f]'>
                <div className="flex item-end gap-1.5 md:gap-2">
                    <div className='flex items-center justify-center px-[10px]'>
                    <SiCircle size="1.5rem"/>
                    </div>
                    <div className='flex min-w-0 flex-1 flex-col'>
                        <textarea name="" id="chat-input" rows={1} placeholder='Ask Question' dir='auto' tabIndex={0} className='m-0 resize-none border-0 bg-transparent px-0 py-[0.50rem]  overflow-y-scroll focus:outline-none '></textarea>
                    </div>
                    <div className='flex items-center justify-center text-[#D7D7D7] dark:text-[#676767] py-[3px]'>
                        <FaCircleArrowUp size='2rem'></FaCircleArrowUp>
                    </div>
                </div>
            </div>
        </div>
    );
}
