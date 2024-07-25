import { useState } from 'react'
import './Container.scss'
import {SideBar} from './conent/Sidebar/Sidebar';
import {ChatWindow} from './conent/ChatWindow/ChatWindow';

function Container() {

const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const [darkMode, setDarkMode] = useState(isSystemDarkTheme.matches);
isSystemDarkTheme.addEventListener('change', e => e.matches ? setDarkMode(true) : setDarkMode(false));



  return (
    <div className={`font-sans w-screen h-screen ${darkMode && 'dark'} `}>
      <div className="h-full w-full flex flex-col md:flex-row bg-lightTheme-white text-lightTheme-text dark:darkTheme-dark-light dark:text-darkTheme-text">
      <SideBar toggleDarkMode={() => {setDarkMode((e)=>!e)}}></SideBar>
      <ChatWindow></ChatWindow>
      </div>
      
    </div>
  )
}

export default Container
