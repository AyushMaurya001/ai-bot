import { useState } from "react";


export default function OnlineStatus({ className }){

    const [status, setStatus] = useState(false);

    window.addEventListener('online', ()=>{
        if (navigator.onLine) setStatus(true);
        else setStatus(false);
    });
    window.addEventListener('offline', ()=>{
        if (navigator.onLine) setStatus(true);
        else setStatus(false);
    });


    return (
        <div className={` ${className} ${status===true?"hidden":""} cursor-default text-2xl text-red-500 bg-transparent flex justify-center items-center`}>
            {status===true?"Online":"Offline"}
        </div>
    )

}