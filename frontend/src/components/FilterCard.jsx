import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
      filterType: "Location",
      array: ["Chitwan", "Kathmandu", "Gorkha", "Bhaktapur", "Jhapa"]
  },
  {
      filterType: "Industry",
      array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
      filterType: "Salary",
      array: ["0-40k", "40k-1lakh", "1lakh to 5lakhs"]
  },
]

export  function FilterCard() {
  return (
    <div className='w-full bg-white p-3  '>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-2' />
      <RadioGroup className = "mt-3">
        {
          filterData.map((data, index)=> (
            <div>
              <h1 className='font-medium text-base'>{data.filterType}</h1>
              {
                data.array.map((item, index)=> {
                  return(
                    <div className='flex items-center gap-2 my-2'>
                      <RadioGroupItem value = {item} />
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}
