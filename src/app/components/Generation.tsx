import React from 'react'
import Image from 'next/image'
import flip from "@/assets/flip.png"
import generationIcon from "@/assets/generation.svg"


const Generation = () => {
    return (
        <div className="w-full flex justify-start items-center">
            <div className="flex items-center  px-4 py-2 bg-white rounded-full border shadow-sm cursor-pointer">
                <div className='flex gap-2 items-center justify-between'>
                    <Image
                        src={generationIcon}
                        alt="generationIcon"
                        width={32}
                        height={32}
                        quality={100}
                        className="w-[32px] h-[32px] object-contain"
                    />
                    <h3 className="text-base font-medium text-[#48484D]">
                        Generation
                    </h3>
                </div>
                {/* <Image
                    src={flip}
                    alt="flip"
                    width={16}
                    height={16}
                    quality={100}
                    className="w-[16px] h-[16px] object-contain cursor-pointer"
                /> */}
            </div>
        </div>





    )
}

export default Generation