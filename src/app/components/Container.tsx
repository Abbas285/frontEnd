
import React from 'react'
import Diagram from './DiagramComp'
import Generation from './GenerationComp'
import Saved from './SavedComp'

const Container = () => {
    return (
        <div className='min-h-[calc(100vh-4rem)] w-full flex bg-[#f5f5f5] px-8 py-6'>
            <div className='w-[30%] '>
                <Generation />
            </div>


            <div className='w-[50%]'>
                <Diagram />
            </div>

            <div className='w-[20%]'>
                <Saved />
            </div>
        </div>
    )
}

export default Container