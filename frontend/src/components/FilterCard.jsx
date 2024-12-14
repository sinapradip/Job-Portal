import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: "Location",
    array: ["Chitwan", "Kathmandu", "Lalitpur", "Gorkha", "Bhaktapur", "Jhapa", "Parsa", "Lamjung" ]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Data Scientist", "React Developer", "Cybersecurity Engineer"]
  },

  // {
  //   filterType: "Salary",
  //   array: ["Rs 0 - 40,000", " Rs 40,000 - 1,00,000", "Rs 1,00,000 - 5,00,000"]
  // },
]

export function FilterCard() {

  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
    
  }, [selectedValue]);

  return (
    <div className='w-full bg-white p-3  '>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-2' />
      <RadioGroup value={selectedValue} onValueChange={changeHandler} className="mt-3">
        {
          filterData.map((data, index) => (
            <div>
              <h1 className='font-medium text-base'>{data.filterType}</h1>
              {
                data.array.map((item, idx) => {
                  const itemId = `id${index}-${idx}` // generate unique id
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} id={itemId} />
                      <Label htmlFor={itemId}>{item}</Label>
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
