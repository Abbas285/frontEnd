
import React from 'react'
import Diagram from './DiagramComp'
import Generation from './GenerationComp'
import Saved from './SavedComp'

const Container = () => {
    return (
        <div className='min-h-[calc(100vh-4rem)] w-full flex bg-[#f5f5f5] px-8 py-6 flex-wrap'>
            <div className='lg:w-[30%] w-full '>
                <Generation />
            </div>


            <div className='lg:w-[50%] w-full'>
                <Diagram />
            </div>

            <div className='lg:w-[20%] w-full'>
                <Saved />
            </div>
        </div>
    )
}

export default Container