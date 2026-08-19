import React from 'react'
import {counterItems} from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
    return (
        <div id={"counter"} className={"padding-x-lg mt-10 md:mt-16 xl:mt-0"}>
            <div className={"mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"}>
                {counterItems.map((item) => (
                    <div key={item.label} className={"bg-zinc-900 rounded-lg p-6 md:p-10 flex flex-col justify-center items-center text-center"}>
                        <div  className={"counter-number text-white text-5xl md:text-7xl xl:text-8xl font-bold mb-0"}>
                            <CountUp suffix={item.suffix} end={item.value}/>
                        </div>
                        <div className={"text-white-50 text-lg"}>
                            {item.label}
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
export default AnimatedCounter
