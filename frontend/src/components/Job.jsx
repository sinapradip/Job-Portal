import React from 'react'
import { Button } from './ui/button'
import {  Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

export  function Job() {
  return (
    <div className='p-5 rounded-[8px] shadow-md bg-white border border-gray-100 cursor-pointer hover:shadow-xl'>
        <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>2 days ago</p>
            <Button variant= 'outline' className= 'rounded-full p-[2px]' size = 'icon'><Bookmark /></Button>
        </div>
        

        <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant="outline" size="icon">
            <Avatar>
                <AvatarImage src= 'https://img.freepik.com/free-vector/illustration-creative-ideas-concept-icon_53876-7959.jpg?ga=GA1.1.1865145156.1731738987&semt=ais_hybrid' />
            </Avatar>
        </Button>

        <div>
            <h1 className='font-medium text-lg'>Company Name</h1>
            <p className='text-sm text-gray-500'>Nepal</p>
        </div>
        </div>

        <div className='flex flex-col'>
            <h1 className='font-bold text-lg my-2'>Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptate sed recusandae facilis fugiat libero illum nisi corrupti nihil enim?</p>
        </div>

        <div className='flex items-center gap-2 mt-4'>

                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#1f7418] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24LPA</Badge>

        </div>

        <div  className='flex items-center gap-4 mt-4'>
            <Button variant="outline">Details</Button>
            <Button className="bg-[#6A38C2]">Save For Later</Button>
        </div>

        
    </div>
  )
}
