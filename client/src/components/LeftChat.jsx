import { useRecoilState, useRecoilValue } from "recoil";
import OnlineStatus from "./OnlineStatus";
import ThemeBtn from "./ThemeBtn";
import { lightThemeAtom, bgPrimaryColor, bgSecondaryColor, chatsAtom, focusedChatIdAtom } from "../atoms/atom";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import Chats from "./Chats";


export default function LeftChat({ className }){

    const lightTheme = useRecoilValue(lightThemeAtom);
    const bgPrimary = useRecoilValue(bgPrimaryColor);
    const bgSecondary = useRecoilValue(bgSecondaryColor);
    const [chats, setChats] = useRecoilState(chatsAtom);

    return (
        <div className={`${className} ${bgPrimary} h-screen min-h-screen border-r ${lightTheme===true?"border-r-gray-400":"border-r-gray-700"}`}>
            <div className={` w-full h-[12%] ${bgSecondary} border-b ${lightTheme===true?"border-b-blue-400":"border-b-gray-700"} flex justify-center items-center`}>
                <div className={` w-full h-full font-medium text-xl flex justify-between items-center`}>
                    <div className=" flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className={` ml-4 p-1 w-9 h-9  rounded-full ${lightTheme===true?"fill-white":"fill-black"} ${lightTheme!==true?"bg-white":"bg-black"} `} viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z"/></svg>
                        <OnlineStatus className=" mx-2" />
                    </div>
                    <div className={`${lightTheme!==true?"text-white":"text-black"} ${lightTheme===true?"hover:bg-gray-300":"hover:bg-gray-800"} transition-all ease-linear cursor-pointer h-[70%] px-2 rounded-lg mx-2 flex justify-start items-center`} onClick={()=>{
                        const newChat = {
                            id: "chatsAtomId"+parseInt(parseInt(chats.length)+1),
                            title: "New Chat"
                        }
                        setChats([...chats, newChat]);
                    }}>
                        <p className=" px-2">New Chat</p>
                        <i className=" px-2 ri-chat-new-fill"></i>
                    </div>
                </div>
            </div>
            
            <div className=" w-full h-[88%] overflow-y-scroll ">
                
                {chats.map((chat) => (<Chats key={chat.id} id={chat.id} title={chat.title} />))}
                
            </div>
        </div>
    )

}