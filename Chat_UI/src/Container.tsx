import { useState } from 'react'
import './Container.scss'
import Sidebar from './conent/Sidebar/Sidebar';
import ChatWindow from './conent/ChatWindow/ChatWindow';

function Container() {

const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
 const [darkMode, toggleDarkMode] = useState(isSystemDarkTheme);

  return (
    <div className={`font-sans w-screen h-screen flex ${darkMode && 'dark'} `}>
      <Sidebar></Sidebar>
      <ChatWindow></ChatWindow>
    </div>
  )
}

export default Container
