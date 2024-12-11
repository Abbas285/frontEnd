import React from 'react'
import { MdOutlineAccountTree } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import file from "@/assets/file.png"
import { FaRegStar } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";
import { MdLaptopChromebook } from "react-icons/md";

import { SlOptionsVertical } from "react-icons/sl";
import Image from 'next/image';
const Diagram = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <div className='flex gap-5 items-center justify-between px-2 py-2 mb-6 bg-white rounded-full'>
                <div className='flex gap-2 cursor-pointer hover:scale-105 transition-all px-4 py-2'>
                    <MdOutlineAccountTree size={24} color='#606067' className='font-bold' />
                    <h3 className="text-base font-semibold text-[#606067] ">
                        Diagrams
                    </h3>
                </div>
                <div className='flex gap-2 items-center justify-between shadow-lg rounded-full
                     px-4 py-2 cursor-pointer hover:scale-105 transition-all'>
                    <IoDocumentOutline color='#3F20FB' size={24} />
                    <h3 className="text-base font-semibold text-[#3F20FB]"> Screens
                    </h3>
                </div>
            </div>

            <div className='w-full rounded-full bg-[#E6E6E6] flex justify-start p-3 mb-2'>
                <div className='flex items-center gap-3'>
                    <LuLayers color='#606067' size={22} />
                    <h2 className="text-sm font-medium text-[#303034]">Generation 1</h2>
                    <Image
                        src={file}
                        alt="file"
                        width={500}
                        height={500}
                        quality={100}
                        className="w-[22px] h-[22px] object-contain"
                    />
                    <MdLaptopChromebook size={22} color='#606067' />
                    <SlOptionsVertical size={16} color='#606067' className='ml-6 
                    cursor-pointer hover:scale-105 transition-all' />
                </div>
            </div>

            <div className='w-full  border-dotted rounded border-[##524d4d] border-[2px] px-7 '>
                <div className='w-full flex justify-end py-3 '>
                    <div className='flex items-center gap-3'>
                        <FaRegStar size={16} />
                        <h2 className="text-xs font-medium text-[#48484D]">Save & Retrieve Figma</h2>
                        <button className='flex gap-4 items-center cursor-pointer'>
                            <CiEdit size={20} />
                            <h2 className="text-xs font-medium text-[#48484D]">Edit</h2>

                        </button>
                        <SlOptionsVertical size={16} color='#606067' className=' 
                    cursor-pointer hover:scale-105 transition-all' />
                    </div>
                </div>
                <div className='w-full bg-[#c0c0c0] min-h-[788px] rounded mb-7'>

                </div>
            </div>


            <button className="mt-6 px-4 py-2 bg-[#ECE9FF] text-[#7F6AFC]
            font-semibold text-base
              w-full rounded-full cursor-pointer hover:scale-105 transition-all">
                +  New Section
            </button>
        </div>

    )
}

export default Diagram