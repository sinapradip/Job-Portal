import React, { useState } from 'react'
import { Navbar } from './shared'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import { AppliedJobTable, UpdateProfileDialog } from '.'

const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;


export function Profile() {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://img.freepik.com/free-vector/illustration-creative-ideas-concept-icon_53876-7959.jpg?ga=GA1.1.1865145156.1731738987&semt=ais_hybrid" alt="profile" />
                        </Avatar>

                        <div>
                            <h1 className='font-medium text-xl'>Full name</h1>
                            <p>Add your bio here </p>
                        </div>
                    </div>

                    <Button onClick={() => setOpen(true)}  className="text-right" variant="outline"><Pen /></Button>

                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>rajeshwari@gmail.com</span>
                    </div>

                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>+977 9862794267</span>
                    </div>

                    

                </div>

                <div className='my-5 flex flex-col gap-2'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-2'>
                        {
                            skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>Not available</span>
                        }
                    </div>
                    
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md">Resume</Label>
                    {
                        isResume ? <a target="_blank" href='https://www.google.com/' className='text-blue-500 w-full hover:underline cursor-pointer'>Test</a> : <span>NA</span>
                    }
                </div>

                

            </div>
            
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}
