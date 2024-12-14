import React, { useEffect } from 'react'
import { Navbar } from './shared'
import { Job } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function Browse() {

  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
          {
            allJobs.map((job) => {
              return (
                <Job key={job._id} job={job} />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}
