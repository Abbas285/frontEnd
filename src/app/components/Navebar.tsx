import React from 'react'
import Image from 'next/image';
import {
    HiOutlineHome,
    BsDatabase,
    IoMdInformationCircleOutline,
    profileImage,

} from "./assets"
const Navebar = () => {
    return (
        <nav className='w-full  px-6 flex justify-between py-4 bg-[#ffffff] shadow-sm '>


            <div className='flex cursor-pointer'>
                <HiOutlineHome size={24} />
                <span className='bg-[#d5d5d5] w-[1.5px] mx-3' />
                <h1 className='text-[#3f21fb] text-xl font-extrabold'>
                    UX PILOT
                </h1>
            </div>

            <div className='flex items-center gap-3 cursor-pointer'>
                <div className='flex gap-2 '>
                    <BsDatabase size={24} color='#7F6AFC' />
                    <div className='flex items-baseline'>
                        <h1 className='text-[#7F6AFC] text-xl font-extrabold'>
                            70
                        </h1>
                        <span className='text-[#48484d] pr-2'>
                            /600 +
                        </span>
                        <h1 className='text-[#7F6AFC] text-xl font-extrabold'>
                            400
                        </h1>

                    </div>
                    <IoMdInformationCircleOutline size={26} />
                </div>
                <Image
                    src={profileImage}
                    alt="profileImage"
                    width={500}
                    height={500}
                    quality={100}
                    className=" w-[32px] h-[32px] object-contain object-center"
                />


            </div>
        </nav>
    )
}

export default Navebar