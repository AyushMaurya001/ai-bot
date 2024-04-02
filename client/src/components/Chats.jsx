import { useRecoilState, useRecoilValue } from "recoil"
import { bgPrimaryColor, focusedChatIdAtom, lightThemeAtom } from "../atoms/atom"


export default function Chats({ title, id }){

    const lightTheme = useRecoilValue(lightThemeAtom);
    const [focusedChatId, setFocusedChatId] = useRecoilState(focusedChatIdAtom);

    return (
        <div className={`${bgPrimaryColor} ${lightTheme===true?"text-black":"text-white"} w-full p-4 text-xl flex justify-start items-center border-b ${lightTheme===true?" border-b-gray-400":"border-b-gray-700"} `} onClick={()=>{
            setFocusedChatId(id);
        }}>
            <div className=" w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex justify-center items-center cursor-default">
                {title[0].toUpperCase()}
            </div>
            <div className=" mx-4 cursor-default">
                {title}
            </div>
        </div>
    )

}