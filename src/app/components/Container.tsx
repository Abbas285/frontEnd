
import React from 'react'
import Diagram from './DiagramComp'
import Generation from './GenerationComp'
import Saved from './Saved'

const Container = () => {
    return (
        <div className='min-h-[calc(100vh-4rem)] w-full flex bg-[#f5f5f5] px-8 py-6'>
            <div className='w-[25%] '>
                <Generation />
            </div>


            <div className='w-[55%]'>
                <Diagram />
            </div>

            <div className='w-[20%]'>
                <Saved />
            </div>
        </div>
    )
}

export default Container