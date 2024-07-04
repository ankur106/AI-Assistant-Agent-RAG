import { useState } from 'react'
import './Container.scss'
import Sidebar from './conent/Sidebar/Sidebar';
import ChatWindow from './conent/ChatWindow/ChatWindow';

function Container() {

const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const [darkMode, toggleDarkMode] = useState(isSystemDarkTheme.matches);

  return (
    <div className={`font-sans w-screen h-screen ${darkMode && 'dark'} `}>
      <div className="h-full w-full flex bg-lightTheme-white text-lightTheme-text dark:darkTheme-dark-light dark:text-darkTheme-text">
      <Sidebar></Sidebar>
      <ChatWindow></ChatWindow>
      </div>
      
    </div>
  )
}

export default Container
