import { useEffect, useMemo, useState } from "react"
import Chat from "./Chat"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { useRecoilState, useRecoilValue } from "recoil";
import { lightThemeAtom, bgPrimaryColor, bgSecondaryColor, chatsAtom, focusedChatIdAtom, chatAtomFamily } from "../atoms/atom";
import { nanoid } from "@reduxjs/toolkit";

export default function RightChat({ className }){

    const lightTheme = useRecoilValue(lightThemeAtom);
    const bgPrimary = useRecoilValue(bgPrimaryColor);
    const bgSecondary = useRecoilValue(bgSecondaryColor);
    const focusedChatId = useRecoilValue(focusedChatIdAtom);
    const [chats, setChats] = useRecoilState(chatsAtom);
    const [chat, setChat] = useRecoilState(chatAtomFamily(focusedChatId))

    const [userContent, setUserContent] = useState('');
    const [chatTitle, setChatTitle] = useState(chats.find(x => x.id===focusedChatId).title);
    const [loading , setLoading] = useState(false);

    const userContentSubmitHandler = async (e) => {
        e.preventDefault();
        setUserContent('');
        setChat([...chat, {
            role: "user",
            content: `${userContent}`
        }]);
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/v1/ask', {
                prompt: `${userContent}`
            })
            setLoading(false);
            setChat([...chat, {
                role: "user",
                content: `${userContent}`
            }, {
                role: "assistant",
                content: `${response.data}`
            }]);
            console.log(chat);
        } catch (err){
            console.log(err);
            setLoading(false);
            setChat([...chat, {
                role: "user",
                content: `${userContent}`
            }, {
                role: "assistant",
                content: `ERROR: There was some problem from our end`
            }]);
            console.log(chat);
        }
        if (chatTitle==='New Chat'){
            try {
                const titleResponse = await axios.post('http://localhost:3000/api/v1/ask', {
                    prompt: `Give me only a concise title for following question: ${userContent}`
                })
                setChatTitle(titleResponse.data);
            } catch (err){
                console.log(err);
                const allChats = chats.map(x => (x.id===focusedChatId?{id: focusedChatId, title: "Chat "+Date.now()}:x))
                console.log(allChats);
                setChats(allChats);
                setChatTitle("Chat "+Date.now());
                // setChats()
            }
        }
    }

    return (
        <div className={`${className} ${bgPrimary} h-screen min-h-screen`}>
            <div className={` w-full h-[12%] ${bgSecondary} border-b ${lightTheme===true?" border-b-gray-400":"border-b-gray-700"} flex justify-center items-center`}>
                <div className={` ${lightTheme===true?"text-black":"text-white"} font-medium text-xl`}>
                    {chatTitle}
                </div>
            </div>
            <div className=" w-full h-[76%] overflow-y-scroll ">
                
                {chat.length===0?
                <div className=" w-full h-full flex justify-center items-center flex-col" >
                    <svg xmlns="http://www.w3.org/2000/svg" className=" p-1 w-12 h-12 fill-white bg-black rounded-full " viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z"/></svg>
                    <p className={` m-4 text-2xl font-medium ${lightTheme===true?"text-black":"text-white"}`}>How can I help you Today?</p>
                </div>:
                <div>

                    {chat.map((msg) => (<Chat key={Math.random()} role={msg.role} content={msg.content} />))}
                    {loading===true?
                    <div className=" w-full flex justify-center items-center my-4"><CircularProgress /></div>:
                    null}

                </div>}
                <div className=" h-10"></div>
                
            </div>
            <div className={` w-full h-[12%] ${bgSecondary} border-t ${lightTheme===true?" border-t-gray-400":"border-t-gray-700"} flex justify-center items-center`}>
                <form className=" w-full h-full flex justify-center items-center" onSubmit={(e)=>{
                    userContentSubmitHandler(e);
                }} >
                    <input type="text" value={userContent} placeholder=" Message AI Bot..." className={` mx-4 w-[60%] h-[70%] px-4 ${lightTheme===true?"bg-black":"bg-white"} ${lightTheme===true?"text-sky-400":"text-slate-800"} shadow-md rounded-xl focus:outline-none placeholder:text-slate-400 font-medium text-lg`} onChange={(e)=>{
                        setUserContent(e.target.value);
                    }} />
                    <button className={` px-3 h-[70%] ${lightTheme===true?"bg-black":"bg-white"} ${lightTheme===true?"text-sky-400":"text-slate-800"} shadow-md rounded-xl focus:outline-none  font-medium text-lg`} type="submit" >
                        <i className="ri-arrow-up-line text-2xl"></i>
                    </button>
                </form>
            </div>
        </div>
    )

}