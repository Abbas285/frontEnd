import React from 'react'
import { MdOutlineAccountTree } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import file from "@/assets/file.png"
import pc from "@/assets/pc.png"
import { FiPlus } from "react-icons/fi";

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
                        className="w-[32px] h-[32px] object-contain"
                    />
                    <MdLaptopChromebook size={22} color='#606067' />
                    <SlOptionsVertical size={20} color='#606067' className='ml-8 cursor-pointer hover:scale-105 transition-all' />
                </div>
            </div>

            {/* <div className="w-full max-w-4xl flex justify-between items-center bg-white shadow-sm rounded-md px-4 py-2 mb-6">
                <h2 className="text-lg font-medium text-gray-800">Generation 1</h2>
                <div className="relative">

                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <span className="mr-2">More Options</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zm0 5.25a.75.75 0 100-1.5.75.75 0 000 1.5zm0 5.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            />
                        </svg>
                    </button>

                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Generate Images</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Generate Screens Flow</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Source Code</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export as...</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete forever</a>
                    </div>
                </div>
            </div> */}

            <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm">
                <div className="h-[calc(100vh-200px)] bg-gray-200 rounded-lg"></div>
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