import React from 'react'
import Image from 'next/image'
import {
    MdLaptopChromebook,
    CiMobile2,
    file,
    layoutCloseIccon,
    generationIcon,
    generateWhiteIcon,
    wireframes,
} from "./assets"
const Generation = () => {
    return (
        <div className="w-full flex justify-start items-center">
            <div className="  px-3 py-2 bg-white rounded-md border
             shadow-md cursor-pointer  w-[85%]">
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
                    <div className='flex justify-between pt-2'>
                        <div className='flex-col flex  items-center border hover:border-2 px-3 py-2 rounded-md hover:border-[#3F20FB]'>
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
                        <div className='flex-col flex  items-center border hover:border-2
                         px-3 py-2 rounded-md hover:border-[#3F20FB]'>
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
                    <div className='w-full flex justify-between pt-5 items-center'>

                        <h3 className="text-base font-semibold text-[#48484D]">
                            Screen type
                        </h3>
                        <div className='flex  border rounded-md  items-center'>
                            <div className='p-2 hover:bg-[#ece9ff]  hover:rounded-l-sm hover:text-[#3F20FB]'>
                                <MdLaptopChromebook size={20} className='' />
                            </div>
                            <div className='p-2 hover:bg-[#ece9ff]  hover:rounded-r-sm'>
                                <CiMobile2 size={20} className='' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between pt-5 items-center'>

                        <h3 className="text-base font-semibold text-[#48484D]">
                            From
                        </h3>
                        <div className='flex  border rounded-md  items-center text-[#606067]'>
                            <div className='p-2 hover:bg-[#ece9ff]  hover:rounded-l-sm hover:text-[#3F20FB] '>
                                Prompt
                            </div>
                            <div className='p-2 hover:bg-[#ece9ff]  hover:rounded-r-sm hover:text-[#3F20FB]'>
                                Diagram
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col pt-5 '>
                        <h3 className="text-base font-semibold text-[#303034] pb-1">
                            Prompt
                        </h3>
                        <p className='pt-2 font-medium text-sm leading-5 text-[#606067] p-1.5  border hover:border-2
                         rounded-md hover:border-[#3F20FB]'>
                            landing page for a travel booking website,
                            highlighting vacation packages, user testimonials,
                            and a search bar|</p>
                    </div>
                    <div className='w-full flex flex-col pt-5 '>
                        <h3 className="text-base font-semibold text-[#303034] pb-1">
                            Number of variations
                        </h3>
                        <div className='flex  border rounded-md  text-[#303034]'>{

                            [1, 2, 3, 4].map((item, index) => {
                                return <div key={index} className='p-2 hover:bg-[#ece9ff]  hover:rounded-l-sm  w-1/4 text-center hover:text-[#3F20FB]'>
                                    {item}
                                </div>

                            })
                        }


                        </div>
                        <button
                            className="mt-6 py-2 flex justify-center items-center text-[#f0eff4]
             font-semibold text-base w-full rounded-full cursor-pointer 
             hover:scale-105 transition-all gap-2"
                            style={{
                                background: "radial-gradient(96.83% 118.33% at 47.79% 5%, #3F20FB 0%, #B377FF 100%)",
                            }}
                        >
                            <Image
                                src={generateWhiteIcon}
                                alt="generateWhiteIcon"
                                width={22}
                                height={22}
                                quality={100}
                                className="w-[22px] h-[22px] object-contain"
                            />
                            Generate
                        </button>

                    </div>
                </div>

            </div>

        </div>





    )
}

export default Generation