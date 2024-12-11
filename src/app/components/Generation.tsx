import React from 'react'
import generationIcon from "@/assets/generation.svg"
import Image from 'next/image'

const Generation = () => {
    return (
        <div className="w-full flex justify-start items-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border shadow-sm cursor-pointer">
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
        </div>





    )
}

export default Generation