import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

export  function HeroSection() {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
  return (
    <>
        <div className='text-center'>
            <div className='flex flex-col gap-[24px] my-10'>
              <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#6A38C2] font-medium'>No. 1 Job Hunt Website</span>
              <h1 className='text-5xl leading-[112%] font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
              <p className='text-[18px] text-[#444444]'>Explore endless career opportunities,  apply effortlessly with just a few clicks, and land the job of your dreams!</p>
              <div className='flex w-[40%] shadow-lg border border-gray-200 pl-[20px]  rounded-full items-center gap-4 mx-auto'>
                <input
                    type="text"
                    placeholder='Find your dream jobs'
                    onChange={(e) => setQuery(e.target.value)}
                    className='outline-none border-none w-full'

                      />

                <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                    <Search className='h-[20px] w-5' />
                </Button>
              </div>
            </div>
            
        </div>
    </>
  )
}
