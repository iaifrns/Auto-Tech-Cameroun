import { useState } from "react";
import { Info } from "../constants/info";

const OurService = ({image, text} : {image: string, text: string}) => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <div className={`h-[300px] w-full bg-black opacity-65 absolute transition-transform duration-1000 ease-in-out ${show ? "scale-100" : "scale-0"}`}>
                <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                    <p className="font-bold text-2xl text-white">{text}</p>
                    <p className="font-bold text-secondary text-lg">Total Service</p>
                </div>
            </div>
            <img src={image} className="h-[300px] w-full object-cover" />
        </div>
    )
}

export const Information = ({info} : {info : Info}) => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-[50px] font-bold text-white">{info.num}</h1>
            <div className="w-[70px] bg-white h-1"></div>
            <h1 className="text-xl font-bold text-white">{info.text}</h1>
        </div>
    )
}

export default OurService;