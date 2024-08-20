import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },

    {
      path:'/',
      element:<Login/>
    },

    {
      path:'/',
      element:<Signup/>
    }
  ]
)

function Navbar() {
  const user = false;
  return (
    
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#6A38C2]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex font-medium items-center gap-4">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {
            !user ? (
              <div className="flex items-center gap-2">
                <Button variant="outline">Login</Button>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
              </div>
            ):(
              <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage
                    className="cursor-pointer"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                  <div className="flex gap-4">
                  <Avatar>
                  <AvatarImage
                    className="cursor-pointer"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">Rajeshwari Baniya</h4>
                  <p className="text-sm text-muted-foreground">Frontend designer</p>
                </div>
                
                  </div>
  
                  <div className="flex flex-col my-2 text-gray-600 ">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2/>
                      <Button variant="link">View Profile</Button>
                    </div>
  
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut/>
                      <Button variant="link">Logout</Button>
                    </div>
                    
                    
                  </div>
              
              </PopoverContent>
            </Popover>
            )
          }
            
            

          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
