import React, { useEffect, useState } from 'react'
import { Navbar } from '../shared'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import { Label } from '../ui/label'

export function Signup() {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })

    const { loading,user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        

        if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
            toast.error('All fields are required.');
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(input.fullname)) {
            toast.error('Full name must only contain letters and spaces.');
            return;
        }

        if (!/^\d+$/.test(input.phoneNumber)) {
            toast.error('Phone number must only contain digits.');
            return;
        }
    
        if (input.phoneNumber.length !== 10) {
            toast.error('Phone number must be exactly 10 digits.');
            return;
        }

        if (input.password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }

        if (input.password !== input.confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });



            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }


        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }finally {
            dispatch(setLoading(false));
        }

    }

    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className='flex items-center justify-center max-w-7xl mx-auto'>

                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-6 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='flex flex-col gap-[4px] my-2'>
                        <label>Full name</label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Rajeshwari Baniya" />
                    </div>

                    <div className='flex flex-col gap-[4px] my-2'>
                        <label>Email</label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="rajeshwari@gmail.com" />
                    </div>

                    <div className='flex flex-col gap-[4px] my-2'>
                        <label>Phone Number</label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="9860608080" />
                    </div>

                    <div className='flex flex-col gap-[4px] my-2'>
                        <label>Password</label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="...." />
                    </div>

                    <div className='flex flex-col gap-[4px] my-2'>
                        <label>Confirm Password</label>
                        <Input
                            type="password"
                            value={input.confirmPassword}
                            name="confirmPassword"
                            onChange={changeEventHandler}
                            placeholder="...." />
                    </div>

                    <div className='flex items-center justify-between'>

                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer" />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer" />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>

                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <label>Profile</label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer" />

                        </div>

                    </div>

                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
                    }
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>

                </form>

            </div>
        </>
    )
}
