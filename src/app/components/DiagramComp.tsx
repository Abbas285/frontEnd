"use client";

import React, { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from "react";
import Image from "next/image";
import { MdOutlineAccountTree, MdLaptopChromebook } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { CiEdit, CiImageOn } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";

import shaireIccon from "@/assets/share.png"
import generateSoureIccon from "@/assets/generateSource.png"
import soucreIccon from "@/assets/source.png"
import ImageIccon from "@/assets/imageIccon.png"
import trashIccon from "@/assets/Trash.png"
import exportIccon from "@/assets/export.png"
import file from "@/assets/file.png";

const Diagram: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent | Event) => {
        if (
            dropdownRef.current &&
            !(event.target instanceof Node && dropdownRef.current.contains(event.target))
        ) {
            setIsOpen(false);
        }
    };

    // Close dropdown on Escape key press
    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside as EventListener);
        document.addEventListener("keydown", handleEscape as unknown as EventListener);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside as EventListener);
            document.removeEventListener("keydown", handleEscape as unknown as EventListener);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Top navigation */}
            <div className="flex gap-5 items-center justify-between px-2 py-2 mb-6 bg-white rounded-full">
                <div className="flex gap-2 cursor-pointer hover:scale-105 transition-all px-4 py-2">
                    <MdOutlineAccountTree size={24} color="#606067" className="font-bold" />
                    <h3 className="text-base font-semibold text-[#606067]">Diagrams</h3>
                </div>
                <div className="flex gap-2 items-center justify-between shadow-lg rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition-all">
                    <IoDocumentOutline color="#3F20FB" size={24} />
                    <h3 className="text-base font-semibold text-[#3F20FB]">Screens</h3>
                </div>
            </div>

            {/* Middle section */}
            <div className="w-full rounded-full bg-[#E6E6E6] flex justify-start p-3 mb-2">
                <div className="flex items-center gap-3">
                    <LuLayers color="#606067" size={22} />
                    <h2 className="text-sm font-medium text-[#303034]">Generation 1</h2>
                    <Image
                        src={file}
                        alt="file"
                        width={500}
                        height={500}
                        quality={100}
                        className="w-[22px] h-[22px] object-contain"
                    />
                    <MdLaptopChromebook size={22} color="#606067" />
                    <SlOptionsVertical
                        size={16}
                        color="#606067"
                        className="ml-6 cursor-pointer hover:scale-105 transition-all"
                    />
                </div>
            </div>

            {/* Main content area */}
            <div className="w-full border-dotted rounded border-[#524d4d] border-[2px] px-7">
                <div className="w-full flex justify-end py-3">
                    <div className="flex items-center gap-3">
                        <FaRegStar size={16} />
                        <h2 className="text-xs font-medium text-[#48484D]">Save & Retrieve Figma</h2>
                        <button className="flex gap-4 items-center cursor-pointer">
                            <CiEdit size={20} />
                            <h2 className="text-xs font-medium text-[#48484D]">Edit</h2>
                        </button>

                        {/* Dropdown menu */}
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                            {/* Trigger button */}
                            <button
                                onClick={toggleDropdown}
                                aria-expanded={isOpen}
                                className="ml-6 cursor-pointer hover:scale-105 transition-all"
                            >
                                <SlOptionsVertical size={16} color="#606067" />
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-60 bg-white border rounded-md shadow-lg p-1 ">

                                    <div className="flex gap-3 items-center hover:bg-[#F1F1F2] p-1.5 rounded-md cursor-pointer">
                                        <Image
                                            src={ImageIccon}
                                            alt="ImageIccon "
                                            width={500}
                                            height={500}
                                            quality={100}
                                            className="w-[18px] h-[18px] object-contain"
                                        />
                                        <h3 className="font-medium text-base text-[#48484D]">
                                            Generate images
                                        </h3>
                                    </div>
                                    <div className="flex gap-3 items-center hover:bg-[#F1F1F2] p-1.5 rounded-md cursor-pointer">
                                        <Image
                                            src={generateSoureIccon}
                                            alt="generateSoureIccon "
                                            width={500}
                                            height={500}
                                            quality={100}
                                            className="w-[18px] h-[18px] object-contain"
                                        />
                                        <h3 className="font-medium text-base text-[#48484D]">
                                            Generate screens flow
                                        </h3>
                                    </div>
                                    <div className="flex gap-3 items-center hover:bg-[#F1F1F2] p-1.5 rounded-md cursor-pointer">
                                        <Image
                                            src={soucreIccon}
                                            alt="soucreIccon "
                                            width={500}
                                            height={500}
                                            quality={100}
                                            className="w-[18px] h-[18px] object-contain"
                                        />
                                        <h3 className="font-medium text-base text-[#48484D]">
                                            Source Code
                                        </h3>
                                    </div>
                                    <div className="flex gap-3 items-center hover:bg-[#F1F1F2] p-1.5 rounded-md cursor-pointer">
                                        <Image
                                            src={exportIccon}
                                            alt="exportIccon "
                                            width={500}
                                            height={500}
                                            quality={100}
                                            className="w-[18px] h-[18px] object-contain"
                                        />
                                        <h3 className="font-medium text-base text-[#48484D]">
                                            Export as...
                                        </h3>
                                    </div>
                                    <div className="flex gap-3 items-center hover:bg-[#F1F1F2] p-1.5 rounded-md cursor-pointer">
                                        <Image
                                            src={shaireIccon}
                                            alt="shaireIccon"
                                            width={500}
                                            height={500}
                                            quality={100}
                                            className="w-[18px] h-[18px] object-contain"
                                        />
                                        <h3 className="font-medium text-base text-[#48484D]">

                                            Share
                                        </h3>
                                    </div>
                                    <div className="flex gap-3 items-center hover:bg-[#F1F1F2] p-1.5 rounded-md cursor-pointer">
                                        <Image
                                            src={trashIccon}
                                            alt="trashIccon"
                                            width={500}
                                            height={500}
                                            quality={100}
                                            className="w-[18px] h-[18px] object-contain"
                                        />
                                        <h3 className="font-medium text-base text-[#48484D]">

                                            Delete forever
                                        </h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content box */}
                <div className="w-full bg-[#c0c0c0] min-h-[788px] rounded mb-7"></div>
            </div>

            {/* New Section Button */}
            <button
                className="mt-6 px-4 py-2 bg-[#ECE9FF] text-[#7F6AFC] font-semibold text-base w-full rounded-full cursor-pointer hover:scale-105 transition-all"
            >
                + New Section
            </button>
        </div>
    );
};

export default Diagram;
