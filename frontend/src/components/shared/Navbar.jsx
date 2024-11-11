import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'

export  function Navbar() {
    const user = false;
  return (
    <>
        <div className='bg-white'>

            {/* (Job portal) + (Home, Jobs, Browse) */}
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>

                {/* left part- Job portal */}
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#6A38C2]'>Portal</span></h1>
                </div>


                {/* Home, Jobs, Browse +  popover*/ }
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    
                    </ul>
                    {
                        !user? (
                            <div className='flex items-center gap-2'>
                                <Button variant= "outline">Login</Button>
                                <Button className= "bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
                            </div>
                        ): (
                            <Popover>

                        <PopoverTrigger asChild>
                             <Avatar className= "cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent className='w-80 p-[16px] shadow-md rounded-[4px]'>

                            {/* avatar+ (name + bio) */}
                            <div className='flex items-center gap-[8px]'>

                                <Avatar className= "cursor-pointer">
                                
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                
                                </Avatar>


                                {/* name + bio */}
                                <div>

                                    <h4 className='font-medium'>Rajeshwari Baniya</h4>
                                    <p className='text-sm text-muted-foreground'>UI/UX Designer</p>

                                </div>

                                

                            </div>

                            <div className='flex flex-col text-gray-600'>

                                <div className='flex w-fit items-center gap-2 cursor-pointer'>


                                    <User2/>
                                    <Button variant="link">View Profile</Button>

                                </div>

                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                
                                 <LogOut/>
                                 <Button variant="link">Logout</Button>

                                </div>
                                
                                
                            </div>

                            

                        </PopoverContent>

                            </Popover>
                        )
                        
                    }

                    

                </div>

            </div>

            

            
            

        </div>
    </>
  )
}
