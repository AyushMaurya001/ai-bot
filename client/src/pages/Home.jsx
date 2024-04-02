import { useNavigate } from "react-router-dom"
import { ThemeBtn } from "../components";
import { useRecoilValue } from "recoil";
import { bgSecondaryColor } from "../atoms/atom";

export default function Home(){

    const navigate = useNavigate();
    const bgSecondary = useRecoilValue(bgSecondaryColor)

    return (
        <div className=" w-full h-screen flex justify-center items-center cursor-default ">
            <div className=" h-screen w-[60%] flex flex-col justify-center items-center bg-black text-white">
                <p className=" m-1 font-medium text-4xl ">AI Assistant</p>
                <p className=" m-1 font-medium text-lg">slogan</p>
            </div>
            <div className={`${bgSecondary} h-screen w-[40%] flex justify-center items-center flex-wrap text-lg font-medium `}>
                <div className=" w-full h-full flex flex-col justify-center items-center">
                    <div className=" m-4 w-full text-3xl text-white text-center"> 
                        Get Started
                    </div>
                    <div className=" w-full flex justify-center items-center">
                        <button className=" mx-2 h-11 w-[40%] bg-blue-500 rounded-md hover:shadow-lg transition-shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-baseColor" onClick={()=>{
                            navigate('/login')
                        }}>Log In</button>
                        <button className=" mx-2 h-11 w-[40%] bg-blue-500 rounded-md hover:shadow-lg transition-shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-baseColor" onClick={()=>{
                            navigate('/signup')
                        }}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )

}