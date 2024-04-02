import { useRecoilValue } from "recoil"
import ResponseLoader from "./ResponseLoader"
import { lightThemeAtom } from "../atoms/atom"


export default function Chat({ role, content }){

    const lightTheme = useRecoilValue(lightThemeAtom);

    return (
        <div className={`${lightTheme===true?(role==='user'?" bg-sky-50":""):(role==='user'?"bg-gray-800":"")} cursor-default flex text-lg justify-between items-start ${lightTheme===true?" text-black":"text-white"} `}>
            {role==='user'?
            <p className=" w-full h-full p-4 text-right">{content}</p>:
            <p className=" w-full h-full p-4 text-left">{content}</p>}
        </div>
    )

}