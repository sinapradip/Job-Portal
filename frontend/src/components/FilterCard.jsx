import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const fitlerData = [
  {
      fitlerType: "Location",
      array: ["Chitwan", "Kathmandu", "Gorkha", "Bhaktapur", "Jhapa"]
  },
  {
      fitlerType: "Industry",
      array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
      fitlerType: "Salary",
      array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
]

export  function FilterCard() {
  return (
    <div className='w-full bg-white p-3  '>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-2' />
      <RadioGroup className = "mt-3">
        {
          fitlerData.map((data, index)=> (
            <div>
              <h1 className='font-medium text-base'>{data.fitlerType}</h1>
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
