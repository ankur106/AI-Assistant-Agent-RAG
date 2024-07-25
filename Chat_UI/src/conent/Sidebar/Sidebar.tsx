import './Sidebar.scss'
import { SiCircle } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";

export const  SideBar:React.FC<{toggleDarkMode : ()=> void}> = ({toggleDarkMode})=>{

    return (
        <div className='w-full  md:w-16  bg-lightTheme-white-light text-lightTheme-text dark:bg-darkTheme-dark dark:text-darkTheme-text'>
            <div className='flex  h-full md:h-[calc(100%-20px)] md:flex-col items-center justify-center justify-between p-4' >
                <SiCircle size="2rem"/>
                <MdOutlineDarkMode size="2.5rem" className='cursor-pointer rounded-lg  hover:bg-[#f9f9f9] dark:hover:bg-[#2f2f2f] p-2' onClick={toggleDarkMode}/>

            </div>
        </div>
    );
}
