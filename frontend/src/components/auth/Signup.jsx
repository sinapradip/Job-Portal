import React, { useState } from 'react'
import { Navbar } from '../shared'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup} from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export  function Signup() {

    const[input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password : "",
        role: "",
        file: ""
      })
    
      const changeEventHandler = (e)=> {
        setInput({...input, [e.target.name]: e.target.value});
      }
    
      const changeFileHandler = (e)=> {
        setInput({...input, file:e.target.files?.[0]})
      }

      const submitHandler = async (e)=> {
        e.preventDefault();
        console.log(input);
        
      }
    
  return (
    <>
        <div>
            <Navbar/>
        </div>

        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-6 my-10'>
                <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                <div className='flex flex-col gap-[4px] my-2'>
                    <label>Full name</label>
                    <Input
                    type= "text"
                    value= {input.fullname}
                    name= "fullname"
                    onChange = {changeEventHandler}
                    placeholder = "Rajeshwari Baniya" />
                </div>

                <div className='flex flex-col gap-[4px] my-2'>
                    <label>Email</label>
                    <Input
                    type= "email"
                    value= {input.email}
                    name= "email"
                    onChange = {changeEventHandler}
                    placeholder = "rajeshwari@gmail.com" />
                </div>

                <div className='flex flex-col gap-[4px] my-2'>
                    <label>Phone Number</label>
                    <Input
                    type= "text"
                    value= {input.phoneNumber}
                    name= "phoneNumber"
                    onChange = {changeEventHandler}
                    placeholder = "9860608080" />
                </div>

                <div className='flex flex-col gap-[4px] my-2'>
                    <label>Password</label>
                    <Input
                    type= "password"
                    value= {input.password}
                    name= "password"
                    onChange = {changeEventHandler}
                    placeholder = "...." />
                </div>

                <div className='flex items-center justify-between'>

                    <RadioGroup className= "flex items-center gap-4 my-5">
                        <div className="flex items-center space-x-2">
                            <Input
                            type= "radio"
                            name= "role"
                            value= "student"
                            checked = {input.role === 'student'}
                            onChange = {changeEventHandler}
                            className= "cursor-pointer"/>
                            <Label htmlFor="r1">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <Input
                            type= "radio"
                            name= "role"
                            value= "recruiter"
                            checked = {input.role === 'recruiter'}
                            onChange = {changeEventHandler}
                            className= "cursor-pointer"/>
                            <Label htmlFor="r2">Recruiter</Label>
                        </div>
                        
                    </RadioGroup>
                    <div className='flex items-center gap-2'>
                        <label>Profile</label>
                        <Input
                        accept = "image/*"
                        type = "file" 
                        onChange = {changeFileHandler}
                        className= "cursor-pointer"/>

                    </div>

                </div>

                <Button 
                type= "submit"
                className= "w-full my-4">Signup</Button>
                <span className='text-sm'>Already have an account? <Link to = "/login" className= "text-blue-600">Login</Link></span>
                
            </form>

        </div>
    </>
  )
}
