import React from 'react'
import Image from 'next/image'
import file from "@/assets/file.png"
import layoutCloseIccon from "@/assets/layoutCloseIccon.png"
import generationIcon from "@/assets/generation.svg"
import wireframes from "@/assets/wireframes.png"
const Generation = () => {
    return (
        <div className="w-full flex justify-start items-center">
            <div className="  px-3 py-2 bg-white rounded-md border
             shadow-md cursor-pointer hover:scale-105 transition-all">
                <div className='flex  items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                        <Image
                            src={generationIcon}
                            alt="generationIcon"
                            width={32}
                            height={32}
                            quality={100}
                            className="w-[32px] h-[32px] object-contain"
                        />
                        <h3 className="text-base font-semibold text-[#48484D]">
                            Generation
                        </h3>
                    </div>
                    <Image
                        src={layoutCloseIccon}
                        alt="layoutCloseIccon"
                        width={16}
                        height={16}
                        quality={100}
                        className="w-[16px] h-[16px] object-contain cursor-pointer "
                    />
                </div>

                <div className='w-full flex flex-col pt-3'>
                    <h3 className="text-base font-semibold text-[#48484D]">
                        Design Mode
                    </h3>
                    <div className='flex gap-5 pt-2'>
                        <div className='flex-col flex  items-center border hover:border-2 px-4 py-2 rounded-md hover:border-[#3F20FB]'>
                            <Image
                                src={wireframes}
                                alt="wireframes"
                                width={500}
                                height={500}
                                quality={100}

                                className="w-[22px] h-[22px] object-contain cursor-pointer mb-2"
                            />
                            <h3 className="text-base hover:font-medium hover:text-[#3F20FB] font-normal text-[#606067]">
                                Wireframes
                            </h3>
                        </div>
                        <div className='flex-col flex  items-center border hover:border-2 px-4 py-2 rounded-md hover:border-[#3F20FB]'>
                            <Image
                                src={file}
                                alt="file"
                                width={500}
                                height={500}
                                quality={100}

                                className="w-[22px] h-[22px] object-contain cursor-pointer mb-2"
                            />
                            <h3 className="text-base hover:font-medium hover:text-[#3F20FB] font-normal text-[#606067]">
                                Hifi Designs
                            </h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>





    )
}

export default Generation