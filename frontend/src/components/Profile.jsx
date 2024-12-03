import React from 'react'
import { Navbar } from './shared'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'

export function Profile() {
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

                    <Button className="text-right" variant="outline"><Pen /></Button>

                </div>
                <div>

                    <Mail />
                    <span>rajeshwari@gmail.com</span>

                    <Contact />
                    <span>+977 9862794267</span>

                </div>

            </div>
        </div>
    )
}
