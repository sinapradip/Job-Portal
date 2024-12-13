
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

export function Job({job}) {

    const navigate = useNavigate();
    // const jobID = "job1"

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
       

        // 1000: 1 second = 1000 milliseconds
        // 24 : one day has 24 hours, 60: everyhour has 60 mins 60: every min has 60 seconds 
       

    }
    return (
        <div className='p-5 rounded-[8px] shadow-md bg-white border border-gray-100 cursor-pointer hover:shadow-xl'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant='outline' className='rounded-full p-[2px]' size='icon'><Bookmark /></Button>
            </div>


            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src= {job?.company?.logo} />
                    </Avatar>
                </Button>

                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>Nepal</p>
                </div>
            </div>

            <div className='flex flex-col'>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>

            <div className='flex items-center gap-2 mt-4'>

                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#1f7418] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">Rs. {job?.salary} / Month</Badge>

            </div>

            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button className="bg-[#6A38C2]">Save For Later</Button>
            </div>


        </div>
    )
}
