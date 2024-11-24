import React from 'react'
import { Badge } from './ui/badge'

export function LatestJobCards() {
    return (
        <div className='p-5 rounded-[8px] shadow-md bg-white border border-gray-100 cursor-pointer hover:shadow-xl'>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>Nepal</p>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='flex items-center gap-2 mt-4'>

                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#1f7418] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24LPA</Badge>

            </div>

        </div>
    )
}
