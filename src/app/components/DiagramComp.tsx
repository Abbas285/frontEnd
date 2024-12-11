"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    MdOutlineAccountTree,
    MdLaptopChromebook,
    IoDocumentOutline,
    FaRegStar,
    CiEdit,
    LuLayers,
    SlOptionsVertical,
    shaireIccon,
    generateSoureIccon,
    soucreIccon,
    ImageIccon,
    trashIccon,
    exportIccon,
    file,
} from "./assets";

const Diagram: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Toggle dropdown state
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    // Close dropdown on "Escape" key press
    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Top navigation */}
            <div className="flex gap-5 items-center justify-between px-2 py-2 mb-6 bg-white rounded-full shadow-md">
                <div className="flex gap-2 items-center px-4 py-2 rounded-full 
                cursor-pointer hover:shadow-lg hover:scale-105 transition-all hover:text-[#3F20FB] text-[#606067]">
                    <MdOutlineAccountTree size={24} />
                    <h3 className="text-base font-semibold ">Diagrams</h3>
                </div>
                <div className="flex gap-2 items-center px-4 py-2 rounded-full 
                cursor-pointer hover:shadow-lg hover:scale-105 transition-all hover:text-[#3F20FB] text-[#606067]">
                    <IoDocumentOutline size={24} />
                    <h3 className="text-base font-semibold ">Screens</h3>
                </div>
            </div>

            {/* Middle section */}
            <div className="w-full rounded-full bg-[#E6E6E6] flex items-center gap-3 p-3 mb-2">
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
                <SlOptionsVertical size={16} color="#606067" className="ml-6 cursor-pointer hover:scale-105 transition-all" />
            </div>

            {/* Main content area */}
            <div className="w-full rounded-md border-[#e6e6e6] border-[2px] px-7 py-3">
                <div className="w-full flex justify-end">
                    <div className="flex items-center gap-3 pb-2">
                        <FaRegStar size={16} />
                        <h2 className="text-xs font-medium text-[#48484D]">Save & Retrieve Figma</h2>
                        <button className="flex gap-2 items-center cursor-pointer ml-3">
                            <CiEdit size={20} />
                            <h2 className="text-xs font-medium text-[#48484D]">Edit</h2>
                        </button>

                        {/* Dropdown menu */}
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                aria-expanded={isOpen}
                                className="ml-6 cursor-pointer hover:scale-105 transition-all"
                            >
                                <SlOptionsVertical size={12} color="#606067" />
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-60 bg-white border rounded-md shadow-lg p-1">
                                    {[
                                        { icon: ImageIccon, text: "Generate images" },
                                        { icon: generateSoureIccon, text: "Generate screens flow" },
                                        { icon: soucreIccon, text: "Source Code" },
                                        { icon: exportIccon, text: "Export as..." },
                                        { icon: shaireIccon, text: "Share" },
                                        { icon: trashIccon, text: "Delete forever" },
                                    ].map(({ icon, text }, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 items-center hover:bg-[#F1F1F2] p-1.5 rounded-md cursor-pointer"
                                        >
                                            <Image
                                                src={icon}
                                                alt={text}
                                                width={500}
                                                height={500}
                                                quality={100}
                                                className="w-[18px] h-[18px] object-contain"
                                            />
                                            <h3 className="font-medium text-base text-[#48484D]">{text}</h3>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content box */}
                <div className="w-full bg-[#c0c0c0] min-h-[788px] rounded-md mb-7 border-[#8b8b8d] border-2 "></div>
            </div>

            {/* New Section Button */}
            <button className="mt-6 px-4 py-2 bg-[#ECE9FF] text-[#7F6AFC] font-semibold text-base w-full rounded-full cursor-pointer hover:scale-105 transition-all">
                + New Section
            </button>
        </div>
    );
};

export default Diagram;
