import React from 'react'
import { FaStar } from "./assets"


const Saved = () => {
    return (
        <div className="w-full flex lg:justify-end justify-center items-center pt-5 lg:pt-0">
            <div className="flex items-center  px-4 py-2.5 bg-white rounded-full border shadow-md cursor-pointer hover:scale-105 transition-all">
                <div className='flex gap-2 items-center '>
                    <FaStar color='#FFD966' size={17} />
                    <h3 className="text-base font-semibold text-[#48484D]">
                        Saved
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default Saved