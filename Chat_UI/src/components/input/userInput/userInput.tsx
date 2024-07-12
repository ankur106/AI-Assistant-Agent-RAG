import './UserInput.scss'

export const UserInput:React.FC = ()=>{

    return(
        <div className='w-full  py-1 px-3 md:px-4 mb-3 md:px-5 lg:px-1 xl:px-5 text-lightTheme-text dark:text-darkTheme-text-light text-base'>
            
            <div className='w-full flex flex-col items-end'>
                <div className='relative max-w-[70%] bg-[#f4f4f4] px-5 py-2.5 dark:bg-[#2E2E2E] rounded-3xl'>give me long essay on life</div>
            </div>
        </div>
    );
}