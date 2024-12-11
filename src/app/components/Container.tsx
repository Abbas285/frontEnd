
import React from 'react'
import Diagram from './Diagram'
import Generation from './Generation'
import Saved from './Saved'

const Container = () => {
    return (
        <div className='min-h-[calc(100vh-4rem)] w-full flex bg-[#f5f5f5] px-8 py-6'>
            <div className='w-1/3 '>
                <Generation />
            </div>


            <div className='w-1/3'>
                <Diagram />
            </div>

            <div className='w-1/3'>
                <Saved />
            </div>
        </div>
    )
}

export default Container