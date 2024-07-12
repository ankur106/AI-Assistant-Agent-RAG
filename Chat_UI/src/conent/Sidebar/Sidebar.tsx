import './Sidebar.scss'
import { SiCircle } from "react-icons/si";

export const  SideBar:React.FC = ()=>{

    return (
        <div className=' w-16  bg-lightTheme-white-light text-lightTheme-text dark:bg-darkTheme-dark dark:text-darkTheme-text'>
            <div className='flex items-center justify-center mt-3' >
                <SiCircle size="2rem"/>
            </div>
        </div>
    );
}
