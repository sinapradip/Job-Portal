import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { USER_API_END_POINT } from '@/utils/constant'

export function Navbar() {
    // const user = false;
    const { user } = useSelector(store => store.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <div className='bg-white'>

                {/* (Job portal) + (Home, Jobs, Browse) */}
                <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>

                    {/* left part- Job portal */}
                    <div>
                        <h1 className='text-2xl font-bold'>Job<span className='text-[#6A38C2]'>Portal</span></h1>
                    </div>


                    {/* Home, Jobs, Browse +  popover*/}
                    <div className='flex items-center gap-12'>
                        <ul className='flex font-medium items-center gap-5'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/browse">Browse</Link></li>

                        </ul>
                        {
                            !user ? (
                                <div className='flex items-center gap-2'>
                                    <Link to="/login"><Button variant="outline">Login</Button></Link>
                                    <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>

                                </div>
                            ) : (
                                <div>
                                    <Popover>

                                        <PopoverTrigger asChild>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                                            </Avatar>
                                        </PopoverTrigger>

                                        <PopoverContent className='w-80 p-[16px] shadow-md rounded-[4px] bg-white'>

                                            {/* avatar+ (name + bio) */}
                                            <div className='flex items-center gap-[8px]'>

                                                <Avatar className="cursor-pointer">

                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                                                </Avatar>


                                                {/* name + bio */}
                                                <div>

                                                    <h4 className='font-medium'>Rajeshwari Baniya</h4>
                                                    <p className='text-sm text-muted-foreground'>UI/UX Designer</p>

                                                </div>



                                            </div>

                                            <div className='flex flex-col text-gray-600'>

                                                <div className='flex w-fit items-center gap-2 cursor-pointer'>


                                                    <User2 />
                                                    <Button variant="link"> <Link to="/profile">View Profile</Link></Button>

                                                </div>

                                                <div className='flex w-fit items-center gap-2 cursor-pointer'>

                                                    <LogOut />
                                                    <Button onClick={logoutHandler} variant="link">Logout</Button>

                                                </div>


                                            </div>



                                        </PopoverContent>

                                    </Popover>
                                </div>

                            )

                        }



                    </div>

                </div>



            </div>
        </>
    )
}
