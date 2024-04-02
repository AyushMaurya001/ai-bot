import { useState } from "react";
import { LeftChat, RightChat, ThemeBtn } from "../components";

export default function ChatPage(){

    const [chats, setChats] = useState([]);

    return (
        <div className=" w-full flex justify-center items-center ">
            <ThemeBtn className=" fixed top-0 right-0" />
            <LeftChat className=" w-2/5" />
            <RightChat className=" w-3/5" />
        </div>
    )

}